import React from "react";
import CardComoFunciona from "./elementos/CardComoFunciona";

const SecaoComoFunciona = ({ titulo, passos }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-light-text">
        {titulo}
      </h2>
      <p className="text-base sm:text-lg text-medium-text text-center mb-16 max-w-2xl mx-auto">
        Aplicamos uma abordagem estruturada e colaborativa para desenvolver
        soluções de marketing digital que geram resultados reais e impacto
        positivo.
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {passos.map((passo) => (
          <div key={passo.id} className="h-full">
            <CardComoFunciona passo={passo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecaoComoFunciona;
