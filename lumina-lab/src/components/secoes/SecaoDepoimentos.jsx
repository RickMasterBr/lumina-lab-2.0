import React from "react";
import CardDepoimento from "./elementos/CardDepoimento";

const SecaoDepoimentos = ({ titulo, depoimentos }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-light-text">
        {titulo}
      </h2>
      <p className="text-base sm:text-lg text-medium-text text-center mb-16 max-w-2xl mx-auto">
        O feedback de nossos parceiros, alunos e clientes-teste é fundamental
        para a evolução da Lúmina. Veja o que dizem sobre nossa colaboração e
        impacto.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {depoimentos.map((depoimento) => (
          <div key={depoimento.id} className="h-full">
            <CardDepoimento depoimento={depoimento} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecaoDepoimentos;
