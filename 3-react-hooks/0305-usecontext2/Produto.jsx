import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
    const global = React.useContext(GlobalContext);

    if (global.dados === null) return null;

    return (
        <div>
            <h1>Produto</h1>
            <ul>
                {global.dados.map((item) => (
                    <li key={item.id}>
                        <p>Nome: {item.nome}</p>
                        <p>Preço: R$ {item.preco}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Produto;