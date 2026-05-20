import React from "react";
import Header from "../2-react-para-iniciantes/0212-desafio-componentes/Header";
import Home from "../2-react-para-iniciantes/0212-desafio-componentes/Home";
import Produtos from "../2-react-para-iniciantes/0212-desafio-componentes/Produtos";


const App = () => {
    const  { pathname } = window.location;

    return (
        <React.Fragment>
            <Header />
            {pathname === '/' && <Home />}
            {pathname === '/produtos' && <Produtos />}
        </React.Fragment>
    );
}

export default App;