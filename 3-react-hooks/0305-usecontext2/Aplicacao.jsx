import React from "react";
import Produto from "./Produto";
import { GlobalContext, GlobalStorage } from "./GlobalContext";
import Limpar from "./Limpar";

const Aplicacao = () => {
    return (
        <GlobalStorage>
            <Produto />
            <Limpar />
        </GlobalStorage>
    );
}

export default Aplicacao;