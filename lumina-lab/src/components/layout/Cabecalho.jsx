"use client"; // Diretiva essencial para componentes com interatividade

import React, { useState, useEffect } from "react";

const Cabecalho = ({ textoLogo, linksNavegacao }) => {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const [paginaRolada, setPaginaRolada] = useState(false);

  useEffect(() => {
    const lidarComScroll = () => {
      setPaginaRolada(window.scrollY > 10);
    };

    window.addEventListener("scroll", lidarComScroll);
    lidarComScroll(); // Verifica o estado inicial no carregamento

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
      } sticky top-0 z-50`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              {textoLogo}
            </span>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            {linksNavegacao.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => lidarCliqueLink(e, link.href)}
                className="text-medium-text hover:text-brand-primary transition-colors duration-300 font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => lidarCliqueLink(e, "#contato")}
              className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors duration-300 font-medium cursor-pointer"
            >
              Fale Conosco
            </a>
          </nav>

          {/* Botão do Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuMobileAberto(!menuMobileAberto)}
              className="text-light-text hover:text-brand-primary focus:outline-none"
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

      {/* Menu Mobile Aberto */}
      {menuMobileAberto && (
        <div
          id="mobile-menu"
          className="menu-mobile-lumina md:hidden absolute w-full"
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            {linksNavegacao.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => lidarCliqueLink(e, link.href)}
                className="text-medium-text hover:text-brand-primary transition-colors duration-300 font-medium text-lg cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => lidarCliqueLink(e, "#contato")}
              className="bg-brand-primary text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300 font-medium text-lg cursor-pointer"
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
