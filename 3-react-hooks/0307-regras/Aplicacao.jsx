import React from "react";

function useNumeroAleatorio() {
    React.useEffect(() => {
        document.title = Math.random();
    }, []);
}

const Aplicacao = () => {
    useNumeroAleatorio();

    return (
        <div></div>
    );
}

export default Aplicacao;