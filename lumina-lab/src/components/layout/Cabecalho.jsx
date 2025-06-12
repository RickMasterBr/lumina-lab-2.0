"use client";
import React, { useState, useEffect } from "react";

const Cabecalho = ({ textoLogo, linksNavegacao }) => {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const [paginaRolada, setPaginaRolada] = useState(false);

  useEffect(() => {
    const lidarComScroll = () => {
      setPaginaRolada(window.scrollY > 10);
    };
    window.addEventListener("scroll", lidarComScroll);
    lidarComScroll();
    return () => {
      window.removeEventListener("scroll", lidarComScroll);
    };
  }, []);

  const lidarCliqueLink = (evento, href) => {
    evento.preventDefault();
    const idAlvo = href.substring(1);
    const elementoAlvo = document.getElementById(idAlvo);
    if (elementoAlvo) {
      elementoAlvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (menuMobileAberto) {
      setMenuMobileAberto(false);
    }
  };

  return (
    <header
      className={`cabecalho-lumina ${
        paginaRolada ? "scrolled" : ""
      } sticky top-0 z-50 bg-white shadow-sm transition-shadow duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 md:min-h-20 py-2">
          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img
              src="/images/logo-lumina-header.png"
              alt="Lúmina Lab Logo"
              className="h-10 w-auto" // Controla a altura da logo
            />
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex space-x-6 items-center">
            {linksNavegacao.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => lidarCliqueLink(e, link.href)}
                className="text-medium-text hover:text-[var(--cor-primaria-usr)] transition-colors duration-300 font-medium cursor-pointer text-sm whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => lidarCliqueLink(e, "#contato")}
              className="bg-[var(--cor-primaria-usr)] text-white px-5 py-2 rounded-lg font-medium text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(var(--cor-primaria-rgb),0.4)] whitespace-nowrap"
            >
              Fale Conosco
            </a>
          </nav>

          {/* BOTÃO MENU MOBILE */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuMobileAberto(!menuMobileAberto)}
              className="text-light-text hover:text-[var(--cor-primaria-usr)] focus:outline-none"
              aria-label="Alternar menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuMobileAberto ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuMobileAberto && (
        <div
          id="mobile-menu"
          className="menu-mobile-lumina md:hidden absolute w-full bg-white border-t border-gray-200"
        >
          <nav className="flex flex-col items-center space-y-6 py-6 px-4">
            {linksNavegacao.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => lidarCliqueLink(e, link.href)}
                className="text-medium-text hover:text-[var(--cor-primaria-usr)] transition-colors duration-300 font-medium text-base cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => lidarCliqueLink(e, "#contato")}
              className="bg-[var(--cor-primaria-usr)] text-white px-6 py-3 rounded-lg font-medium text-base cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(var(--cor-primaria-rgb),0.4)]"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Cabecalho;
