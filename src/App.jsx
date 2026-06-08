import React from "react";
import Aplicacao from "../3-react-hooks/0301-usestate3/Aplicacao";


const App = () => {
    const  { pathname } = window.location;

    return (
        <React.Fragment>
            <Aplicacao />
        </React.Fragment>
    );
}

export default App;