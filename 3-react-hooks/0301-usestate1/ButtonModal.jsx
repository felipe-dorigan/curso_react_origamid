import React from "react";

const ButtonModal = ({setModal}) => {
    return (
        <div>
            <button onClick={() => setModal(true)}>Ativar Modal</button>
        </div>
    )
}

export default ButtonModal;