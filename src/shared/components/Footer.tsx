import { Github, Linkedin } from "lucide-react";
import { activeClient } from "../../config/client";

const Footer = () => {
  return (
    <footer className="mt-10 rounded-2xl border border-text/10 px-4 py-5 surface-card md:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted">{activeClient.name} · Catalog landing page</p>
        <div className="flex items-center gap-3">
          <a
            href={activeClient.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold primary-link"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={activeClient.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold primary-link"
            title="GitHub"
            aria-label="GitHub"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
