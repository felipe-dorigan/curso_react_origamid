import React from "react";
import Produto from "./Produto";

const estilo = {
    backgroundColor: "rgba(27, 42, 178, 0.39)", 
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const Aplicacao = () => {
    const [ativo, setAtivo] = React.useState(false);

    return (
        <div>
            <button style={estilo} onClick={() => setAtivo(!ativo)}>Ativar</button>
            {ativo && <Produto />}
        </div>
    );
}

export default Aplicacao;