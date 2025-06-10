import React from "react";

const CardFerramenta = ({ ferramenta }) => {
  const elementoIcone = React.isValidElement(ferramenta.icon)
    ? React.cloneElement(ferramenta.icon, {
        className: "w-8 h-8 text-brand-secondary",
      })
    : null;

  return (
    // Adicionamos a classe 'card-ferramenta' para um efeito de hover customizado no ícone
    <div className="card-ferramenta card-borda-gradiente-animada bg-dark-card p-6 rounded-lg shadow-lg hover:shadow-brand-secondary/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col text-left h-full">
      {elementoIcone && (
        // E a classe 'container-icone-ferramenta' para o mesmo efeito
        <div className="container-icone-ferramenta mb-5 p-3 bg-brand-secondary/10 rounded-lg inline-block self-start ring-1 ring-brand-secondary/30">
          {elementoIcone}
        </div>
      )}
      <h3 className="text-xl font-semibold text-light-text mb-2">
        {ferramenta.title}
      </h3>
      <p className="text-medium-text text-sm leading-relaxed flex-grow">
        {ferramenta.description}
      </p>
    </div>
  );
};

export default CardFerramenta;
