import Link from 'next/link';
import { Building2, Users, ClipboardList, AlertTriangle } from 'lucide-react';
import { dummyCompanies } from './data';

export default function CompaniesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Empresas</h1>
        <Link
          href="/empresas/nuevo"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Nueva Empresa
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyCompanies.map((company) => (
          <Link
            key={company.id}
            href={`/empresas/${company.id}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <Building2 className="h-10 w-10 text-gray-400" />
              <div>
                <h2 className="text-xl font-semibold">{company.name}</h2>
                <p className="text-sm text-gray-500">{company.industry}</p>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Users className="h-5 w-5 mx-auto text-gray-400" />
                <div className="mt-1 text-sm font-medium">{company.employees}</div>
                <div className="text-xs text-gray-500">Empleados</div>
              </div>
              <div className="text-center">
                <ClipboardList className="h-5 w-5 mx-auto text-gray-400" />
                <div className="mt-1 text-sm font-medium">{company.programs}</div>
                <div className="text-xs text-gray-500">Programas</div>
              </div>
              <div className="text-center">
                <AlertTriangle className="h-5 w-5 mx-auto text-gray-400" />
                <div className="mt-1 text-sm font-medium">{company.incidents}</div>
                <div className="text-xs text-gray-500">Incidentes</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

