import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "../0301-usestate2/Modal";

const App = () => {
    const [modal, setModal] = React.useState(false);

    return (
        <div>
            <Modal modal={modal} setModal={setModal} />
            <ButtonModal setModal={setModal} />
        </div>
    );
}

export default App;