import { BadgeCheck, Factory, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about-us" className="scroll-mt-24 mt-8 rounded-3xl p-4 surface-soft md:p-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Nosotros</p>
        <h2 className="mt-1 text-2xl font-bold">Comprometidos con la seguridad industrial</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="surface-card rounded-2xl p-5">
          <Factory size={20} aria-hidden="true" />
          <h3 className="mt-3 text-lg font-semibold">Especialistas industriales</h3>
          <p className="mt-2 text-sm text-muted">
            Acompanamos operaciones de manufactura, logistica y construccion con soluciones de seguridad confiables.
          </p>
        </article>

        <article className="surface-card rounded-2xl p-5">
          <BadgeCheck size={20} aria-hidden="true" />
          <h3 className="mt-3 text-lg font-semibold">Normativas al dia</h3>
          <p className="mt-2 text-sm text-muted">
            Nuestros productos y recomendaciones se alinean con estandares vigentes para reducir riesgos en campo.
          </p>
        </article>

        <article className="surface-card rounded-2xl p-5">
          <Users size={20} aria-hidden="true" />
          <h3 className="mt-3 text-lg font-semibold">Atencion cercana</h3>
          <p className="mt-2 text-sm text-muted">
            Desde la seleccion hasta la postventa, brindamos acompanamiento tecnico para cada equipo de trabajo.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
