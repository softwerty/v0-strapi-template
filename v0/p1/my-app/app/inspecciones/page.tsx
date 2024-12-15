import Link from 'next/link';
import { FileCheck, Calendar, MapPin, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const dummyInspections = [
  { id: 1, date: '2024-03-15', type: 'Seguridad General', location: 'Obra Central', company: 'Constructora ABC', status: 'Completada' },
  { id: 2, date: '2024-03-20', type: 'Equipos de Protección', location: 'Planta Principal', company: 'Minera XYZ', status: 'Pendiente' },
  { id: 3, date: '2024-03-25', type: 'Higiene Industrial', location: 'Área de Producción', company: 'Fábrica 123', status: 'En progreso' },
];

export default function InspeccionesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Inspecciones y Auditorías</h1>
        <Link
          href="/inspecciones/nueva"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Nueva Inspección
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyInspections.map((inspection) => (
          <Link
            key={inspection.id}
            href={`/inspecciones/${inspection.id}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <FileCheck className="h-10 w-10 text-gray-400" />
              <div>
                <h2 className="text-xl font-semibold">{inspection.type}</h2>
                <p className="text-sm text-gray-500">{inspection.company}</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                {inspection.date}
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                {inspection.location}
              </div>
              <div className="flex items-center">
                <strong className="text-sm mr-2">Estado:</strong>
                {inspection.status === 'Completada' && <CheckCircle className="h-5 w-5 text-green-500" />}
                {inspection.status === 'En progreso' && <Clock className="h-5 w-5 text-yellow-500" />}
                {inspection.status === 'Pendiente' && <AlertTriangle className="h-5 w-5 text-red-500" />}
                <span className="ml-1 text-sm">{inspection.status}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

