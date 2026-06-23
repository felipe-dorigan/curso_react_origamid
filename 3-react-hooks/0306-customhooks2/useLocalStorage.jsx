import React from "react";

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = React.useState(() => {
        // verificar se tem valor no localStorage, se tiver, retornar o valor, se não tiver, retornar o valor inicial
        const valorLocalStorage = window.localStorage.getItem(key);
        return valorLocalStorage ? JSON.parse(valorLocalStorage) : initialValue;
    });

    React.useEffect(() => {
        // atualizar o valor no localStorage sempre que o valor mudar
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    // retornar o valor e a função para atualizar o valor
    return [value, setValue];
}

export default useLocalStorage;