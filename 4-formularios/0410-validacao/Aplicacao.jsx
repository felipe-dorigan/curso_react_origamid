import React from "react";
import Input from "./form/Input";

const Aplicacao = () => {
    const [cep, setCep] = React.useState("");
    const [erroCep, setErroCep] = React.useState(null);

    function validarCep(value) {
        if (value.length === 0) {
            setErroCep("Preencha o campo CEP.");
            return false;
        } else if(!/^\d{5}-?\d{3}$/.test(value)) {
            setErroCep("CEP inválido! Preencha no formato 00000-000.");
            return false;
        } else {
            setErroCep(null);
            return true;
        }
    }

    function handleCepBlur({ target }) {
        validarCep(target.value);
    }

    function handleCepChange({ target }) {
        setCep(target.value);
        if (erroCep) {
            validarCep(target.value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        if (validarCep(cep)) {
            alert("Formulário enviado com sucesso!");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Formulário</h2>
            <Input 
                id="cep"
                label="CEP:"
                type="text"
                value={cep}
                onChange={handleCepChange}
                placeholder="00000-000"
                onBlur={handleCepBlur}
            />
            {erroCep && <p style={{ color: "red" }}>{erroCep}</p>}
            <button>Enviar</button>
        </form>
    );
}

export default Aplicacao;