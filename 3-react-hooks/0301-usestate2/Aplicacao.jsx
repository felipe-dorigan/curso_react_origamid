import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "../0301-usestate2/Modal";

const App = () => {
    const [contar, setContar] = React.useState(1);
    const [modal, setModal] = React.useState(false);
    const [itens, setItens] = React.useState(['Item 1 ']);

    function handleClick() {
        setContar(contar + 1);
        setItens([...itens, `Item ${contar + 1}`]);
    }

    return (
        <div>
            {itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <button onClick={handleClick}>Contar: {contar}</button>
        </div>
    );
}

export default App;