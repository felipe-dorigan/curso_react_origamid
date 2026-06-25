import React from 'react';

const Aplicacao = () => {
    const [textarea, setTextarea] = React.useState('');

    function handleChange({ target }) {
        setTextarea(target.value);
    }

    return (
        <form>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
                id="mensagem"
                name="mensagem"
                rows="4"
                cols="50"
                placeholder="Digite sua mensagem aqui..."
                value={textarea}
                onChange={handleChange}
            ></textarea>
            {textarea && <p>Você digitou: {textarea}</p>}
        </form>
    );
}

export default Aplicacao;