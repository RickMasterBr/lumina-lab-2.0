import React from "react";

const Botao = ({
  variante = "primary",
  tamanho = "md",
  children,
  href,
  className,
  ...props
}) => {
  // Animação moderna adicionada aqui para ser aplicada a todos os botões
  const estilosBase =
    "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed";

  const estilosTamanho = {
    sm: "px-4 py-2 text-sm", //
    md: "px-6 py-2.5 text-base", //
    lg: "px-8 py-3.5 text-lg", //
  };

  const estilosVariante = {
    // Estilo principal: Fundo roxo, letras brancas
    primary:
      "bg-brand-primary hover:bg-opacity-85 text-white focus:ring-brand-primary shadow-lg hover:shadow-glow-brand-primary-sm",
    // Novo estilo: Fundo escuro, borda e texto roxos
    "outline-dark":
      "bg-fundo-escuro-principal border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10 focus:ring-brand-primary",
    // Estilo antigo mantido para referência, caso precise
    secondary:
      "bg-dark-card hover:bg-opacity-90 text-brand-secondary border border-brand-secondary focus:ring-brand-secondary", //
  };

  const nomeClasseCombinado = `${estilosBase} ${estilosTamanho[tamanho]} ${
    estilosVariante[variante]
  } ${className || ""}`;

  if (href) {
    return (
      <a
        href={href}
        className={`${nomeClasseCombinado} inline-block text-center`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={nomeClasseCombinado} {...props}>
      {children}
    </button>
  );
};

export default Botao;
