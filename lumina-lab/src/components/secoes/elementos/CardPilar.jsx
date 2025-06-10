import React from "react";

const CardPilar = ({ pilar }) => {
  // Clona o ícone para podermos adicionar classes a ele
  const elementoIcone = React.isValidElement(pilar.icon)
    ? React.cloneElement(pilar.icon, {
        className: "w-12 h-12 text-brand-primary",
      })
    : null;

  return (
    // A classe "card-pilar" é importante para o efeito de hover no ícone
    <div
      className={`card-pilar p-8 rounded-xl shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center h-full border border-dark-border hover:border-brand-primary/30 ${
        pilar.bgColorClass || "bg-dark-card"
      }`}
    >
      {elementoIcone && (
        // A classe "container-icone-pilar" também é para o efeito de hover
        <div
          className={`container-icone-pilar mb-6 p-5 rounded-full inline-block ring-4 ${
            pilar.bgColorClass
              ? "ring-white/20"
              : "ring-brand-primary/20 bg-brand-primary/10"
          }`}
        >
          {elementoIcone}
        </div>
      )}
      <h3 className="text-2xl font-semibold text-light-text mb-4">
        {pilar.title}
      </h3>
      <p className="text-medium-text leading-relaxed flex-grow">
        {pilar.description}
      </p>
    </div>
  );
};

export default CardPilar;
