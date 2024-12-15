import Link from 'next/link';
import { CheckSquare, Calendar, User, Clock } from 'lucide-react';

const dummyTasks = [
  { id: 1, name: 'Revisar equipos de protección', dueDate: '2024-04-10', assignee: 'Juan Pérez', status: 'Pendiente', program: 'Seguridad en Altura' },
  { id: 2, name: 'Actualizar manual de procedimientos', dueDate: '2024-04-15', assignee: 'María González', status: 'En progreso', program: 'Gestión Documental' },
  { id: 3, name: 'Realizar inspección mensual', dueDate: '2024-04-20', assignee: 'Carlos Rodríguez', status: 'Completada', program: 'Inspecciones Regulares' },
];

export default function TareasPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestión de Tareas</h1>
        <Link
          href="/tareas/nueva"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Nueva Tarea
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyTasks.map((task) => (
          <div
            key={task.id}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <CheckSquare className={`h-10 w-10 ${
                task.status === 'Completada' ? 'text-green-500' :
                task.status === 'En progreso' ? 'text-yellow-500' : 'text-gray-400'
              }`} />
              <div>
                <h2 className="text-xl font-semibold">{task.name}</h2>
                <p className="text-sm text-gray-500">{task.program}</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                Fecha límite: {task.dueDate}
              </div>
              <div className="flex items-center text-sm">
                <User className="h-4 w-4 mr-2 text-gray-400" />
                Asignado a: {task.assignee}
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                Estado: {task.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

