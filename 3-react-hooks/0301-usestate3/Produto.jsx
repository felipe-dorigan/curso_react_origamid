import React from "react";

const Produto = ({ produto }) => {
    return (
        <div>
            <h2>{produto.nome}</h2>
            <p>Preço: {produto.preco}</p>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} style={{width: "300px"}} />
        </div>
    );
}

export default Produto;