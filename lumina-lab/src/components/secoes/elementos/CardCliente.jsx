import React from "react";
// O import do Botao não é mais necessário
// import Botao from "@/components/comum/Botao";

const CardCliente = ({ cliente }) => {
  return (
    // MUDANÇA AQUI: Adicionado efeito de transição e "salto" no hover
    <div className="bg-dark-card rounded-xl shadow-xl flex flex-col overflow-hidden h-full transition-transform duration-300 hover:-translate-y-2">
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={cliente.imagemUrl}
          alt={`Projeto para ${cliente.nome}`}
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-light-text mb-2">
          {cliente.nome}
        </h3>
        <p className="text-xs text-medium-text leading-snug flex-grow mb-4">
          {cliente.descricao}
        </p>
        <div className="mt-auto">
          {/* MUDANÇA AQUI: Botão "Ver Projeto" estilizado */}
          <a
            href="#"
            className="inline-block bg-transparent text-[var(--cor-primaria-usr)] border-2 border-[var(--cor-primaria-usr)] px-4 py-2 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-[var(--cor-primaria-usr)]/10"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCliente;
