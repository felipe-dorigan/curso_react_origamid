import React from "react";
import Produto from "./Produto";
import { GlobalStorage } from "./GlobalContext";

const estilo = {
    backgroundColor: "rgba(27, 42, 178, 0.39)", 
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const Aplicacao = () => {
    return (
        <GlobalStorage>
            <Produto />
        </GlobalStorage>
    );
}

export default Aplicacao;