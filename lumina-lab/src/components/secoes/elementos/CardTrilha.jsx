import React from "react";

const CardTrilha = ({ trilha }) => {
  // Clona o ícone para podermos adicionar classes a ele
  const elementoIcone = React.isValidElement(trilha.icon)
    ? React.cloneElement(trilha.icon, {
        className: "w-10 h-10 text-brand-primary",
      })
    : null;

  return (
    // Aplicamos as classes para os efeitos de borda e brilho que já estão no nosso CSS global
    <div className="card-borda-gradiente-animada container-brilho-card bg-dark-card p-8 rounded-xl shadow-xl hover:shadow-brand-primary/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 flex flex-col items-center text-center h-full">
      {/* A div abaixo é necessária para o efeito de brilho funcionar corretamente */}
      <div className="conteudo-brilho-card flex flex-col items-center text-center h-full w-full">
        {elementoIcone && (
          <div className="mb-6 p-4 bg-brand-primary/10 rounded-full inline-block ring-2 ring-brand-primary/30">
            {elementoIcone}
          </div>
        )}
        <h3 className="text-2xl font-semibold text-light-text mb-3">
          {trilha.title}
        </h3>
        <p className="text-medium-text leading-relaxed flex-grow">
          {trilha.description}
        </p>
      </div>
    </div>
  );
};

export default CardTrilha;
