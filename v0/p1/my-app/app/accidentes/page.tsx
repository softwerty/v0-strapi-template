import Link from 'next/link';
import { AlertTriangle, Calendar, MapPin, Activity } from 'lucide-react';

const dummyAccidents = [
  { id: 1, date: '2024-03-10', description: 'Caída desde altura', severity: 'Grave', location: 'Obra Central', company: 'Constructora ABC' },
  { id: 2, date: '2024-03-12', description: 'Corte con herramienta', severity: 'Leve', location: 'Taller Mecánico', company: 'Minera XYZ' },
  { id: 3, date: '2024-03-14', description: 'Exposición a químicos', severity: 'Moderado', location: 'Laboratorio', company: 'Fábrica 123' },
];

export default function AccidentesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Reporte y Análisis de Accidentes</h1>
        <Link
          href="/accidentes/nuevo"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Nuevo Reporte
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyAccidents.map((accident) => (
          <Link
            key={accident.id}
            href={`/accidentes/${accident.id}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <AlertTriangle className="h-10 w-10 text-red-500" />
              <div>
                <h2 className="text-xl font-semibold">{accident.description}</h2>
                <p className="text-sm text-gray-500">{accident.company}</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                {accident.date}
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                {accident.location}
              </div>
              <div className="flex items-center">
                <Activity className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-sm font-medium">Severidad: {accident.severity}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

