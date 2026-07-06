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

const Input = ({ 
        id, 
        label, 
        onChange, 
        value, 
        type, 
        onBlur, 
        placeholder, 
        error 
    }) => {
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
                    type={type} 
                    id={id} 
                    name={id} 
                    style={estiloInput} 
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder={placeholder}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
            </label>
        </div>
    );
}

export default Input;