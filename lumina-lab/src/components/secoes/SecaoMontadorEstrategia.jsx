"use client";
import React, { useState } from "react";
// Import do Botao não é mais necessário
import CardOpcao from "./elementos/CardOpcao";

const SecaoMontadorEstrategia = ({ titulo, passos, insights }) => {
  const [indicePassoAtual, setIndicePassoAtual] = useState(0);
  const [selecoes, setSelecoes] = useState({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // Toda a lógica do componente (lidarComSelecao, proximoPasso, etc.) permanece a mesma
  const passoAtual = passos[indicePassoAtual];
  const lidarComSelecao = (idEscolha, textoEscolha) => {
    const chaveSelecaoAtual = passoAtual.selectionKey;
    let novoValorSelecionado;
    if (passoAtual.maxSelections > 1) {
      const selecoesAtuais = selecoes[chaveSelecaoAtual] || [];
      if (selecoesAtuais.includes(textoEscolha)) {
        novoValorSelecionado = selecoesAtuais.filter(
          (sel) => sel !== textoEscolha
        );
      } else if (selecoesAtuais.length < passoAtual.maxSelections) {
        novoValorSelecionado = [...selecoesAtuais, textoEscolha];
      } else {
        return;
      }
    } else {
      novoValorSelecionado = textoEscolha;
    }
    setSelecoes((prev) => ({
      ...prev,
      [chaveSelecaoAtual]: novoValorSelecionado,
    }));
  };
  const opcaoEstaSelecionada = (textoEscolha) => {
    const selecaoAtual = selecoes[passoAtual.selectionKey];
    if (Array.isArray(selecaoAtual)) {
      return selecaoAtual.includes(textoEscolha);
    }
    return selecaoAtual === textoEscolha;
  };
  const opcaoEstaDesabilitada = (textoEscolha) => {
    if (passoAtual.maxSelections > 1) {
      const selecaoAtual = selecoes[passoAtual.selectionKey] || [];
      return (
        selecaoAtual.length >= passoAtual.maxSelections &&
        !selecaoAtual.includes(textoEscolha)
      );
    }
    return false;
  };
  const obterChaveInsight = () => {
    const tipoNegocio =
      selecoes.businessType
        ?.toLowerCase()
        .split(" ")[0]
        .replace(/[^a-z0-9]/gi, "") || "default";
    const objetivo =
      selecoes.marketingGoal
        ?.toLowerCase()
        .split(" ")[0]
        .replace(/[^a-z0-9]/gi, "") || "default";
    const canal1 =
      selecoes.digitalChannels?.[0]
        ?.toLowerCase()
        .split(" ")[0]
        .replace(/[^a-z0-9]/gi, "") || "default";
    const canal2 =
      selecoes.digitalChannels?.[1]
        ?.toLowerCase()
        .split(" ")[0]
        .replace(/[^a-z0-9]/gi, "") || "default";
    const chaveEspecifica = `${tipoNegocio}_${objetivo}_${canal1}_${canal2}`;
    if (insights[chaveEspecifica]) return chaveEspecifica;
    const chaveParcial = `${tipoNegocio}_${objetivo}_${canal1}`;
    if (insights[chaveParcial]) return chaveParcial;
    return "default";
  };
  const proximoPasso = () => {
    if (indicePassoAtual < passos.length - 1) {
      setIndicePassoAtual(indicePassoAtual + 1);
    } else {
      setMostrarResultado(true);
    }
  };
  const passoAnterior = () => {
    if (mostrarResultado) {
      setMostrarResultado(false);
    } else if (indicePassoAtual > 0) {
      setIndicePassoAtual(indicePassoAtual - 1);
    }
  };
  const reiniciarMontador = () => {
    setIndicePassoAtual(0);
    setSelecoes({});
    setMostrarResultado(false);
  };
  const podeProsseguir = () => {
    const selecaoAtual = selecoes[passoAtual.selectionKey];
    return Array.isArray(selecaoAtual)
      ? selecaoAtual.length > 0
      : !!selecaoAtual;
  };

  if (mostrarResultado) {
    const chaveInsight = obterChaveInsight();
    const insightResultado = insights[chaveInsight] || insights.default;
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text">
          Sua Estratégia Simulada:
        </h2>
        <div className="bg-dark-card p-6 md:p-8 rounded-xl shadow-xl border border-[var(--cor-primaria-usr)]/30 max-w-2xl mx-auto text-left space-y-3">
          <p>
            {/* MUDANÇA AQUI: Gradiente no label */}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cor-primaria-usr)] to-[var(--cor-secundaria-usr)] font-semibold">
              Tipo de Negócio:
            </strong>{" "}
            {selecoes.businessType || "Não definido"}
          </p>
          <p>
            {/* MUDANÇA AQUI: Gradiente no label */}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cor-primaria-usr)] to-[var(--cor-secundaria-usr)] font-semibold">
              Objetivo Principal:
            </strong>{" "}
            {selecoes.marketingGoal || "Não definido"}
          </p>
          <p>
            {/* MUDANÇA AQUI: Gradiente no label */}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cor-primaria-usr)] to-[var(--cor-secundaria-usr)] font-semibold">
              Canais Chave:
            </strong>{" "}
            {(selecoes.digitalChannels || []).join(", ") || "Não definido"}
          </p>
          <p className="mt-4 pt-4 border-t border-dark-border">
            {/* MUDANÇA AQUI: Gradiente no label */}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cor-primaria-usr)] to-[var(--cor-secundaria-usr)] font-semibold">
              Lúmina Focus Point:
            </strong>{" "}
            {insightResultado}
          </p>
        </div>
        {/* MUDANÇA AQUI: Botão estilizado */}
        <button
          onClick={reiniciarMontador}
          className="mt-8 bg-[var(--cor-primaria-usr)] text-white px-6 py-2.5 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(var(--cor-primaria-rgb),0.4)]"
        >
          Montar Outra Estratégia
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-light-text">
        {titulo}
      </h2>
      <p className="text-base sm:text-lg text-medium-text text-center mb-10 max-w-2xl mx-auto">
        Simule os primeiros passos para definir uma estratégia de marketing
        digital com a Lúmina.
      </p>
      <div className="bg-dark-card p-6 md:p-10 rounded-xl shadow-2xl max-w-3xl mx-auto border border-dark-border">
        {/* MUDANÇA AQUI: Gradiente no título do passo */}
        <h3 className="text-2xl font-semibold text-brand-primary mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cor-primaria-usr)] to-[var(--cor-secundaria-usr)]">
            {passoAtual.title}
          </span>
        </h3>
        {passoAtual.description && (
          <p className="text-medium-text mb-6">{passoAtual.description}</p>
        )}
        <div
          className={`grid gap-4 ${
            passoAtual.choices.length > 2 ? "md:grid-cols-2" : "md:grid-cols-1"
          }`}
        >
          {passoAtual.choices.map((escolha) => (
            <CardOpcao
              key={escolha.id}
              escolha={escolha}
              estaSelecionado={opcaoEstaSelecionada(escolha.text)}
              estaDesabilitado={opcaoEstaDesabilitada(escolha.text)}
              aoSelecionar={() => lidarComSelecao(escolha.id, escolha.text)}
            />
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* MUDANÇA AQUI: Botão "Anterior" estilizado */}
          <button
            onClick={passoAnterior}
            disabled={indicePassoAtual === 0 && !mostrarResultado}
            className="bg-transparent text-[var(--cor-primaria-usr)] border-2 border-[var(--cor-primaria-usr)] px-6 py-2.5 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-[var(--cor-primaria-usr)]/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {mostrarResultado ? "Voltar" : "Anterior"}
          </button>
          <div className="text-sm text-medium-text">
            Passo {indicePassoAtual + 1} de {passos.length}
          </div>
          {/* MUDANÇA AQUI: Botão "Próximo Passo" estilizado */}
          <button
            onClick={proximoPasso}
            disabled={!podeProsseguir()}
            className="bg-[var(--cor-primaria-usr)] text-white px-6 py-2.5 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(var(--cor-primaria-rgb),0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {indicePassoAtual === passos.length - 1
              ? "Ver Resultado"
              : "Próximo Passo"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecaoMontadorEstrategia;
