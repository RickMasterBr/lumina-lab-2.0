import React from "react";

const CardDepoimento = ({ depoimento }) => {
  return (
    <div className="bg-dark-card p-8 rounded-xl shadow-xl border border-dark-border hover:border-brand-secondary/50 transition-all duration-300 ease-in-out h-full flex flex-col transform hover:scale-[1.02]">
      <div className="flex-grow mb-6">
        <svg
          className="w-10 h-10 text-brand-primary mb-4"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.333 22.583H4.083V12.917h5.25v9.666zm11.667 0h-5.25V12.917h5.25v9.666zM21 4.083C16.083 4.083 12 8.167 12 13.083c0 2.5.917 4.75 2.417 6.417L12 26.25h4.667l1.833-5.583c.833.083 1.667.167 2.5.167 4.917 0 8.917-4 8.917-8.917S25.917 4.083 21 4.083zM9.333 4.083C4.417 4.083.417 8.167.417 13.083c0 2.5.917 4.75 2.417 6.417L.417 26.25h4.667l1.833-5.583c.833.083 1.667.167 2.5.167 4.917 0 8.917-4 8.917-8.917S14.25 4.083 9.333 4.083z" />
        </svg>
        <p className="text-light-text text-lg italic leading-relaxed">
          "{depoimento.quote}"
        </p>
      </div>
      <div className="flex items-center mt-auto">
        {depoimento.avatarUrl && (
          <img
            src={depoimento.avatarUrl}
            alt={depoimento.name}
            className="w-12 h-12 rounded-full mr-4 border-2 border-brand-secondary transform transition-all duration-300 hover:scale-110"
          />
        )}
        <div>
          <p className="font-semibold text-brand-secondary">
            {depoimento.name}
          </p>
          <p className="text-sm text-medium-text">{depoimento.company}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDepoimento;
