import React from "react";

const CardComoFunciona = ({ passo }) => {
  // Clona o ícone para podermos adicionar classes a ele
  const elementoIcone = React.isValidElement(passo.icon)
    ? React.cloneElement(passo.icon, {
        className: "w-10 h-10 text-brand-secondary",
      })
    : null;

  return (
    // Reutilizamos os estilos de borda e brilho que já temos
    <div className="card-borda-gradiente-animada container-brilho-card bg-dark-card p-8 rounded-xl shadow-xl hover:shadow-[var(--cor-secundaria-usr)]/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 flex flex-col items-center text-center h-full">
      {/* Div para o conteúdo receber o efeito de brilho */}
      <div className="conteudo-brilho-card flex flex-col items-center text-center h-full w-full">
        {elementoIcone && (
          <div className="mb-6 p-4 bg-brand-secondary/10 rounded-full inline-block ring-2 ring-brand-secondary/30">
            {elementoIcone}
          </div>
        )}
        <h3 className="text-2xl font-semibold text-light-text mb-3">
          {passo.title}
        </h3>
        <p className="text-medium-text leading-relaxed flex-grow">
          {passo.description}
        </p>
      </div>
    </div>
  );
};

export default CardComoFunciona;
