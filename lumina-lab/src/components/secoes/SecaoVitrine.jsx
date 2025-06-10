import React from "react";
import Botao from "@/components/comum/Botao";
import EditorDeCodigoMock from "./elementos/EditorDeCodigoMock";
import { IconeFaiscas as IconeCheck } from "@/constants";

const SecaoVitrine = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="lg:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--cor-primaria-usr)] to-[color:var(--cor-secundaria-usr)]">
              Da Teoria à Prática no Marketing Digital
            </span>
          </h2>
          <p className="text-lg text-medium-text mb-6">
            Na Lúmina Lab, traduzimos conhecimento acadêmico em soluções de
            marketing digital aplicáveis, utilizando uma metodologia robusta que
            inclui Business Model Canvas, análise SWOT e desenvolvimento de MVP
            para validar ideias e entregar impacto real.
          </p>
          <ul className="space-y-3 text-medium-text mb-8">
            <li className="flex items-center">
              <IconeCheck className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
              <span>
                Trilhas de Aprendizagem para capacitação contínua em marketing
                digital.
              </span>
            </li>
            <li className="flex items-center">
              <IconeCheck className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
              <span>
                Projetos Personalizados para microempreendedores e negócios
                sociais.
              </span>
            </li>
            <li className="flex items-center">
              <IconeCheck className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
              <span>
                Foco em educação prática, tecnologia e transformação social.
              </span>
            </li>
          </ul>
          <Botao
            href="#aprendizagem"
            variante="primary"
            tamanho="md"
            className="shadow-md hover:shadow-glow-brand-primary-sm"
          >
            Explorar Trilhas
          </Botao>
        </div>
        <div>
          <EditorDeCodigoMock />
        </div>
      </div>
    </div>
  );
};

export default SecaoVitrine;
