import Link from 'next/link';
import { FileCheck, Calendar, MapPin, User, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const dummyInspection = {
  id: 1,
  type: 'Seguridad General',
  date: '2024-03-15',
  location: 'Obra Central',
  company: 'Constructora ABC',
  inspector: 'Ing. Carlos Rodríguez',
  status: 'Completada',
  findings: [
    { id: 1, description: 'Falta de señalización en zona de riesgo', severity: 'Alta', status: 'Pendiente' },
    { id: 2, description: 'Extintores con fecha de recarga vencida', severity: 'Media', status: 'En progreso' },
    { id: 3, description: 'Uso incorrecto de EPP en algunos trabajadores', severity: 'Media', status: 'Resuelto' },
  ],
  recommendations: [
    'Instalar señalización de seguridad en todas las áreas de riesgo identificadas',
    'Programar recarga inmediata de todos los extintores vencidos',
    'Realizar capacitación de refuerzo sobre el uso correcto de EPP',
  ]
};

export default function InspectionDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Link
          href="/inspecciones"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← Volver a Inspecciones
        </Link>
        <div className="space-x-2">
          <Link
            href={`/inspecciones/${params.id}/editar`}
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
              <FileCheck className="h-10 w-10 text-primary" />
              <h1 className="text-3xl font-bold">{dummyInspection.type}</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                <span>{dummyInspection.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                <span>{dummyInspection.location}</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2 text-gray-400" />
                <span>{dummyInspection.inspector}</span>
              </div>
              <div className="flex items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  dummyInspection.status === 'Completada' ? 'bg-green-100 text-green-800' :
                  dummyInspection.status === 'En progreso' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {dummyInspection.status === 'Completada' && <CheckCircle className="w-4 h-4 mr-1" />}
                  {dummyInspection.status === 'En progreso' && <Clock className="w-4 h-4 mr-1" />}
                  {dummyInspection.status === 'Pendiente' && <AlertTriangle className="w-4 h-4 mr-1" />}
                  {dummyInspection.status}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Hallazgos</h2>
            <ul className="space-y-4">
              {dummyInspection.findings.map((finding) => (
                <li key={finding.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <p className="font-medium">{finding.description}</p>
                  <div className="flex justify-between mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      finding.severity === 'Alta' ? 'bg-red-100 text-red-800' :
                      finding.severity === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {finding.severity}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      finding.status === 'Pendiente' ? 'bg-red-100 text-red-800' :
                      finding.status === 'En progreso' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {finding.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Recomendaciones</h2>
            <ul className="list-disc list-inside space-y-2">
              {dummyInspection.recommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Documentos Adjuntos</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                  Informe de Inspección.pdf
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                  Fotos de la Inspección.zip
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

