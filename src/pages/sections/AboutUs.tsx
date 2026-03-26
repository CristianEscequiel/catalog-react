import { BadgeCheck, Factory, Users, type LucideIcon } from "lucide-react";
import { type AboutUsIcon, type AboutUsSectionContent } from "../../config/homeContent";

type AboutUsProps = {
  content: AboutUsSectionContent;
};

const iconByAboutItem: Record<AboutUsIcon, LucideIcon> = {
  factory: Factory,
  badgeCheck: BadgeCheck,
  users: Users,
};

const AboutUs = ({ content }: AboutUsProps) => {
  return (
    <section id="about-us" className="scroll-mt-24 mt-8 rounded-3xl p-4 surface-soft md:p-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">{content.badge}</p>
        <h2 className="mt-1 text-2xl font-bold">{content.title}</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {content.items.map((item) => {
          const Icon = iconByAboutItem[item.icon];

          return (
            <article key={item.title} className="surface-card rounded-2xl p-5">
              <Icon size={20} aria-hidden="true" />
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
