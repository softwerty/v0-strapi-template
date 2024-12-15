import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ClipboardList, CheckCircle, XCircle, Clock } from 'lucide-react';
import { dummyCompanies, dummyPrograms } from '../../data';

export default function CompanyPreventionProgramsPage({ params }: { params: { id: string } }) {
  const companyId = parseInt(params.id);
  const company = dummyCompanies.find(c => c.id === companyId);

  if (!company) {
    notFound();
  }

  const companyPrograms = dummyPrograms.filter(program => program.company_id === companyId);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Programas de Prevención</h1>
          <p className="text-gray-500">Empresa: {company.name}</p>
        </div>
        <Link
          href={`/empresas/${companyId}/programas/nuevo`}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Nuevo Programa
        </Link>
      </div>

      {companyPrograms.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">No hay programas de prevención registrados para esta empresa.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companyPrograms.map((program) => (
            <Link
              key={program.id}
              href={`/empresas/${companyId}/programas/${program.id}`}
              className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <ClipboardList className="h-10 w-10 text-gray-400" />
                <div>
                  <h2 className="text-xl font-semibold">{program.name}</h2>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <p className="text-sm"><strong>Objetivo:</strong> {program.objective}</p>
                <div className="flex items-center">
                  <strong className="text-sm mr-2">Estado:</strong>
                  {program.status === 'Completado' && <CheckCircle className="h-5 w-5 text-green-500" />}
                  {program.status === 'En progreso' && <Clock className="h-5 w-5 text-yellow-500" />}
                  {program.status === 'Pendiente' && <XCircle className="h-5 w-5 text-red-500" />}
                  <span className="ml-1 text-sm">{program.status}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Link
          href={`/empresas/${companyId}`}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Volver a detalles de la empresa
        </Link>
      </div>
    </div>
  );
}

