import React from "react";

const estilo = {
    backgroundColor: "rgba(27, 42, 178, 0.39)", 
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const Aplicacao = () => {
    const [preferencia, setPreferencia] = React.useState(localStorage.getItem('preferencia') || "Nenhuma");
    const [dados, setDados] = React.useState(null);

    function handlePreferencia(event) {
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
            .then(response => response.json())
            .then(json => {
                setPreferencia(json.nome);
                setDados(json);
                localStorage.setItem('preferencia', JSON.stringify(json.nome));
            });
    }

    return (
        <div>
            <h1>Preferencia: {preferencia}</h1>
            <button style={estilo} onClick={handlePreferencia}>notebook</button>
            <button style={estilo} onClick={handlePreferencia}>smartphone</button>
            {dados && (
                <div>
                    <h2>{dados.nome}</h2>
                    <p>{`Preço: R$ ${dados.preco}`}</p>
                    <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
                </div>
            )}
        </div>
    );
}

export default Aplicacao;