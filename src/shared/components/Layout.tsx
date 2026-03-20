import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "../../app/useTheme";
import { activeClient } from "../../config/client";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout = () => {
  const { theme, toggleTheme } = useTheme();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.querySelector(hash);

      if (targetElement) {
        const yOffset = -92;
        const yPosition = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: yPosition, behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return (
    <div className="app-shell bg-bg text-text transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto mt-16 w-full max-w-6xl px-4 pb-10 md:px-6">
        <Outlet />
        <Footer />
      </main>

      <a
        href={`https://wa.me/${activeClient.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-button fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full p-3 shadow-lg transition hover:opacity-90"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <MessageCircle size={22} aria-hidden="true" />
      </a>
    </div>
  );
};
