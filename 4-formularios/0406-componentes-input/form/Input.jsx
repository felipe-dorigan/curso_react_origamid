import React from "react";

const estiloInput = {
    display: "block",
    marginBottom: "1rem",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "50%",
    boxSizing: "border-box",
    backgroundColor: "#f0f0f0",
};

const Input = ({ id, label, setValue, ...props }) => {
    return (
        <div>
            <label htmlFor={id}>
                <span 
                    style={{ 
                        display: "block", 
                        marginBottom: "0.5rem", 
                        color: "#333" 
                    }}>{label}</span>
                <input 
                    type="text" 
                    id={id} 
                    name={id} 
                    style={estiloInput} 
                    onChange={({target}) => setValue(target.value)}
                    {...props}
                />
            </label>
        </div>
    );
}

export default Input;