import React from "react";

const types = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: "Preencha um CEP válido!"
    },
    email: {
        regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        message: "Preencha um email válido!"
    }
}

const UseForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setErrorCep] = React.useState(null);

    function validarCep(value) {
        if (type === false) return true;
        
        if (value.length === 0) {
            setErrorCep(types[type].message);
            return false;
        } else if(types[type] && !types[type].regex.test(value)) {
            setErrorCep(types[type].message);
            return false;
        } else {
            setErrorCep(null);
            return true;
        }
    }

    function onChange({ target }) {
        if (error) validarCep(target.value);
            setValue(target.value);
    }

    return {
        value,
        setValue,
        error,
        setErrorCep,
        onChange,
        onBlur: () => validarCep(value),
        validate: () => validarCep(value)
    }
}

export default UseForm;