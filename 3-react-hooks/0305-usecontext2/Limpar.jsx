import React from "react";
import { GlobalContext } from "./GlobalContext";

const estilo = {
    backgroundColor: "rgba(27, 42, 178, 0.39)", 
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const Limpar = () => {
    const { limparDados } = React.useContext(GlobalContext);
    return (
        <button style={estilo} onClick={limparDados}>Limpar Dados</button>
    );
}

export default Limpar;