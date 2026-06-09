import React from "react";

const estilo = {
    backgroundColor: "rgba(27, 42, 178, 0.39)", 
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

function operacaoLenta() {
    let calculo = 0;
    for(let i = 0; i < 1000000000; i++) {
        calculo = i + i /10;
    }

    return calculo;
}

const Aplicacao = () => {
    const [contar, setContar] = React.useState(0);

    // const valor = React.useMemo(() => {
    //     const localItem = localStorage.getItem("produto");
    //     console.log('memo foi ativado');
    //     return localItem;
    // }, []);

    const t1 = performance.now();
    const valor = React.useMemo(() => operacaoLenta(), []);
    const t2 = performance.now();
    console.log(`Tempo gasto: ${t2 - t1}ms`);

    return (
        <div>
            <button style={estilo} onClick={() => setContar(contar + 1)}>Contar: {contar}</button>
        </div>
    );
}

export default Aplicacao;