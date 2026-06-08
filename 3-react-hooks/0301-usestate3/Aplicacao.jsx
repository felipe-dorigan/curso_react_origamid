import React from "react";
import Button from "./Button";
import Produto from "./Produto";
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const estilo = {
    backgroundColor: "rgba(27, 42, 178, 0.39)", 
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const Aplicacao = () => {
    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const fetchProduto = async (produto) => {
        const produtoLower = produto.toLowerCase();

        setLoading(true);

        try {
            const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produtoLower}`);
            const data = await response.json();

            console.log(data);

            setProduto(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>Aplicação</h1>
            <button style={estilo} onClick={() => fetchProduto("Tablet")}>Tablet</button>
            <button style={estilo} onClick={() => fetchProduto("Smartphone")}>Smartphone</button>
            <button style={estilo} onClick={() => fetchProduto("Notebook")}>Notebook</button>
            {/* <Button name="Tablet" onClick={() => fetchProduto("Tablet")} />
            <Button name="Smartphone" onClick={() => fetchProduto("Smartphone")} />
            <Button name="Notebook" onClick={() => fetchProduto("Notebook")} /> */}
            {loading && <p>Carregando...</p>}
            {!loading && produto && <Produto produto={produto} />}
        </div>
    );
}

export default Aplicacao;