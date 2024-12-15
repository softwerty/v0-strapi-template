import Link from 'next/link';
import { notFound } from 'next/navigation';
import { dummyCompanies } from '../data';

export default function CompanyDetail({ params }: { params: { id: string } }) {
  const company = dummyCompanies.find(c => c.id === parseInt(params.id));

  if (!company) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Link 
          href="/empresas" 
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← Volver a empresas
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{company.name}</h1>
          <div className="grid gap-2">
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Industria</span>
              <span>{company.industry}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Contacto</span>
              <span>{company.contact}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Estadísticas</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-sm text-gray-500">Empleados</div>
              <div className="text-2xl font-bold">{company.employees}</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-sm text-gray-500">Incidentes (Año)</div>
              <div className="text-2xl font-bold">{company.incidents}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link 
          href={`/empresas/${company.id}/programas`}
          className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold">Programas de Prevención</h3>
          <p className="text-sm text-gray-500">Ver programas activos</p>
        </Link>
        
        <Link 
          href={`/empresas/${company.id}/inspecciones`}
          className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold">Inspecciones</h3>
          <p className="text-sm text-gray-500">Ver historial de inspecciones</p>
        </Link>

        <Link 
          href={`/empresas/${company.id}/documentos`}
          className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold">Documentos</h3>
          <p className="text-sm text-gray-500">Ver documentación</p>
        </Link>
      </div>
    </div>
  );
}

