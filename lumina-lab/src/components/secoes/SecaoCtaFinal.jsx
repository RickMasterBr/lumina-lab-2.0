import React from "react";
import Botao from "@/components/comum/Botao";

const SecaoCtaFinal = ({ titulo, descricao, textoCta, linkCta }) => {
  // O console.log não é mais necessário, podemos removê-lo.
  // console.log("--- DENTRO DA SECAO CTA FINAL --- Título recebido:", titulo);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* ---- CÓDIGO CORRIGIDO AQUI ---- */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cor-secundaria-usr)] to-[var(--cor-primaria-usr)]">
          {titulo}
        </span>
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-medium-text max-w-2xl mx-auto mb-10">
        {descricao}
      </p>
      <Botao
        href={linkCta}
        variante="primary"
        tamanho="lg"
        className="transform hover:scale-105"
      >
        {textoCta}
      </Botao>
    </div>
  );
};

export default SecaoCtaFinal;
