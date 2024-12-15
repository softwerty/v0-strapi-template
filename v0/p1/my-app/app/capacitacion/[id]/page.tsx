import Link from 'next/link';
import { GraduationCap, Calendar, Users, MapPin, Clock, CheckCircle } from 'lucide-react';

const dummyCourse = {
  id: 1,
  name: 'Trabajo en Altura',
  date: '2024-04-15',
  time: '09:00 - 13:00',
  duration: '4 horas',
  participants: 20,
  location: 'Sala de Conferencias A',
  company: 'Constructora ABC',
  instructor: 'Ing. Laura Martínez',
  description: 'Curso diseñado para capacitar a los trabajadores en las técnicas y procedimientos de seguridad para el trabajo en altura, incluyendo el uso correcto de equipos de protección personal.',
  topics: [
    'Legislación aplicable al trabajo en altura',
    'Identificación de riesgos en trabajos en altura',
    'Equipos de protección personal para trabajo en altura',
    'Técnicas de ascenso y descenso seguro',
    'Procedimientos de rescate y emergencia'
  ],
  status: 'Programado'
};

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Link
          href="/capacitacion"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← Volver a Capacitaciones
        </Link>
        <div className="space-x-2">
          <Link
            href={`/capacitacion/${params.id}/editar`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Editar
          </Link>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Registrar Asistencia
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4 mb-4">
              <GraduationCap className="h-10 w-10 text-primary" />
              <h1 className="text-3xl font-bold">{dummyCourse.name}</h1>
            </div>
            <p className="text-gray-600 mb-4">{dummyCourse.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                <span>{dummyCourse.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-gray-400" />
                <span>{dummyCourse.time}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-gray-400" />
                <span>{dummyCourse.participants} participantes</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                <span>{dummyCourse.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Detalles del Curso</h2>
            <div className="space-y-2">
              <p><strong>Duración:</strong> {dummyCourse.duration}</p>
              <p><strong>Empresa:</strong> {dummyCourse.company}</p>
              <p><strong>Instructor:</strong> {dummyCourse.instructor}</p>
              <p><strong>Estado:</strong> 
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {dummyCourse.status}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Temas del Curso</h2>
            <ul className="list-disc list-inside space-y-2">
              {dummyCourse.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Material del Curso</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                  Manual de Trabajo en Altura.pdf
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                  Presentación del Curso.pptx
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                  Cuestionario de Evaluación.docx
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

