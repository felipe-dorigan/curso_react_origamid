import React from "react";
import useLocalStorage from "./useLocalStorage";

const estilo = {
    backgroundColor: "rgba(27, 42, 178, 0.39)", 
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const Aplicacao = () => {
    const [produto, setProduto] = useLocalStorage("produto", "");

    const handleClick = ({ target }) => {
        setProduto(target.innerText);
    }

    return (
        <div>
            <h1>Custom Hooks</h1>
            <p>Produto selecionado: {produto}</p>
            <button style={estilo} onClick={handleClick}>Notebook</button>
            <button style={estilo} onClick={handleClick}>Smartphone</button>
        </div>
    );
}

export default Aplicacao;