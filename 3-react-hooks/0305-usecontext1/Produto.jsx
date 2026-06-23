import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
    const global = React.useContext(GlobalContext);

    return (
        <div>
            <h1>Produto</h1>
            <p>Contar: {global.contar}</p>
            <button onClick={() => global.contarDois()}>Incrementar</button>
        </div>
    );
}

export default Produto;