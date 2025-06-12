import React from "react";
// O import do Botao não é mais necessário
// import Botao from "@/components/comum/Botao";

const SecaoCtaFinal = ({ titulo, descricao, textoCta, linkCta }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cor-secundaria-usr)] to-[var(--cor-primaria-usr)]">
          {titulo}
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-medium-text max-w-2xl mx-auto mb-10">
        {descricao}
      </p>

      {/* MUDANÇA AQUI: Botão "Entre em Contato" estilizado */}
      <a
        href={linkCta}
        className="inline-block bg-[var(--cor-primaria-usr)] text-white px-8 py-3.5 rounded-lg font-semibold text-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(var(--cor-primaria-rgb),0.4)]"
      >
        {textoCta}
      </a>
    </div>
  );
};

export default SecaoCtaFinal;
