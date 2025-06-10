import React from "react";
import CardTrilha from "./elementos/CardTrilha";

const SecaoTrilhas = ({ titulo, trilhas }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-light-text">
        {titulo}
      </h2>
      <p className="text-xl text-medium-text text-center mb-16 max-w-2xl mx-auto">
        Capacitação completa em marketing digital, do planejamento à execução.
        Acesse conteúdos, ferramentas e templates através do nosso aplicativo e
        transforme seu conhecimento em ação.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {trilhas.map((trilha) => (
          <div key={trilha.id} className="h-full">
            <CardTrilha trilha={trilha} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecaoTrilhas;
