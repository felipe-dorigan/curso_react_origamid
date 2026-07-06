import React from "react";
import Checkbox from "./form/Checkbox";

const Aplicacao = () => {
    const [carros, setCarros ] = React.useState([]);
    const [termos, setTermos ] = React.useState([]);

    return (
        <>
            <h2>Checkbox</h2>
            <Checkbox 
                options={["Sonata", "Azera", "Elantra"]} 
                value={carros} 
                setValue={setCarros} 
            />
            <h2>Termos</h2>
            <Checkbox 
                options={["Aceito os termos"]} 
                value={termos} 
                setValue={setTermos} 
            />
        </>
    );
}

export default Aplicacao;