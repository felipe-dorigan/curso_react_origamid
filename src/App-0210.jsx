// Estrutura React na raiz, consumindo componentes das pastas de estudo.
import React from 'react';
import Form from '../2-react-para-iniciantes/0210-componentes/src/Form.jsx'
import Header from '../2-react-para-iniciantes/0210-componentes/Header.jsx';
import Footer from '../2-react-para-iniciantes/0210-componentes/Footer.jsx';

const Teste = () => {
    const active = false;

    if (active) {
        return (
            <p>Teste Ativo</p>
        )
    }
}

function App() {
    return (
        <React.Fragment>
            <Header />
            <Form />
            <Teste />
            <Footer />
        </React.Fragment>
    );
}

export default App;