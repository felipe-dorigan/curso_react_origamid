import React from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

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
    const { request, data, loading, error } = useFetch();

    const handleClick = ({ target }) => {
        setProduto(target.innerText);
    }

    React.useEffect(() => {
        async function fetchData() {
            const {response, json} = await request("https://ranekapi.origamid.dev/json/api/produto");
        }
        fetchData();
    }, []);

    if (error) return <p>{error}</p>;
    if (loading) return <p>Carregando...</p>;
    if (data) {
        return (
            <div>
                <h1>Custom Hooks</h1>
                <p>Produto selecionado: {produto}</p>
                <button style={estilo} onClick={handleClick}>Notebook</button>
                <button style={estilo} onClick={handleClick}>Smartphone</button>
    
                {data.map((produto) => (
                    <div key={produto.id}>
                        <h2>{produto.nome}</h2>
                        <p>{produto.preco}</p>
                    </div>
                ))}
            </div>
        );
    } else {
        return null;
    }
}

export default Aplicacao;