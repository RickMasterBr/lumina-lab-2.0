import React from "react";
import Botao from "@/components/comum/Botao";

const CardCliente = ({ cliente }) => {
  return (
    <div className="bg-dark-card rounded-xl shadow-xl hover:shadow-[var(--cor-primaria-usr)]/30 border border-transparent hover:border-[var(--cor-primaria-usr)]/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 flex flex-col overflow-hidden h-full">
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={cliente.imagemUrl}
          alt={`Projeto para ${cliente.nome}`}
          className="w-full h-52 object-cover transform transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-light-text mb-3">
          {cliente.nome}
        </h3>
        <p className="text-medium-text leading-relaxed flex-grow mb-6 text-sm">
          {cliente.descricao}
        </p>
        <div className="mt-auto">
          <Botao variante="outline" tamanho="sm" href="#">
            Ver Projeto
          </Botao>
        </div>
      </div>
    </div>
  );
};

export default CardCliente;
