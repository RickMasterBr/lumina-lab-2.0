"use client"; // Componente interativo, precisa ser do lado do cliente.

import React, { useState, useEffect, useRef } from "react";
import Botao from "@/components/comum/Botao";

const SecaoHeroi = ({
  titulo,
  subtitulo,
  textoCtaPrimario,
  linkCtaPrimario,
  textoCtaSecundario,
  linkCtaSecundario,
}) => {
  const [posicaoMouse, setPosicaoMouse] = useState({ x: 0, y: 0 });
  const refHeroi = useRef(null);

  useEffect(() => {
    const lidarMovimentoMouse = (evento) => {
      if (refHeroi.current) {
        const rect = refHeroi.current.getBoundingClientRect();
        const x = ((evento.clientX - rect.left) / rect.width) * 100;
        const y = ((evento.clientY - rect.top) / rect.height) * 100;
        setPosicaoMouse({ x, y });
      }
    };

    const currentHeroRef = refHeroi.current;
    if (currentHeroRef) {
      currentHeroRef.addEventListener("mousemove", lidarMovimentoMouse);
    }

    return () => {
      if (currentHeroRef) {
        currentHeroRef.removeEventListener("mousemove", lidarMovimentoMouse);
      }
    };
  }, []);

  const estiloFundoDinamico = {
    "--mouse-x": `${posicaoMouse.x}%`,
    "--mouse-y": `${posicaoMouse.y}%`,
    backgroundImage: `
      radial-gradient(
        circle 800px at var(--mouse-x) var(--mouse-y),
        rgba(var(--cor-primaria-rgb), 0.12) 0%,
        rgba(15, 23, 42, 0.1) 35%,
        transparent 65%
      )
    `,
  };

  return (
    <section
      ref={refHeroi}
      className="relative py-28 md:py-40 bg-dark-bg overflow-hidden"
      style={estiloFundoDinamico}
    >
      {/* Elementos sutis de fundo */}
      <div className="absolute inset-0 opacity-10 animate-subtle-pulse z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 animate-fade-in-up">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--cor-primaria-usr)]">
            {titulo}
          </span>
        </h1>
        <p
          className="text-lg md:text-xl text-medium-text max-w-3xl mx-auto mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {subtitulo}
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Botao
            href={linkCtaPrimario}
            variante="primary"
            tamanho="lg"
            className="shadow-lg hover:shadow-glow-brand-primary-sm"
          >
            {textoCtaPrimario}
          </Botao>
          {textoCtaSecundario && linkCtaSecundario && (
            <Botao
              href={linkCtaSecundario}
              variante="secondary"
              tamanho="lg"
              className="shadow-md hover:shadow-glow-brand-secondary-sm"
            >
              {textoCtaSecundario}
            </Botao>
          )}
        </div>
      </div>
    </section>
  );
};

export default SecaoHeroi;
