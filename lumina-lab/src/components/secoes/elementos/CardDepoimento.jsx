import React from "react";

const CardDepoimento = ({ depoimento }) => {
  // Adicionado um 'return null' para segurança extra caso o depoimento não exista.
  if (!depoimento) {
    return null;
  }

  return (
    // EFEITO DE ZOOM: Adicionado 'transition-transform' e 'hover:scale-105'
    <div className="bg-dark-card p-5 rounded-xl shadow-xl border border-dark-border h-full flex flex-col transition-transform duration-300 hover:scale-105">
      <div className="flex-grow mb-4">
        <svg
          // Cor do ícone garantida como roxo
          className="w-8 h-8 text-[var(--cor-primaria-usr)] mb-3"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.333 22.583H4.083V12.917h5.25v9.666zm11.667 0h-5.25V12.917h5.25v9.666zM21 4.083C16.083 4.083 12 8.167 12 13.083c0 2.5.917 4.75 2.417 6.417L12 26.25h4.667l1.833-5.583c.833.083 1.667.167 2.5.167 4.917 0 8.917-4 8.917-8.917S25.917 4.083 21 4.083zM9.333 4.083C4.417 4.083.417 8.167.417 13.083c0 2.5.917 4.75 2.417 6.417L.417 26.25h4.667l1.833-5.583c.833.083 1.667.167 2.5.167 4.917 0 8.917-4 8.917-8.917S14.25 4.083 9.333 4.083z" />
        </svg>
        <p className="text-sm text-light-text italic leading-relaxed">
          "{depoimento.quote}"
        </p>
      </div>
      <div className="flex items-center mt-auto">
        {depoimento.avatarUrl && (
          <img
            src={depoimento.avatarUrl}
            alt={depoimento.name}
            // COR DA BORDA: Alterada para roxo
            className="w-10 h-10 rounded-full mr-3 border-2 border-[var(--cor-primaria-usr)]"
          />
        )}
        <div>
          {/* COR DO NOME: Alterada para roxo */}
          <p className="font-semibold text-[var(--cor-primaria-usr)] text-sm">
            {depoimento.name}
          </p>
          <p className="text-xs text-medium-text">{depoimento.company}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDepoimento;
