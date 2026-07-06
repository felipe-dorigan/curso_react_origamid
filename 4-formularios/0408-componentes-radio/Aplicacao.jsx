import React from "react";
import Radio from "./form/Radio";

const Aplicacao = () => {
    const [cor, setCor] = React.useState("vermelho");
    const [fruta, setFruta] = React.useState("maçã");

    return (
        <>
            <h2>Cores</h2>
            <Radio 
                id="cor" 
                options={["azul", "vermelho"]} 
                value={cor} 
                setValue={setCor}
            />
            <h2>Frutas</h2>
            <Radio 
                id="fruta" 
                options={["maçã", "banana"]} 
                value={fruta} 
                setValue={setFruta}
            />
        </>
    );
}

export default Aplicacao;