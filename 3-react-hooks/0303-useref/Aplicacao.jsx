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
    const [comentarios, setComentarios] = React.useState([]);
    const [input, setInput] = React.useState("");
    const inputRef = React.useRef();

    function handleClick() {
        setComentarios([...comentarios, input]);
        setInput("");
        inputRef.current.focus();
    }

    return (
        <div>
            <ul>
                <input style={estiloInput} type="text" value={input} onChange={({target}) => setInput(target.value)} />
                <button style={estilo} onClick={handleClick}>Adicionar comentário</button>
                {comentarios.map((comentario, index) => (
                    <li key={index}>{comentario}</li>
                ))}
            </ul>
        </div>
    );
}

export default Aplicacao;