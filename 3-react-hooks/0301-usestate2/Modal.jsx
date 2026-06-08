import React from "react";

const Modal = ({modal, setModal}) => {
    if (modal === true) {
        return (
            <div>
                Este é um Modal <button onClick={() => setModal(false)}>Fechar Modal</button>
            </div>
        );
    } else {
        return null;
    }
}

export default Modal;