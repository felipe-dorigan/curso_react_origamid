import React from "react";
import Select from "./form/Select";

const Aplicacao = () => {
    const [produto, setProduto] = React.useState("");

    return (
        <>
            <Select 
                options={["notebook", "smartphone", "tablet"]} 
                value={produto} 
                setValue={setProduto} />
        </>
    );
}

export default Aplicacao;