import React from "react";

const estiloFieldset = {
    border: "2px solid #eee",
    padding: "2rem",
    marginBottom: "1rem",
};

const Radio = ({ pergunta, options, id, onChange, value, active }) => {
    if (!active) return null;
    return (
        <fieldset style={estiloFieldset}>
            <legend style={{fontWeight: "bold"}}>{pergunta}</legend>
            {options.map((option, index) => (
                <label key={option} style={{ marginBottom: "1rem", fontFamily: "monospace"}}>
                    <input
                        type="radio"
                        id={id}
                        name={id}
                        value={option}
                        checked={value === option}
                        onChange={onChange}
                    />
                    {option}
                    <br />
                </label>
            ))}
        </fieldset>
    );
}

export default Radio;