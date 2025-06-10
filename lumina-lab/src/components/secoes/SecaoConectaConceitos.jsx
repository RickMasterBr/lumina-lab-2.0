"use client";

import React, { useState, useEffect } from "react";
import Botao from "@/components/comum/Botao";

const SecaoConectaConceitos = ({ titulo, pares }) => {
  const [conceitos, setConceitos] = useState([]);
  const [definicoes, setDefinicoes] = useState([]);
  const [combinados, setCombinados] = useState([]);
  const [idConceitoArrastado, setIdConceitoArrastado] = useState(null);
  const [mensagemFeedback, setMensagemFeedback] = useState(null);
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const embaralharArray = (array) => {
    const novoArray = [...array];
    for (let i = novoArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
    }
    return novoArray;
  };

  const inicializarJogo = () => {
    setConceitos(embaralharArray(pares));
    setDefinicoes(embaralharArray(pares));
    setCombinados([]);
    setMensagemFeedback(null);
    setFimDeJogo(false);
  };

  useEffect(() => {
    inicializarJogo();
  }, [pares]);

  const lidarArrastarInicio = (e, idConceito) => {
    setIdConceitoArrastado(idConceito);
    e.currentTarget.classList.add("arrastando");
  };

  const lidarArrastarFim = (e) => {
    e.currentTarget.classList.remove("arrastando");
    setIdConceitoArrastado(null);
  };

  const lidarArrastarSobre = (e) => {
    e.preventDefault();
    const idDefinicao = e.currentTarget.dataset.id;
    if (idDefinicao && !combinados.some((m) => m.idDefinicao === idDefinicao)) {
      e.currentTarget.classList.add("over");
    }
  };

  const lidarArrastarSaida = (e) => {
    e.currentTarget.classList.remove("over");
  };

  const lidarSoltar = (e, idDefinicao) => {
    e.preventDefault();
    e.currentTarget.classList.remove("over");

    if (
      !idConceitoArrastado ||
      combinados.some(
        (m) =>
          m.idDefinicao === idDefinicao || m.idConceito === idConceitoArrastado
      )
    ) {
      return;
    }

    const estaCorreto = idConceitoArrastado === idDefinicao;
    setCombinados((prev) => [
      ...prev,
      { idConceito: idConceitoArrastado, idDefinicao, estaCorreto },
    ]);

    if (combinados.length + 1 === pares.length) {
      setFimDeJogo(true);
      const acertos =
        combinados.filter((m) => m.estaCorreto).length + (estaCorreto ? 1 : 0);
      setMensagemFeedback(
        `Jogo Concluído! Você acertou ${acertos} de ${pares.length} conceitos.`
      );
    }
  };

  const obterStatusCombinacaoDefinicao = (idDefinicao) => {
    const combinacao = combinados.find((m) => m.idDefinicao === idDefinicao);
    if (!combinacao) return null;
    return combinacao.estaCorreto ? "combinado-correto" : "combinado-incorreto";
  };

  const obterConceitoParaDefinicao = (idDefinicao) => {
    const combinacao = combinados.find((m) => m.idDefinicao === idDefinicao);
    if (combinacao) {
      const conceito = conceitos.find((c) => c.id === combinacao.idConceito);
      return conceito ? conceito.concept : null;
    }
    return null;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Título e parágrafo ajustados para mobile */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-light-text">
        {titulo}
      </h2>
      <p className="text-base sm:text-lg text-medium-text text-center mb-10 max-w-2xl mx-auto">
        Arraste o conceito da esquerda para a definição correta à direita. Teste
        seus conhecimentos!
      </p>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Coluna de Conceitos */}
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-semibold text-brand-primary mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--cor-primaria-usr)] to-[color:var(--cor-secundaria-usr)]">
            Conceitos
          </h3>
          {conceitos.map((conceito) => {
            const jaCombinado = combinados.some(
              (m) => m.idConceito === conceito.id
            );
            return (
              <div
                key={conceito.id}
                draggable={!jaCombinado && !fimDeJogo}
                onDragStart={(e) => lidarArrastarInicio(e, conceito.id)}
                onDragEnd={lidarArrastarFim}
                // Padding e texto do card ajustados
                className={`card-conceito bg-dark-card p-3 sm:p-4 rounded-lg shadow-md border border-dark-border text-sm text-light-text text-center ${
                  jaCombinado
                    ? "combinado"
                    : "hover:shadow-glow-brand-primary-sm"
                }`}
              >
                {conceito.concept}
              </div>
            );
          })}
        </div>

        {/* Coluna de Definições */}
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-semibold text-brand-secondary mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--cor-primaria-usr)] to-[color:var(--cor-secundaria-usr)]">
            Definições
          </h3>
          {definicoes.map((def) => {
            const status = obterStatusCombinacaoDefinicao(def.id);
            const textoConceitoCombinado = obterConceitoParaDefinicao(def.id);
            return (
              <div
                key={def.id}
                data-id={def.id}
                onDragOver={lidarArrastarSobre}
                onDragLeave={lidarArrastarSaida}
                onDrop={(e) => lidarSoltar(e, def.id)}
                // Padding, altura e texto da zona ajustados
                className={`zona-soltar p-3 sm:p-4 rounded-lg text-sm text-medium-text min-h-[72px] flex items-center justify-center text-center ${
                  status || ""
                }`}
              >
                {textoConceitoCombinado ? (
                  <span className="texto-conceito-na-zona">
                    <span className="font-semibold">
                      {textoConceitoCombinado}
                    </span>{" "}
                    <span className="text-xs text-slate-500">+</span>{" "}
                    {def.definition}
                  </span>
                ) : (
                  def.definition
                )}
              </div>
            );
          })}
        </div>
      </div>
      {fimDeJogo && mensagemFeedback && (
        <div
          className={`mensagem-feedback ${
            combinados.filter((m) => m.estaCorreto).length === pares.length
              ? "sucesso"
              : "info"
          } text-center mt-8 p-3 sm:p-4 text-sm sm:text-base`}
        >
          {mensagemFeedback}
        </div>
      )}
      <div className="text-center mt-10">
        <Botao onClick={inicializarJogo} variante="primary" tamanho="md">
          {fimDeJogo ? "Jogar Novamente" : "Reiniciar Desafio"}
        </Botao>
      </div>
    </div>
  );
};

export default SecaoConectaConceitos;
