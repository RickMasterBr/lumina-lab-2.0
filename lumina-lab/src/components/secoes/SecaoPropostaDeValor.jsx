import React from "react";
// Importando os ícones do nosso arquivo de constantes
import { IconeCapelo, IconeRaio, IconeGrupoUsuarios } from "@/constants";

const SecaoPropostaDeValor = ({ titulo, descricao, urlImagem, altImagem }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Coluna de Texto */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-light-text">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--cor-primaria-usr)] to-[color:var(--cor-secundaria-usr)]">
              {titulo}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-medium-text leading-relaxed mb-8">
            {descricao}
          </p>
          <ul className="space-y-4 text-medium-text">
            <li className="flex items-start">
              <IconeCapelo className="w-7 h-7 text-brand-primary mr-4 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-light-text mb-1">
                  Educação Prática
                </h4>
                <span>
                  Formação de alunos em um ambiente colaborativo, aplicando
                  conhecimentos em projetos de mercado.
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <IconeRaio className="w-7 h-7 text-brand-primary mr-4 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-light-text mb-1">
                  Tecnologia e Inovação
                </h4>
                <span>
                  Uso de ferramentas digitais para criar soluções acessíveis,
                  criativas e de alto impacto.
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <IconeGrupoUsuarios className="w-7 h-7 text-brand-primary mr-4 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-light-text mb-1">
                  Impacto Social
                </h4>
                <span>
                  Apoio a microempreendedores e empreendedores sociais,
                  fortalecendo a comunidade.
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Coluna da Imagem */}
        <div className="overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
          <img
            src={urlImagem}
            alt={altImagem}
            className="w-full h-full object-cover aspect-[4/3] md:aspect-video rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SecaoPropostaDeValor;
