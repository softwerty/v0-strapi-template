import Link from 'next/link';
import { AlertTriangle, Calendar, MapPin, User, Clock, Activity } from 'lucide-react';

const dummyAccident = {
  id: 1,
  description: 'Caída desde altura',
  date: '2024-03-10',
  time: '14:30',
  location: 'Obra Central - Sector A',
  company: 'Constructora ABC',
  reportedBy: 'Juan Pérez',
  severity: 'Grave',
  status: 'En investigación',
  injuredPerson: 'Carlos Rodríguez',
  witnesses: ['Ana Martínez', 'Pedro Sánchez'],
  immediateActions: [
    'Se proporcionó primeros auxilios al trabajador lesionado',
    'Se aseguró el área para prevenir más accidentes',
    'Se notificó a los servicios de emergencia'
  ],
  rootCauses: [
    'Falta de uso del arnés de seguridad',
    'Ausencia de barandillas en el área de trabajo',
    'Falta de supervisión adecuada'
  ],
  correctiveActions: [
    'Reforzar la capacitación en trabajo en altura',
    'Instalar barandillas de seguridad en todas las áreas elevadas',
    'Implementar un sistema de supervisión más riguroso'
  ]
};

export default function AccidentDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Link
          href="/accidentes"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← Volver a Accidentes
        </Link>
        <div className="space-x-2">
          <Link
            href={`/accidentes/${params.id}/editar`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Editar
          </Link>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Generar Informe
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4 mb-4">
              <AlertTriangle className="h-10 w-10 text-red-500" />
              <h1 className="text-3xl font-bold">{dummyAccident.description}</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                <span>{dummyAccident.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-gray-400" />
                <span>{dummyAccident.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                <span>{dummyAccident.location}</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2 text-gray-400" />
                <span>{dummyAccident.reportedBy}</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                <Activity className="w-4 h-4 mr-1" />
                Severidad: {dummyAccident.severity}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                <Clock className="w-4 h-4 mr-1" />
                Estado: {dummyAccident.status}
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Detalles del Accidente</h2>
            <div className="space-y-2">
              <p><strong>Persona lesionada:</strong> {dummyAccident.injuredPerson}</p>
              <p><strong>Testigos:</strong> {dummyAccident.witnesses.join(', ')}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Acciones Inmediatas</h2>
            <ul className="list-disc list-inside space-y-2">
              {dummyAccident.immediateActions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Causas Raíz</h2>
            <ul className="list-disc list-inside space-y-2">
              {dummyAccident.rootCauses.map((cause, index) => (
                <li key={index}>{cause}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Acciones Correctivas</h2>
            <ul className="list-disc list-inside space-y-2">
              {dummyAccident.correctiveActions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Documentos Adjuntos</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                  Informe de Investigación del Accidente.pdf
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                  Fotos del Lugar del Accidente.zip
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                  Declaraciones de Testigos.docx
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

