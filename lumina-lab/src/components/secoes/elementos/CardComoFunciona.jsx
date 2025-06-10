import React from "react";

const CardComoFunciona = ({ passo }) => {
  const elementoIcone = React.isValidElement(passo.icon)
    ? React.cloneElement(passo.icon, {
        className: "w-8 h-8 text-brand-secondary",
      })
    : null;

  return (
    <div className="card-borda-gradiente-animada container-brilho-card bg-dark-card p-4 rounded-xl shadow-xl flex flex-col items-center text-center h-full">
      <div className="conteudo-brilho-card flex flex-col items-center text-center h-full w-full">
        {elementoIcone && (
          <div className="mb-3 p-3 bg-brand-secondary/10 rounded-full inline-block ring-2 ring-brand-secondary/30">
            {elementoIcone}
          </div>
        )}
        <h3 className="text-sm font-semibold text-light-text mb-2">
          {passo.title}
        </h3>
        <p className="text-xs text-medium-text leading-tight flex-grow">
          {passo.description}
        </p>
      </div>
    </div>
  );
};

export default CardComoFunciona;
