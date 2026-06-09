import React from "react";
import Aplicacao from "../3-react-hooks/0304-usecallback/Aplicacao";

const App = () => {
    const  { pathname } = window.location;

    return (
        // <React.Fragment>
            <Aplicacao />
        // </React.Fragment>
    );
}

export default App;