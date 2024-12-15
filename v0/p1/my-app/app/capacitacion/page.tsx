import Link from 'next/link';
import { GraduationCap, Calendar, Users, MapPin } from 'lucide-react';

const dummyCourses = [
  { id: 1, name: 'Trabajo en Altura', date: '2024-04-15', participants: 20, location: 'Sala de Conferencias A', company: 'Constructora ABC' },
  { id: 2, name: 'Manejo de Sustancias Peligrosas', date: '2024-04-20', participants: 15, location: 'Laboratorio Central', company: 'Fábrica 123' },
  { id: 3, name: 'Primeros Auxilios', date: '2024-04-25', participants: 30, location: 'Centro de Capacitación', company: 'Minera XYZ' },
];

export default function CapacitacionPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Capacitación</h1>
        <Link
          href="/capacitacion/nuevo"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Nuevo Curso
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyCourses.map((course) => (
          <Link
            key={course.id}
            href={`/capacitacion/${course.id}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <GraduationCap className="h-10 w-10 text-green-500" />
              <div>
                <h2 className="text-xl font-semibold">{course.name}</h2>
                <p className="text-sm text-gray-500">{course.company}</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                {course.date}
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2 text-gray-400" />
                {course.participants} participantes
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                {course.location}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

