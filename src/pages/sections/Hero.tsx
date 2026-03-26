import { ArrowRight, ShieldCheck, Sparkles, Truck, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { activeClient } from "../../config/client";
import { type HeroBenefitIcon, type HeroSectionContent } from "../../config/homeContent";

type HeroProps = {
  content: HeroSectionContent;
};

const iconByBenefit: Record<HeroBenefitIcon, LucideIcon> = {
  shieldCheck: ShieldCheck,
  truck: Truck,
  sparkles: Sparkles,
};

const Hero = ({ content }: HeroProps) => {
  return (
    <section id="hero" className="hero-glow relative overflow-hidden rounded-3xl px-6 py-14 md:px-10 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <span className="surface-soft inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
            {content.badge}
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/catalog"
              className="primary-button inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:opacity-90"
            >
              {content.primaryCtaLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={`https://wa.me/${activeClient.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="surface-card inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              {content.secondaryCtaLabel}
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div key={stat.label} className="surface-card rounded-xl p-3">
                <p className="text-xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card rounded-3xl p-6 md:p-8">
          <h2 className="text-lg font-semibold">{content.benefitsTitle}</h2>
          <div className="mt-5 space-y-4">
            {content.benefits.map((benefit) => {
              const Icon = iconByBenefit[benefit.icon];

              return (
                <div key={benefit.title} className="surface-soft flex items-start gap-3 rounded-xl p-3">
                  <Icon size={18} className="mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">{benefit.title}</p>
                    <p className="text-sm text-muted">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
