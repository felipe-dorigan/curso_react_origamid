import React from "react";

const arrayCores = ["azul", "roxo", "laranja", "verde", 'vermelho', 'cinza']

const Aplicacao = () => {
    const [cores, setCores] = React.useState(['azul']);

    function handleChange({ target }) {
        if (target.checked) {
            setCores([ ...cores, target.value ]);
        } else {
            setCores(cores.filter(cor => cor !== target.value)); // filtra e remove a cor que não está marcada
        }
    }

    return (
        <form>
            {arrayCores.map(cor => (
                <label key={cor} style={{ textTransform: 'capitalize' }}>
                    <input 
                        type="checkbox" 
                        value={cor} 
                        checked={cores.includes(cor)} 
                        onChange={handleChange} 
                    /> {cor}
                    <br />
                </label>
            ))}
        </form>
    );
}

export default Aplicacao;