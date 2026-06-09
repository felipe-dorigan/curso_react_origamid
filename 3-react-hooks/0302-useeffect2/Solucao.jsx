import React from "react";
import Produto from "./SolucaoProduto";

const estilo = {
    backgroundColor: "rgba(27, 42, 178, 0.39)", 
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const Solucao = () => {
    const [produto, setProduto] = React.useState(null);

    React.useEffect(() => {
        const produtoLocal = window.localStorage.getItem('preferencia');
        if (produtoLocal !== null)
            setProduto(produtoLocal);
    }, []);

    React.useEffect(() => {
        if (produto !== null)
            window.localStorage.setItem('preferencia', produto);

    }, [produto]);

    function handleClique({ target }) {
        setProduto(target.innerText);
    }

    return (
        <div>
            <h1>Preferencia: {produto}</h1>
            <button style={estilo} onClick={handleClique}>notebook</button>
            <button style={estilo} onClick={handleClique}>smartphone</button>
            <Produto produto={produto} />
        </div>
    );
}

export default Solucao;