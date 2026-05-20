import React from "react";
import Input from "../0211-propriedades/Input.jsx";
import Button from "../0211-propriedades/Button.jsx";
import Titulo from "../0211-propriedades/Titulo.jsx";

const Form = () => {
    const arr = ['item 1', 'item 2', 'item 3'];

    return (
        <form>
            <Titulo cor="red" texto="Olá, Mundo!"> - Bem-vindo ao React</Titulo>
            <Titulo cor="blue" texto="Olá, Mundo 2!"> - Aprendendo React</Titulo>
            <Titulo cor="green" texto="Olá, Mundo 3!"> - Componentes e Props</Titulo>

            <Input id="email" label="Email:" type="email" placeholder="Digite seu email" />
            <Input id="senha" label="Senha:" type="password" placeholder="Digite sua senha" />

            <Button items={arr}>Enviar</Button>
        </form>
    );
}

export default Form;