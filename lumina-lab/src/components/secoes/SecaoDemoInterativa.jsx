"use client"; // Necessário por causa do evento onClick no botão.

import React from "react";
import Botao from "@/components/comum/Botao";

const SecaoDemoInterativa = ({ titulo, descricao }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-light-text">
        {titulo}
      </h2>
      <p className="text-lg text-medium-text max-w-2xl mx-auto mb-12">
        {descricao}
      </p>
      {/* A Janela Falsa do Aplicativo */}
      <div className="bg-dark-card rounded-xl shadow-2xl max-w-4xl mx-auto border border-dark-border overflow-hidden">
        {/* Barra de Título da Janela */}
        <div className="bg-slate-800/60 px-4 py-3 border-b border-dark-border">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="ml-auto text-sm text-slate-400">
              /app/demo-module.js
            </span>
          </div>
        </div>

        {/* Área de Conteúdo da Demo */}
        <div className="p-8 md:p-12 aspect-[16/10] bg-slate-900/50 flex flex-col items-center justify-center">
          <svg
            className="w-24 h-24 text-brand-primary opacity-50 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <p className="text-2xl text-medium-text italic mb-6">
            Área de Demonstração Interativa
          </p>
          <Botao
            variante="primary"
            tamanho="md"
            onClick={() => alert("Demonstração iniciada!")} // Ação do botão
            className="shadow-md hover:shadow-glow-brand-primary-sm"
          >
            Iniciar Demonstração
          </Botao>
        </div>
      </div>
    </div>
  );
};

export default SecaoDemoInterativa;
