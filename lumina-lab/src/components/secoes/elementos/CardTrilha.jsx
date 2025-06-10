import React from "react";

const CardTrilha = ({ trilha }) => {
  const elementoIcone = React.isValidElement(trilha.icon)
    ? React.cloneElement(trilha.icon, {
        className: "w-8 h-8 text-brand-primary",
      })
    : null;

  return (
    <div className="card-borda-gradiente-animada container-brilho-card bg-dark-card p-4 rounded-xl shadow-xl flex flex-col items-center text-center h-full">
      <div className="conteudo-brilho-card flex flex-col items-center text-center h-full w-full">
        {elementoIcone && (
          <div className="mb-3 p-3 bg-brand-primary/10 rounded-full inline-block ring-2 ring-brand-primary/30">
            {elementoIcone}
          </div>
        )}
        <h3 className="text-sm font-semibold text-light-text mb-2">
          {trilha.title}
        </h3>
        <p className="text-xs text-medium-text leading-tight flex-grow">
          {trilha.description}
        </p>
      </div>
    </div>
  );
};

export default CardTrilha;
