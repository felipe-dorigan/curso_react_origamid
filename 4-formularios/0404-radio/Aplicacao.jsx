import React from "react";

const Aplicacao = () => {
    const [produto, setProduto] = React.useState("");
    const [cor, setCor] = React.useState("");

    function hancleChange({ target }) {
        setProduto(target.value);
    }

    return (
        <form>
            <h2>Cores</h2>
            <label>
                <input
                    type="radio"
                    name="cor"
                    value="vermelho"
                    checked={cor === "vermelho"}
                    onChange={({ target }) => setCor(target.value)}
                />
                Vermelho
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="cor"
                    value="azul"
                    checked={cor === "azul"}
                    onChange={({ target }) => setCor(target.value)}
                />
                Azul
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="cor"
                    value="amarelo"
                    checked={cor === "amarelo"}
                    onChange={({ target }) => setCor(target.value)}
                />
                Amarelo
            </label>
            <br />
            <br />
            {cor}
            <br />

            <h2>Produtos</h2>
            <label>
                <input 
                    type="radio" 
                    name="produto" 
                    value="notebook" 
                    checked={produto === "notebook"} 
                    onChange={hancleChange} />
                Notebook
            </label>
            <br />
            <label>
                <input 
                    type="radio" 
                    name="produto" 
                    value="smartphone" 
                    checked={produto === "smartphone"} 
                    onChange={hancleChange} />
                Smartphone
            </label>
            <br />
            <label>
                <input 
                    type="radio" 
                    name="produto" 
                    value="tablet" 
                    checked={produto === "tablet"} 
                    onChange={hancleChange} />
                Tablet
            </label>
            <br />
            <br />
            {produto}
        </form>
    );
}

export default Aplicacao;