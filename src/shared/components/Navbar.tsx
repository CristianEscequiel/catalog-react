import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { activeClient } from "../../config/client";

type NavbarProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const getNavClassName = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? "surface-soft" : "hover:opacity-80"}`;

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <header className="glass-nav fixed top-0 left-0 z-50 w-full text-text transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <NavLink to="/" className="text-lg font-bold tracking-tight md:text-xl">
          {activeClient.name}
        </NavLink>

        <div className="flex items-center gap-1 md:gap-2">
          <NavLink to="/" className={getNavClassName}>
            Inicio
          </NavLink>
          <a href="/#about-us" className="rounded-lg px-3 py-2 text-sm font-medium transition hover:opacity-80">
            Nosotros
          </a>
          <NavLink to="/catalog" className={getNavClassName}>
            Catalogo
          </NavLink>

          <button
            type="button"
            onClick={toggleTheme}
            className="primary-button inline-flex items-center rounded-lg p-2 transition hover:opacity-90"
            aria-label={theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
            title={theme === "light" ? "Cambiar a oscuro" : "Cambiar a claro"}
          >
            {theme === "light" ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
