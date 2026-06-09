import React from "react";

const estilo = {
    backgroundColor: "rgba(27, 42, 178, 0.39)", 
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const set1 = new Set(); // Set é uma estrutura de dados que não aceita valores repetidos. Por exemplo, se eu adicionar o valor 1, ele só vai aceitar uma vez. Se eu tentar adicionar o valor 1 novamente, ele não vai ser adicionado.
const set2 = new Set();

const Produto = () => {
    const func1 = () => console.log("produto 1");

    const func2 = React.useCallback(() => {
        console.log("produto 2");
    }, []);

    set1.add(func1);
    set2.add(func2);

    console.log('set1:', set1);
    console.log('set2:', set2);
    console.log('-------------------------');
    
    return (
        <div>
            <p onClick={func1}>produto 1</p>
            <p onClick={func2}>produto 2</p>
        </div>
    );
}

const Aplicacao = () => {
    const [contar, setContar] = React.useState(0);

    return (
        <div>
            <Produto />
            <button style={estilo} onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    );
}

export default Aplicacao;