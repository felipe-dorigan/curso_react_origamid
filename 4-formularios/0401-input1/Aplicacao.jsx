import React from "react";

const estilo = {
    backgroundColor: "rgba(27, 42, 178, 0.39)", 
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const estiloInput = {
    padding: "10px", 
    margin: "5px", 
    border: "none",
    borderRadius: "5px",
    border: "1px solid #a2aaf0",
}

const Aplicacao = () => {
    const [form, setForm] = React.useState({
        nome: "",
        email: ""
    });

    const hangleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = ({ target }) => {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    return (
        <form onSubmit={hangleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <br></br>
            <input
                type="text"
                id="nome"
                value={form.nome}
                name="nome"
                onChange={handleChange}
                style={estiloInput}
            />
            <br></br>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input
                type="email"
                id="email"
                value={form.email}
                name="email"
                onChange={handleChange}
                style={estiloInput}
            />
            <br></br>
            <button style={estilo}>Enviar</button>
        </form>
    );
}

export default Aplicacao;