import React from "react";

const EditorDeCodigoMock = () => {
  // DADOS CORRIGIDOS: Adicionado type2 onde era necessário.
  const linhasDeCodigo = [
    { type: "comment", text: "// Lúmina Lab: Aplicando Marketing Digital" },
    { type: "empty" },
    {
      type: "keyword",
      text: "import",
      name: "{ Canvas, SWOT, MVP }",
      from: "from",
      path: "'@lumina/metodologias';",
    },
    { type: "empty" },
    {
      type: "keyword",
      text: "const",
      name: "projetoLumina",
      assign: "=",
      call: "Canvas.criarProjeto",
      params: '({ cliente: "Microempreendedor X" });',
    },
    { type: "empty" },
    {
      type: "keyword",
      text: "async function",
      name: "validarSolucao",
      params: "(projeto) {",
    },
    {
      type: "indent",
      type2: "keyword",
      text2: "const",
      name2: "analise",
      assign2: "=",
      await2: "await",
      call2: "SWOT.analisar",
      params2: "(projeto.escopo);",
    },
    {
      type: "indent",
      type2: "keyword",
      text2: "const",
      name2: "prototipo",
      assign2: "=",
      call2: "MVP.desenvolver",
      params2: "(analise, projeto.recursos);",
    },
    {
      type: "indent",
      type2: "call",
      name2: "console.log",
      params2: '("Impacto Social Gerado:", prototipo.resultados);',
    },
    { type: "end", text: "}" },
  ];

  return (
    <div className="bg-slate-800/60 backdrop-blur-lg p-6 rounded-xl shadow-2xl overflow-x-auto text-sm font-mono leading-relaxed border border-slate-700/50 hover:border-brand-primary/60 transition-colors duration-300 transform hover:shadow-brand-primary/20 hover:shadow-lg">
      <div className="flex items-center pb-3 mb-3 border-b border-slate-700/30">
        <span className="w-3.5 h-3.5 bg-red-500 rounded-full mr-2 border-2 border-red-700/50"></span>
        <span className="w-3.5 h-3.5 bg-yellow-400 rounded-full mr-2 border-2 border-yellow-600/50"></span>
        <span className="w-3.5 h-3.5 bg-green-500 rounded-full mr-auto border-2 border-green-700/50"></span>
        <span className="text-xs text-slate-500">metodologia.js</span>
      </div>
      <pre>
        {/* LÓGICA DE RENDERIZAÇÃO CORRIGIDA */}
        {linhasDeCodigo.map((linha, index) => (
          <div key={index} className="flex">
            <span className="text-slate-600 mr-4 select-none w-4 text-right">
              {index + 1}
            </span>
            <div>
              {linha.type === "comment" && (
                <span className="text-slate-500">{linha.text}</span>
              )}
              {linha.type === "empty" && <span>&nbsp;</span>}
              {linha.type === "end" && (
                <span className="text-purple-400">{linha.text}</span>
              )}
              {linha.type === "keyword" && (
                <>
                  <span className="text-purple-400">{linha.text}</span>
                  {linha.name && (
                    <span className="text-sky-300"> {linha.name}</span>
                  )}
                  {linha.from && (
                    <span className="text-purple-400"> {linha.from}</span>
                  )}
                  {linha.path && (
                    <span className="text-amber-300"> {linha.path}</span>
                  )}
                  {linha.assign && (
                    <span className="text-white"> {linha.assign} </span>
                  )}
                  {linha.call && (
                    <span className="text-green-300">{linha.call}</span>
                  )}
                  {linha.params && (
                    <span className="text-white">{linha.params}</span>
                  )}
                </>
              )}
              {linha.type === "indent" && (
                <>
                  <span className="inline-block w-4"></span> {/* Indentação */}
                  {linha.type2 === "keyword" && (
                    <span className="text-purple-400">{linha.text2}</span>
                  )}
                  {linha.type2 === "call" && (
                    <span className="text-green-300">{linha.name2}</span>
                  )}
                  {linha.name2 && linha.type2 !== "call" && (
                    <span className="text-sky-300"> {linha.name2}</span>
                  )}
                  {linha.assign2 && (
                    <span className="text-white"> {linha.assign2} </span>
                  )}
                  {linha.await2 && (
                    <span className="text-purple-400">{linha.await2} </span>
                  )}
                  {linha.call2 && (
                    <span className="text-green-300">{linha.call2}</span>
                  )}
                  {linha.params2 && (
                    <span className="text-white">{linha.params2}</span>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </pre>
    </div>
  );
};

export default EditorDeCodigoMock;
