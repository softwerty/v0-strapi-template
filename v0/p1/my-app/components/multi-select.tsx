import * as React from "react"
import { X } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Command, CommandGroup, CommandItem } from "@/components/ui/command"
import { Command as CommandPrimitive } from "cmdk"

type Option = {
  label: string
  value: string
}

type MultiSelectProps = {
  options: Option[]
  selected: string[]
  onChange: (selected: string[]) => void
  className?: string
}

export function MultiSelect({
  options,
  selected,
  onChange,
  className,
  ...props
}: MultiSelectProps) {
  const [inputValue, setInputValue] = React.useState('')

  const handleSelect = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    onChange(newSelected);
  };

  const handleRemove = (value: string) => {
    onChange(selected.filter((item) => item !== value))
  }

  return (
    <Command className={className} {...props}>
      <div className="flex flex-wrap gap-1 mb-2">
        {selected.map((value) => (
          <Badge key={value} variant="secondary">
            {options.find((option) => option.value === value)?.label || value}
            <button
              className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => handleRemove(value)}
            >
              <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
            </button>
          </Badge>
        ))}
      </div>
      <div className="relative">
        <CommandPrimitive.Input
          placeholder="Select companies..."
          value={inputValue}
          onValueChange={setInputValue}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <CommandGroup className="max-h-64 overflow-auto mt-2">
        {options.map((option) => (
          <CommandItem
            key={option.value}
            onSelect={() => handleSelect(option.value)}
            className="cursor-pointer"
          >
            <div
              className={`mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary ${
                selected.includes(option.value)
                  ? "bg-primary text-primary-foreground"
                  : "opacity-50"
              }`}
            >
              {selected.includes(option.value) && <X className="h-4 w-4" />}
            </div>
            {option.label}
          </CommandItem>
        ))}
      </CommandGroup>
    </Command>
  )
}

