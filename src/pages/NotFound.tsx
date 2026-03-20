import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="rounded-2xl p-8 text-center surface-card">
      <p className="text-sm font-medium text-muted">404</p>
      <h1 className="mt-1 text-3xl font-bold">Pagina no encontrada</h1>
      <p className="mt-2 text-muted">La ruta que intentaste abrir no existe.</p>

      <Link
        to="/"
        className="primary-button mt-6 inline-flex rounded-lg px-4 py-2 text-sm font-semibold transition"
      >
        Volver al inicio
      </Link>
    </section>
  );
};

export default NotFound;
