import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dummyData = [
  { name: 'Ene', accidentes: 4, incidentes: 7, capacitaciones: 2 },
  { name: 'Feb', accidentes: 3, incidentes: 5, capacitaciones: 3 },
  { name: 'Mar', accidentes: 2, incidentes: 6, capacitaciones: 4 },
  { name: 'Abr', accidentes: 1, incidentes: 4, capacitaciones: 5 },
  { name: 'May', accidentes: 5, incidentes: 8, capacitaciones: 3 },
  { name: 'Jun', accidentes: 3, incidentes: 6, capacitaciones: 4 },
];

export default function IndicadoresPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Panel de Indicadores</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Tasa de Accidentes</h2>
          <p className="text-4xl font-bold text-red-500">2.5%</p>
          <p className="text-sm text-gray-500">Últimos 6 meses</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Cumplimiento de Inspecciones</h2>
          <p className="text-4xl font-bold text-green-500">92%</p>
          <p className="text-sm text-gray-500">Este mes</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Empleados Capacitados</h2>
          <p className="text-4xl font-bold text-blue-500">78%</p>
          <p className="text-sm text-gray-500">Total de la empresa</p>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Estadísticas de Seguridad</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="accidentes" fill="#EF4444" />
            <Bar dataKey="incidentes" fill="#F59E0B" />
            <Bar dataKey="capacitaciones" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

