import React from "react";

const Produto = () => {

    React.useEffect(() => {
        function handleScroll(event) {
            console.log("Scroll", event);
        }        

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    return (
        <div style={{height: "200vh"}}>
            <h1>Produto</h1>
        </div>
    );
}

export default Produto;