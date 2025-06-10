import React from "react";

const CardFerramenta = ({ ferramenta }) => {
  const elementoIcone = React.isValidElement(ferramenta.icon)
    ? React.cloneElement(ferramenta.icon, {
        className: "w-8 h-8 text-brand-secondary",
      })
    : null;

  return (
    <div className="card-ferramenta card-borda-gradiente-animada bg-dark-card p-4 rounded-lg shadow-lg flex flex-col text-left h-full">
      {elementoIcone && (
        <div className="container-icone-ferramenta mb-3 p-2 bg-brand-secondary/10 rounded-lg inline-block self-start ring-1 ring-brand-secondary/30">
          {elementoIcone}
        </div>
      )}
      <h3 className="text-sm font-semibold text-light-text mb-2">
        {ferramenta.title}
      </h3>
      <p className="text-xs text-medium-text leading-tight flex-grow">
        {ferramenta.description}
      </p>
    </div>
  );
};

export default CardFerramenta;
