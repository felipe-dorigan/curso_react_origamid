import React from "react"

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
    const dados = luana;

    const cor = (dados) => {
        if (dados.ativa) {
            return '#0f0';
        } else {
            return '#f00';
        }
    }

    const valorTotal = (dados) => {
        const total = dados.compras.reduce((acc, item) => {
            const precoLimpo = +item.preco.replace('R$ ', '');
            return acc + precoLimpo;
        }, 0);
        return total;
    }

    const verificarGasto = (dados) => {
        const total = valorTotal(dados);
        if (total > 10000) {
            return 'Você gasta muito, cuidado!';
        }
    }

    return (
        <div>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            {/* <p>Situação: <span style={{ color: dados.ativa ? '#0f0' : '#f00' }}>{dados.ativa ? 'Ativo' : 'Inativo'}</span></p> */}
            <p>Situação: <span style={{ color: cor(dados) }}>{dados.ativa ? 'Ativo' : 'Inativo'}</span></p>
            <p>Total gasto: R$ {valorTotal(dados)}</p>
            <p>{verificarGasto(dados)}</p>
        </div>
    );
}

export default App;
