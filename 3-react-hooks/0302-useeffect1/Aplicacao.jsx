import React from "react";

const Aplicacao = () => {
    const [contar, setContar] = React.useState(0);
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
            .then((response) => response.json())
            .then((json) => setDados(json));
    }, []);

    return (
        <div>
            {
                dados && (
                    <div>
                        <p>{dados.nome}</p>
                        <p>{`R$ ${dados.preco * contar}`}</p>
                    </div>
                )
            }
            <button onClick={() => setContar(contar + 1)}>
                Contar: {contar}
            </button>
        </div>
    );
}

export default Aplicacao;