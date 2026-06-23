import React from "react";

const useFetch = (url) => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const request = React.useCallback(async function request(url, options) { // função para fazer a requisição, para não precisar repetir o código de fetch em cada componente que for usar o hook. Pois o hook é para facilitar a reutilização de código, então é melhor ter uma função para fazer a requisição, do que repetir o código de fetch em cada componente que for usar o hook.
        let response;
        let json;
        
        try {
            setError(null);
            setLoading(true);

            response = await fetch(url, options);
            json = await response.json();

        } catch (error) {
            json = null;
            setError("Erro: " + error.message);
        } finally {
            setData(json);
            setLoading(false);
            return { response, json };
        }
    }, []);

    return { data, loading, error, request }; // retornar em objeto para facilitar a desestruturação no componente que irá usar o hook. Pois posso pegar apenas o que eu preciso, por exemplo: const { error } = useFetch(url); em qualquer ordem, sem precisar pegar o data o loading e o request se eu não for usar eles. 
}

export default useFetch;