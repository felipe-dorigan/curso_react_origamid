import React from "react";
import Titulo from "./Titulo";
import Produto from "./Produto";

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
    return (
        <div>
            <Titulo titulo="Produtos" />
            {produtos.map((produto, index) => (
                <Produto key={index} {...produto} />
            ))}
        </div>
    );
}

export default Produtos;