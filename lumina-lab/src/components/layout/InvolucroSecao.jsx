"use client"; // Necessário pois usa o nosso Hook customizado, que tem estado.

import React from "react";
import useObservadorDeIntersecao from "@/hooks/useObservadorDeIntersecao";

const InvolucroSecao = ({ children, className, id, semPreenchimento }) => {
  const [ref, estaVisivel] = useObservadorDeIntersecao({ threshold: 0.1 });

  const classesPreenchimento = semPreenchimento ? "" : "py-20 md:py-28";

  return (
    <section
      ref={ref}
      id={id}
      className={`${classesPreenchimento} ${className || ""} fade-in-scroll ${
        estaVisivel ? "is-visible" : ""
      }`}
    >
      {children}
    </section>
  );
};

export default InvolucroSecao;
