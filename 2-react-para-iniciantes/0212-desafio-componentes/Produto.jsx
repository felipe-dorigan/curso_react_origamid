import React from "react";

const Produto = ({ nome, propriedades }) => {
    return (
        <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
            <h2>{nome}</h2>
            <ul>
                {propriedades.map((propriedade, i) => (
                    <li key={i}>{propriedade}</li>
                ))}
            </ul>
        </div>
    );
}

export default Produto;