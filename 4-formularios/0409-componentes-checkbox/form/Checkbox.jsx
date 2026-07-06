import React from "react";

const Checkbox = ({ options, value, setValue, ...props }) => {
    function handleChange({ target }) {
        if (target.checked) {
            setValue([...value, target.value]);
        } else {
            setValue(value.filter((item) => item !== target.value));
        }
    }

    return (
        <>
            {options.map((option, index) => (
                <label key={index} htmlFor={`${option}-${index}`}>
                    <input 
                        type="checkbox"
                        id={`${option}-${index}`}
                        name={option}
                        value={option}
                        checked={value.includes(option)}
                        onChange={handleChange}
                        {...props}
                    />
                    {option}
                    <br />
                </label>
            ))}
        </>
    );
}

export default Checkbox;