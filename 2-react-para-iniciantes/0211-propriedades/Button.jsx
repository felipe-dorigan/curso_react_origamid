import React from "react";

const Button = ({ items, children} ) => {
    console.log('props');
    console.log(items);
    
    return (
        <button>{children}</button>
    );
}

export default Button;