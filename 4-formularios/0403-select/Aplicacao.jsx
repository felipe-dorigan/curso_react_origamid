import React from "react";

const estiloSelect = {
    width: "80%",
    height: "50px",
    fontSize: "1.5rem",
    border: "1px solid #000",
    borderRadius: "5px",
    padding: "0 10px",
    marginBottom: "20px",
    margin: "0 10%",
};

const Aplicacao = () => {
    const [select, setSelect] = React.useState("");

    return (
        <form>
            <select 
                style={estiloSelect} 
                value={select} 
                onChange={({ target }) => 
                    setSelect(target.value)
                }>
                <option disabled value="">Selecione</option>
                <option value="notebook">Notebook</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
            </select>
        </form>
    );
}

export default Aplicacao;