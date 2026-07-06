import React from "react";
import Input from "./form/Input";
import useForm from "./hooks/useForm";

const Aplicacao = () => {
    const cep = useForm('cep');
    const email = useForm('email');
    const nome = useForm(false);
    
    function handleSubmit(event) {
        event.preventDefault();
        
        if (cep.validate() && email.validate() && nome.validate()) {
            alert("Formulário enviado com sucesso!");
        } else {
            alert("Preencha os campos corretamente!");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Formulário</h2>
            <Input 
                id="nome"
                label="Nome:"
                type="text"
                placeholder="Digite seu nome"
                {...nome}
            />
            <Input 
                id="cep"
                label="CEP:"
                type="text"
                placeholder="00000-000"
                {...cep}
            />
            <Input
                id="email"
                label="Email:"
                type="email"
                placeholder="email@exemplo.com"
                {...email}
            />
            <button>Enviar</button>
        </form>
    );
}

export default Aplicacao;