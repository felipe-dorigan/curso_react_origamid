import React from "react";

const Radio = ({ id, options, value, setValue, ...props }) => {
    return (
        <>
            {options.map((option, index) => (
                <label key={index} htmlFor={`${id}-${index}`}>
                    <input 
                        type="radio"
                        id={`${id}-${index}`}
                        name={id}
                        value={option}
                        checked={value === option}
                        onChange={({ target }) => setValue(target.value)}
                        {...props}
                    />
                    {option}
                </label>
            ))}
        </>
    );
}

export default Radio;