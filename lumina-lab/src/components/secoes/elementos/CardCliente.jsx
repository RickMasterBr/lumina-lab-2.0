import React from "react";
import Botao from "@/components/comum/Botao";

const CardCliente = ({ cliente }) => {
  return (
    <div className="bg-dark-card rounded-xl shadow-xl flex flex-col overflow-hidden h-full">
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
          <Botao variante="outline" tamanho="sm" href="#">
            Ver Projeto
          </Botao>
        </div>
      </div>
    </div>
  );
};

export default CardCliente;
