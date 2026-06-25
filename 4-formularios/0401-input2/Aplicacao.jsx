import React from 'react';

const estiloInput = {
    padding: '8px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '4px'
};

const estiloLabel = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
};

const estiloBotao = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
};

const estiloFormulario = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
};
    
// Centralizar somente o botão
const estiloBotaoContainer = {
    textAlign: 'center'
};

const formulario = [
    {
        id: 'nome',
        label: 'Nome',
        type: 'text'
    },
    {
        id: 'email',
        label: 'Email',
        type: 'email'
    },
    {
        id: 'senha',
        label: 'Senha',
        type: 'password'
    },
    {
        id: 'cep',
        label: 'CEP',
        type: 'text'
    },
    {
        id: 'rua',
        label: 'Rua',
        type: 'text'
    },
    {
        id: 'numero',
        label: 'Número',
        type: 'text'
    },
    {
        id: 'bairro',
        label: 'Bairro',
        type: 'text'
    },
    {
        id: 'cidade',
        label: 'Cidade',
        type: 'text'
    },
    {
        id: 'estado',
        label: 'Estado',
        type: 'text'
    }
];

const Aplicacao = () => {
    const [form, setForm] = React.useState(
        formulario.reduce((acc, campo) => {
            return {
                ...acc,
                [campo.id]: ''
            };
        }, {})
    );
    const [response, setResponse] = React.useState(null);

    function hangleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then((response) => {
            setResponse(response);
            console.log('response', response);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={estiloFormulario}>
                {formulario.map((campo) => (
                    <div key={campo.id}>
                        <label htmlFor={campo.id} style={estiloLabel}>{campo.label}:</label>
                        <input
                            type={campo.type}
                            id={campo.id}
                            value={form[campo.id]}
                            onChange={hangleChange}
                            style={estiloInput}
                        />
                    </div>
                ))}
                <div style={estiloBotaoContainer}>
                    <button style={estiloBotao}>Enviar</button>
                </div>
            </form>

            {response && <span id="mensagem">Formulário enviado com sucesso!</span>}
        </div>
    );
}

export default Aplicacao;