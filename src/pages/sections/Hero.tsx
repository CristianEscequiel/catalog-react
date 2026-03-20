import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { activeClient } from "../../config/client";

const Hero = () => {
  return (
    <section id="hero" className="hero-glow relative overflow-hidden rounded-3xl px-6 py-14 md:px-10 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <span className="surface-soft inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
            Catalogo industrial premium
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Equipamos tu operacion con seguridad y confianza
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
            En {activeClient.name} combinamos productos certificados, asesoria tecnica y respuesta rapida para
            que tu equipo trabaje protegido.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/catalog"
              className="primary-button inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:opacity-90"
            >
              Ver catalogo
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={`https://wa.me/${activeClient.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="surface-card inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              Contactar asesor
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="surface-card rounded-xl p-3">
              <p className="text-xl font-bold">+500</p>
              <p className="text-xs text-muted">Productos activos</p>
            </div>
            <div className="surface-card rounded-xl p-3">
              <p className="text-xl font-bold">24/7</p>
              <p className="text-xs text-muted">Atencion comercial</p>
            </div>
            <div className="surface-card rounded-xl p-3">
              <p className="text-xl font-bold">98%</p>
              <p className="text-xs text-muted">Clientes recurrentes</p>
            </div>
          </div>
        </div>

        <div className="surface-card rounded-3xl p-6 md:p-8">
          <h2 className="text-lg font-semibold">Por que elegirnos</h2>
          <div className="mt-5 space-y-4">
            <div className="surface-soft flex items-start gap-3 rounded-xl p-3">
              <ShieldCheck size={18} className="mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold">Calidad certificada</p>
                <p className="text-sm text-muted">Seleccion de marcas con cumplimiento normativo.</p>
              </div>
            </div>
            <div className="surface-soft flex items-start gap-3 rounded-xl p-3">
              <Truck size={18} className="mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold">Entrega agil</p>
                <p className="text-sm text-muted">Stock preparado para despachos en tiempos cortos.</p>
              </div>
            </div>
            <div className="surface-soft flex items-start gap-3 rounded-xl p-3">
              <Sparkles size={18} className="mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold">Asesoria experta</p>
                <p className="text-sm text-muted">Te ayudamos a elegir la mejor solucion por rubro.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
