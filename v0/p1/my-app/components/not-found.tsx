import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-xl text-gray-600">Página no encontrada</h2>
      <p className="text-gray-500">Lo sentimos, la página que buscas no existe.</p>
      <Link
        href="/"
        className="text-primary hover:text-primary/90"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

