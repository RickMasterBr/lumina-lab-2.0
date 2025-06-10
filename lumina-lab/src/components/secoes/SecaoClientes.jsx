import React from "react";
import CardCliente from "./elementos/CardCliente";

const SecaoClientes = ({ titulo, clientes }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-light-text">
        {titulo}
      </h2>
      <p className="text-base sm:text-lg text-medium-text text-center mb-16 max-w-3xl mx-auto">
        Colaboramos com microempreendedores e empreendedores sociais na fase de
        clientes-teste, aplicando conhecimentos de marketing digital para
        validar soluções e fortalecer suas presenças online.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clientes.map((cliente) => (
          <div key={cliente.id} className="h-full">
            <CardCliente cliente={cliente} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecaoClientes;
