"use client";
import React from "react";
import {
  IconeSpotify,
  IconeApplePodcasts,
  IconeGooglePodcasts,
} from "@/constants";

const mapaDeIcones = {
  spotify: IconeSpotify,
  apple: IconeApplePodcasts,
  google: IconeGooglePodcasts,
};

const SecaoPodcast = ({ dadosPodcast }) => {
  const {
    title: titulo,
    subtitle: subtitulo,
    description: descricao,
    coverImageUrl: urlCapa,
    plataformas = [],
  } = dadosPodcast || {};

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        {/* Coluna da Imagem */}
        <div className="lg:col-span-2">
          <img
            src={urlCapa}
            alt={`Capa do Podcast ${titulo}`}
            className="rounded-xl shadow-2xl w-full h-auto object-contain aspect-square max-w-md mx-auto lg:max-w-none transform transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Coluna de Informações */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-light-text">
            {titulo}
          </h2>
          <p className="text-lg sm:text-xl text-[var(--cor-secundaria-usr)] font-medium mb-6">
            {subtitulo}
          </p>
          <p className="text-base sm:text-lg text-medium-text leading-relaxed mb-10">
            {descricao}
          </p>

          {/* <h3 className="text-2xl font-semibold text-light-text mb-4">
            Ouça Agora:
          </h3>*/}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {plataformas.map((plataforma) => {
              const Icone = mapaDeIcones[plataforma.iconName];
              if (!Icone) return null;
              return (
                <a
                  key={plataforma.name}
                  href={plataforma.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  // MUDANÇA AQUI: Recriei completamente o className para ser simples e funcional
                  className={`flex items-center space-x-2.5 px-5 py-3 rounded-lg font-semibold transition-transform duration-300 transform hover:scale-105 ${plataforma.bgColorClass} ${plataforma.textColorClass} ${plataforma.hoverBgColorClass}`}
                >
                  <Icone className="w-6 h-6" />
                  <span>{plataforma.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecaoPodcast;
