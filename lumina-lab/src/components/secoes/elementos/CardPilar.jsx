import React from "react";

const CardPilar = ({ pilar }) => {
  const elementoIcone = React.isValidElement(pilar.icon)
    ? React.cloneElement(pilar.icon, {
        className: "w-8 h-8 text-brand-primary",
      })
    : null;

  return (
    <div
      className={`card-pilar p-4 rounded-xl shadow-lg flex flex-col items-center text-center h-full border border-dark-border ${
        pilar.bgColorClass || "bg-dark-card"
      }`}
    >
      {elementoIcone && (
        <div
          className={`container-icone-pilar mb-3 p-3 rounded-full inline-block ring-2 ${
            pilar.bgColorClass
              ? "ring-white/10"
              : "ring-brand-primary/20 bg-brand-primary/10"
          }`}
        >
          {elementoIcone}
        </div>
      )}
      {/* Título e descrição reduzidos ao máximo */}
      <h3 className="text-sm font-semibold text-light-text mb-2">
        {pilar.title}
      </h3>
      <p className="text-xs text-medium-text leading-tight flex-grow">
        {pilar.description}
      </p>
    </div>
  );
};

export default CardPilar;
