import React from "react";

const estiloSelect = {
    width: "80%",
    height: "50px",
    fontSize: "1.5rem",
    border: "1px solid #000",
    borderRadius: "5px",
    padding: "0 10px",
    marginBottom: "20px",
    margin: "0 10%",
};

const Select = ({ options, value, setValue, ...props }) => {
    return (
        <select 
            style={estiloSelect} 
            value={value} 
            onChange={({target}) => setValue(target.value)}
            {...props}
        >
            <option value="" disabled>Selecione</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default Select;