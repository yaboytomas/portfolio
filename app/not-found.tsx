import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "Lo sentimos, no pudimos encontrar la página que buscas."
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h2 className="text-4xl font-bold">Página no encontrada</h2>
      <p className="mt-4 text-lg">No pudimos encontrar la página que estás buscando.</p>
      <a href="/" className="mt-8 text-blue-500 hover:underline">
        Volver al inicio
      </a>
    </div>
  );
} 