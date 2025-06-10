import React from "react";
import { IconeCheckCirculo } from "@/constants";

const CardOpcao = ({
  escolha,
  estaSelecionado,
  estaDesabilitado,
  aoSelecionar,
}) => {
  return (
    <button
      onClick={aoSelecionar}
      disabled={estaDesabilitado}
      // As classes CSS aqui são importantes para o feedback visual
      className={`card-opcao-estrategia w-full p-4 md:p-6 rounded-lg shadow-md flex items-center text-left text-light-text hover:text-white ${
        estaSelecionado ? "selecionado" : ""
      } ${estaDesabilitado && !estaSelecionado ? "desabilitado" : ""}`}
    >
      {escolha.icon &&
        React.cloneElement(escolha.icon, {
          className: "w-7 h-7 mr-4 text-brand-secondary flex-shrink-0",
        })}
      <span className="flex-grow text-sm md:text-base">{escolha.text}</span>
      {estaSelecionado && (
        <IconeCheckCirculo className="w-6 h-6 text-brand-primary ml-auto flex-shrink-0" />
      )}
    </button>
  );
};

export default CardOpcao;
