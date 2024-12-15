import Link from 'next/link'
import { Button } from './button'

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  renderPageLink: (page: number) => string
}

export function Pagination({ totalItems, itemsPerPage, currentPage, renderPageLink }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {currentPage > 1 && (
        <Button variant="outline" asChild>
          <Link href={renderPageLink(currentPage - 1)}>Anterior</Link>
        </Button>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button 
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          asChild
        >
          <Link href={renderPageLink(page)}>{page}</Link>
        </Button>
      ))}
      {currentPage < totalPages && (
        <Button variant="outline" asChild>
          <Link href={renderPageLink(currentPage + 1)}>Siguiente</Link>
        </Button>
      )}
    </div>
  )
}

