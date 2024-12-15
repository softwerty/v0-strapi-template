import Link from 'next/link';
import { Activity, Thermometer, Droplets, Volume2, AlertTriangle } from 'lucide-react';

const dummySensors = [
  { id: 1, name: 'Sensor de Temperatura', type: 'Temperatura', value: '28°C', status: 'Normal', location: 'Área de Producción' },
  { id: 2, name: 'Sensor de Humedad', type: 'Humedad', value: '65%', status: 'Advertencia', location: 'Almacén' },
  { id: 3, name: 'Sensor de Ruido', type: 'Ruido', value: '85 dB', status: 'Peligro', location: 'Zona de Maquinaria' },
  { id: 4, name: 'Sensor de Gases', type: 'Gases', value: '15 ppm', status: 'Normal', location: 'Laboratorio' },
];

export default function MonitoreoPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Monitoreo en Tiempo Real</h1>
        <Link
          href="/monitoreo/nuevo"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Agregar Sensor
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummySensors.map((sensor) => (
          <Link
            key={sensor.id}
            href={`/monitoreo/${sensor.id}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              {sensor.type === 'Temperatura' && <Thermometer className="h-10 w-10 text-red-500" />}
              {sensor.type === 'Humedad' && <Droplets className="h-10 w-10 text-blue-500" />}
              {sensor.type === 'Ruido' && <Volume2 className="h-10 w-10 text-yellow-500" />}
              {sensor.type === 'Gases' && <Activity className="h-10 w-10 text-green-500" />}
              <div>
                <h2 className="text-xl font-semibold">{sensor.name}</h2>
                <p className="text-sm text-gray-500">{sensor.location}</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Valor actual:</span>
                <span className="text-lg font-bold">{sensor.value}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Estado:</span>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  sensor.status === 'Normal' ? 'bg-green-100 text-green-800' :
                  sensor.status === 'Advertencia' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {sensor.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

