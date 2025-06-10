import React from "react";

const Rodape = ({ nomeEmpresa }) => {
  return (
    <footer className="bg-dark-card border-t border-dark-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-medium-text">
        <p>
          &copy; {new Date().getFullYear()} {nomeEmpresa}. Todos os direitos
          reservados.
        </p>
        <p className="mt-2 text-sm">
          Construído com <span className="text-brand-primary">React</span>,{" "}
          <span className="text-brand-primary">Next.js</span>, e{" "}
          <span className="text-brand-primary">Tailwind CSS</span>.
        </p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-brand-primary">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-brand-primary">
            Termos de Serviço
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
