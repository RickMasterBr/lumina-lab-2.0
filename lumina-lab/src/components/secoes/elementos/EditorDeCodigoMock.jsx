import React from "react";

const EditorDeCodigoMock = () => {
  // CONTEÚDO DO CÓDIGO SIMPLIFICADO PARA CABER NO CELULAR
  const linhasDeCodigo = [
    { type: "comment", text: "// Lúmina: Mkt na Prática" },
    {
      type: "keyword",
      text: "import",
      name: "{Canvas, MVP}",
      from: "from",
      path: "'@lumina/core';",
    },
    { type: "empty" },
    {
      type: "keyword",
      text: "const",
      name: "projeto",
      assign: "=",
      call: "Canvas.new",
      params: '({cliente:"X"});',
    },
    { type: "empty" },
    { type: "keyword", text: "function", name: "validar", params: "(p) {" },
    {
      type: "indent",
      type2: "keyword",
      text2: "const",
      name2: "mvp",
      assign2: "=",
      call2: "MVP.dev",
      params2: "(p);",
    },
    {
      type: "indent",
      type2: "call",
      name2: "console.log",
      params2: "('Impacto OK');",
    },
    { type: "end", text: "}" },
  ];

  return (
    // Estilos mantidos para ser bem compacto
    <div className="bg-slate-800/60 backdrop-blur-lg p-3 sm:p-4 md:p-6 rounded-xl shadow-2xl overflow-x-hidden text-xs -tracking-tighter sm:text-sm sm:tracking-normal font-mono leading-relaxed border border-slate-700/50">
      <div className="flex items-center pb-2 mb-2 sm:pb-3 sm:mb-3 border-b border-slate-700/30">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-1.5 sm:mr-2"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full mr-1.5 sm:mr-2"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full mr-auto"></span>
        <span className="text-xs text-slate-500">metodologia.js</span>
      </div>
      <pre>
        {linhasDeCodigo.map((linha, index) => (
          <div key={index} className="flex">
            <span className="text-slate-600 mr-3 select-none text-right flex-shrink-0">
              {index + 1}
            </span>
            {/* A classe 'break-all' força a quebra de linha */}
            <div className="break-all">
              {linha.type === "comment" && (
                <span className="text-slate-500">{linha.text}</span>
              )}
              {linha.type === "empty" && <span>&nbsp;</span>}
              {linha.type === "end" && (
                <span className="text-purple-400">{linha.text}</span>
              )}
              {linha.type === "keyword" && (
                <span>
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
                </span>
              )}
              {linha.type === "indent" && (
                <span>
                  <span className="inline-block w-3"></span>
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
                </span>
              )}
            </div>
          </div>
        ))}
      </pre>
    </div>
  );
};

export default EditorDeCodigoMock;
