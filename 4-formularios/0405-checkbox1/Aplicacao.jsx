import React from "react";

const Aplicacao = () => {
    const [cores, setCores] = React.useState(["Azul", "Verde"]);

    function handleChange({ target }) {
        if (target.checked) {
            setCores([ ...cores, target.value ]);
        } else {
            setCores(cores.filter(cor => cor !== target.value)); // filtra e remove a cor que não está marcada
        }
    }

    return (
        <form>
            <label>
                <input 
                    type="checkbox" 
                    value="Azul" 
                    checked={cores.includes("Azul")} 
                    onChange={handleChange} 
                /> Azul
            </label>
            <br />
            <label>
                <input 
                    type="checkbox" 
                    value="Vermelho" 
                    checked={cores.includes("Vermelho")} 
                    onChange={handleChange} 
                /> Vermelho
            </label>
            <br />
            <label>
                <input 
                    type="checkbox" 
                    value="Verde" 
                    checked={cores.includes("Verde")} 
                    onChange={handleChange} 
                /> Verde
            </label>
        </form>
    );
}

export default Aplicacao;