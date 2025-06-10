import React from "react";
import CardPilar from "./elementos/CardPilar";

const SecaoPilares = ({ titulo, pilares }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-light-text">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--cor-primaria-usr)] to-[color:var(--cor-secundaria-usr)]">
          {titulo}
        </span>
      </h2>
      <p className="text-base sm:text-lg text-medium-text text-center mb-16 max-w-2xl mx-auto">
        Nossos valores fundamentais que guiam cada projeto e iniciativa,
        combinando formação de ponta com transformação real.
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {pilares.map((pilar) => (
          <div key={pilar.id} className="h-full">
            <CardPilar pilar={pilar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecaoPilares;
