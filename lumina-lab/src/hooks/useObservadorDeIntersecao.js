import { useEffect, useRef, useState } from "react";

const useObservadorDeIntersecao = (opcoes = {}) => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    gatilhoUnico = true,
  } = opcoes;
  const [estaVisivel, setEstaVisivel] = useState(false);
  const elementoRef = useRef(null);

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            setEstaVisivel(true);
            if (gatilhoUnico && elementoRef.current) {
              observador.unobserve(elementoRef.current);
            }
          } else {
            if (!gatilhoUnico) {
              setEstaVisivel(false);
            }
          }
        });
      },
      { threshold, root, rootMargin }
    );

    const elementoAtual = elementoRef.current;
    if (elementoAtual) {
      observador.observe(elementoAtual);
    }

    return () => {
      if (elementoAtual) {
        observador.unobserve(elementoAtual);
      }
    };
  }, [elementoRef, threshold, root, rootMargin, gatilhoUnico]);

  return [elementoRef, estaVisivel];
};

export default useObservadorDeIntersecao;
