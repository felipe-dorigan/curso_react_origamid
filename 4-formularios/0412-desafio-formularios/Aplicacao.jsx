import React from "react";
import Radio from "./form/Radio";

const perguntas = [
    {
        pergunta: 'Qual método é utilizado para criar componentes?',
        options: [
            'React.makeComponent()',
            'React.createComponent()',
            'React.createElement()',
        ],
        resposta: 'React.createElement()',
        id: 'p1',
    },
    {
        pergunta: 'Como importamos um componente externo?',
        options: [
            'import Component from "./Component"',
            'require("./Component")',
            'import "./Component"',
        ],
        resposta: 'import Component from "./Component"',
        id: 'p2',
    },
    {
        pergunta: 'Qual hook não é nativo?',
        options: ['useEffect()', 'useFetch()', 'useCallback()'],
        resposta: 'useFetch()',
        id: 'p3',
    },
    {
        pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
        options: ['set', 'get', 'use'],
        resposta: 'use',
        id: 'p4',
    },
];

const Aplicacao = () => {
    const [respostas, setRespostas] = React.useState({
        p1:'', p2: '', p3: '', p4: '',
    });
    const [perguntaAtual, setPerguntaAtual] = React.useState(0);
    const [quantidadeAcertos, setQuantidadeAcertos] = React.useState(0);

    function contadorPergunta() {
        setPerguntaAtual(perguntaAtual + 1);

        if (perguntaAtual >= perguntas.length - 1) {
            conferirRespostas();
        }
    }

    function guardarResposta({target}) {
        setRespostas({
            ...respostas,
            [target.id]: target.value,
        });
    }

    function conferirRespostas() {
        const respostasCorretas = perguntas.filter(({id, resposta}) => {
            return resposta === respostas[id];
        });
        setQuantidadeAcertos(respostasCorretas.length);
    }

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                // conferirRespostas();
            }}>
                {perguntas.map((pergunta, index) => (
                    <Radio 
                        active={perguntaAtual === index}
                        key={pergunta.id} 
                        onChange={guardarResposta} 
                        value={respostas[pergunta.id]} 
                        {...pergunta} 
                    />
                ))}
                {quantidadeAcertos > 0 ? (
                    <p>
                        Você acertou {quantidadeAcertos} de {perguntas.length} perguntas.
                    </p>
                ) : (
                    <button 
                        type="button"
                        onClick={() => { contadorPergunta() }}
                    >
                        Próxima
                    </button>
                )}
            </form>
        </>
    );
}

export default Aplicacao;