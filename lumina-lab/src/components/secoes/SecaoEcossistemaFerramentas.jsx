import React from "react";
import CardFerramenta from "./elementos/CardFerramenta";

const SecaoEcossistemaFerramentas = ({ titulo, ferramentas }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-light-text">
        {titulo}
      </h2>
      <p className="text-xl text-medium-text text-center mb-16 max-w-2xl mx-auto">
        Exploramos um arsenal de metodologias e tecnologias para construir
        soluções digitais completas e inovadoras.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ferramentas.map((ferramenta) => (
          <div key={ferramenta.id} className="h-full">
            <CardFerramenta ferramenta={ferramenta} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecaoEcossistemaFerramentas;
