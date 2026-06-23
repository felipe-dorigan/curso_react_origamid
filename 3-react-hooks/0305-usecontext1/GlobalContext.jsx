import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [contar, setContar] = React.useState(0);

    function contarDois() {
        setContar((contar) => contar + 2);
    }

    function contarCinco() {
        setContar((contar) => contar + 5);
    }

    return (
        <GlobalContext.Provider value={{ contar, setContar, contarDois, contarCinco }}>
            {children}
        </GlobalContext.Provider>);
}