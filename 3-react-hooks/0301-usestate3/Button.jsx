import React from "react";

const Button = ({ name }) => {

    return (
        <button style={{backgroundColor: "rgba(27, 42, 178, 0.39)", padding: "10px", margin: "5px", border: "none", borderRadius: "5px", cursor: "pointer"}}>{name}</button>
    );
}

export default Button;