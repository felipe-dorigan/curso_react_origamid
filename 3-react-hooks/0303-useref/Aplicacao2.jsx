import React from "react";

const estilo = {
    backgroundColor: "rgba(27, 42, 178, 0.39)", 
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const estiloInput = {
    padding: "10px", 
    margin: "5px", 
    border: "1px solid #7d7d7d",
    borderRadius: "5px"
}

const Aplicacao = () => {
    const [carrinho, setCarrinho] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState(null);
    const timeoutRef = React.useRef();
  
    function handleClick() {
        setCarrinho(carrinho + 1);
        setNotificacao(`Você adicionou ${carrinho + 1} item(s) ao carrinho`);
        
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setNotificacao(null);
        }, 2000);
    }

    return (
        <div>
            <p>{notificacao}</p>
            <button style={estilo} onClick={handleClick}>Adicionar Carrinho ({carrinho})</button>
        </div>
    );
}

export default Aplicacao;