// REVISANDO ALGUMAS FUNCIONALIDADES DO JAVASCRIPT

// DESESTRUTURANDO

// function handleMouse({ clientX, clientY }) {
//     console.log(clientX, clientY);
// }

// document.documentElement.addEventListener('click', handleMouse);

const useQuadrado = [
    4, 
    function (lado) {
        return 4 * lado;
    }
];

const [lado, perimetro] = useQuadrado; // A DESESTRUTURAÇÃO PERMITE QUE VOCÊ EXTRAIA VALORES DE ARRAYS OU PROPRIEDADES DE OBJETOS E ATRIBUA-LOS A VARIÁVEIS SEPARADAS DE FORMA MAIS SIMPLES E LEGÍVEL. NESTE EXEMPLO, A DESESTRUTURAÇÃO É USADA PARA EXTRAIR O VALOR DO LADO E A FUNÇÃO DE PERÍMETRO DO ARRAY USEQUADRADO, ATRIBUINDO-OS ÀS VARIÁVEIS LADO E PERIMETRO, RESPECTIVAMENTE.

console.log(lado);
// RESULTADO: 4
console.log(perimetro(lado));
// RESULTADO: 16

////////////////////////////////////////////////////////////////////////////////////////////////////

function showList(empresa, ...clientes) { // O REST PARAMETER PERMITE QUE VOCÊ COLETE UM NÚMERO INDETERMINADO DE ARGUMENTOS EM UM ARRAY. NESTE EXEMPLO, A FUNÇÃO SHOWLIST RECEBE UM PARÂMETRO EMPRESA E UM REST PARAMETER ...CLIENTES, QUE COLETA TODOS OS ARGUMENTOS ADICIONAIS PASSADOS PARA A FUNÇÃO EM UM ARRAY CHAMADO CLIENTES. DESSA FORMA, VOCÊ PODE PASSAR QUALQUER NÚMERO DE CLIENTES PARA A FUNÇÃO, E ELES SERÃO COLETADOS NO ARRAY CLIENTES PARA SEREM USADOS DENTRO DA FUNÇÃO.
    clientes.forEach(cliente => {
        console.log(`${cliente} é cliente da empresa ${empresa}`);
    });
}

showList('Origamid', 'João', 'Maria', 'José');

// RESULTADO:
// João é cliente da empresa Origamid
// Maria é cliente da empresa Origamid
// José é cliente da empresa Origamid

////////////////////////////////////////////////////////////////////////////////////////////////////
// ESTUDANDO, SPREAD OPERATOR

const numeros = [1, 2, 3];
// const maior = Math.max(numeros); // DESSA FORMA O RETORNO É -INFINITY, POIS O MATH.MAX ESPERA RECEBER NÚMEROS SEPARADOS POR VÍRGULA, E NÃO UM ARRAY. PARA RESOLVER ISSO, PODEMOS USAR O SPREAD OPERATOR, QUE PERMITE EXPANDIR O ARRAY EM ELEMENTOS SEPARADOS:

const maior = Math.max(...numeros); // AGORA O RETORNO É 3, POIS O SPREAD OPERATOR EXPANDE O ARRAY EM ELEMENTOS SEPARADOS, PERMITINDO QUE O MATH.MAX RECEBA OS NÚMEROS CORRETAMENTE.

// console.log(maior);
// RESULTADO: 3

const numeros2 = [4, 5, 6, ...numeros, 7, 8, 9]; // O SPREAD OPERATOR TAMBÉM PODE SER USADO PARA COMBINAR ARRAYS, PERMITINDO QUE OS ELEMENTOS DE UM ARRAY SEJAM EXPANDIDOS E INSERIDOS EM OUTRO ARRAY. NESTE EXEMPLO, O ARRAY NUMEROS2 CONTÉM OS ELEMENTOS DO ARRAY NUMEROS, ALÉM DE OUTROS NÚMEROS ADICIONADOS ANTES E DEPOIS.

console.log(numeros2);
// RESULTADO: [4, 5, 6, 1, 2, 3, 7, 8, 9]

// const numeros3 = [4, 5, 6, numeros, 7, 8, 9]; // COMO O ARRAY NUMEROS NÃO FOI EXPANDIDO, ELE É INSERIDO COMO UM ÚNICO ELEMENTO DENTRO DO ARRAY NUMEROS2, RESULTANDO EM UM ARRAY ANINHADO. NESTE CASO, O ARRAY NUMEROS APARECE COMO UM ELEMENTO SEPARADO DENTRO DO ARRAY NUMEROS2, E NÃO COMO ELEMENTOS INDIVIDUAIS.

// console.log(numeros3);
// RESULTADO: [4, 5, 6, [1, 2, 3], 7, 8, 9]

////////////////////////////////////////////////////////////////////////////////////////////////////

const carro = {
    cor: 'vermelho',
    portas: 4
}

const carroAno = { ...carro, ano: 2020 }; // O SPREAD OPERATOR TAMBÉM PODE SER USADO PARA COMBINAR OBJETOS, PERMITINDO QUE AS PROPRIEDADES DE UM OBJETO SEJAM EXPANDIDAS E INSERIDAS EM OUTRO OBJETO. NESTE EXEMPLO, O OBJETO CARROANO CONTÉM AS PROPRIEDADES DO OBJETO CARRO, ALÉM DE UMA NOVA PROPRIEDADE ANO ADICIONADA.

console.log(carroAno);
// RESULTADO: {cor: 'vermelho', portas: 4, ano: 2020}


////////////////////////////////////////////////////////////////////////////////////////////////////

import quadrado from './quadrado.js'; // O IMPORT É USADO PARA TRAZER FUNCIONALIDADES DE OUTROS MÓDULOS PARA O MÓDULO ATUAL. NESTE EXEMPLO, A FUNÇÃO QUADRADO É IMPORTADA DO ARQUIVO QUADRADO.JS, PERMITINDO QUE SEJA USADA DENTRO DESTE MÓDULO PARA CALCULAR A ÁREA E O PERÍMETRO DE UM QUADRADO COM LADO 4.

// PARA QUE O IMPORT FUNCIONE, A FUNÇÃO QUADRADO DEVE SER EXPORTADA NO ARQUIVO QUADRADO.JS USANDO A PALAVRA-CHAVE EXPORT, COMO FOI FEITO NO ARQUIVO QUADRADO.JS. DESSA FORMA, A FUNÇÃO FICA DISPONÍVEL PARA SER IMPORTADA E USADA EM OUTROS MÓDULOS. AS DEMAIS FUNÇÕES NÃO PRECISAM SER EXPORTADAS, POIS SÃO PROPRIEDADES DO OBJETO QUADRADO, QUE É O QUE ESTÁ SENDO EXPORTADO COMO DEFAULT.

console.log(quadrado.areaQuadrado(4));
console.log(quadrado.perimetroQuadrado(4));

// TEM OUTRA FORMA DE IMPORT
import { areaQuadrado, perimetroQuadrado } from './quadrado.js'; // ALÉM DE IMPORTAR O OBJETO QUADRADO, VOCÊ TAMBÉM PODE IMPORTAR AS FUNÇÕES ESPECÍFICAS DIRETAMENTE, USANDO A SINTAXE DE DESESTRUTURAÇÃO. NESTE EXEMPLO, AS FUNÇÕES AREAQUADRADO E PERIMETROQUADRADO SÃO IMPORTADAS DIRETAMENTE DO ARQUIVO QUADRADO.JS, PERMITINDO QUE SEJAM USADAS SEM PRECISAR REFERENCIAR O OBJETO QUADRADO.

// PARA FUNCIONAR ESSA FORMA DE IMPORTAÇÃO, AS FUNÇÕES DEVEM SER EXPORTADAS COM A PALAVRA-CHAVE EXPORT ANTES DE SUA DECLARAÇÃO, COMO FOI FEITO NO ARQUIVO QUADRADO.JS. DESSA FORMA, VOCÊ PODE IMPORTAR AS FUNÇÕES ESPECÍFICAS QUE PRECISA, EM VEZ DE IMPORTAR O OBJETO INTEIRO.

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(4));


import numeroAleatorio from './numeroAleatorio.js';

console.log(numeroAleatorio());
// RESULTADO: UM NÚMERO ALEATÓRIO ENTRE 0 E 1, GERADO PELA FUNÇÃO NUMEROALEATORIO IMPORTADA DO ARQUIVO NUMEROALEATORIO.JS. CADA VEZ QUE VOCÊ EXECUTAR O CÓDIGO, O RESULTADO SERÁ DIFERENTE, POIS A FUNÇÃO NUMEROALEATORIO GERA UM NÚMERO ALEATÓRIO A CADA CHAMADA.

////////////////////////////////////////////////////////////////////////////////////////////////////

// fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
// .then((response) => response.json())
// .then((json) => {
//     console.log(json);
// });

// async function fetchProdutos(url) {
//     const response = await fetch(url);
//     const json = await response.json();
//     return json;
// }

// const produtos = await fetchProdutos('https://ranekapi.origamid.dev/wp-json/api/produto');

// console.log(produtos);

////////////////////////////////////////////////////////////////////////////////////////////////////

const precos = [
    'Crédito',
    'R$ 200',
    'R$ 400',
    'CONTAS A PAGAR',
    'R$ 300',
    'R$ 400',
    'MEUS DADOS'
];

// const precosFiltro = precos.filter(function(preco) {
//     return preco.includes('R$');
// });

// const precosFiltro = precos.filter( (preco) => {
//     return preco.includes('R$');
// });

const precosFiltro = precos.filter( (preco) => preco.includes('R$')); // O MÉTODO FILTER É USADO PARA CRIAR UM NOVO ARRAY COM TODOS OS ELEMENTOS QUE PASSAM EM UM TESTE IMPLEMENTADO POR UMA FUNÇÃO. NESTE EXEMPLO, O MÉTODO FILTER É USADO PARA FILTRAR O ARRAY PREÇOS, RETORNANDO APENAS OS ELEMENTOS QUE INCLUEM A STRING 'R$'. A FUNÇÃO DE CALLBACK PASSADA PARA O MÉTODO FILTER VERIFICA SE CADA ELEMENTO DO ARRAY INCLUI A STRING 'R$', E SE SIM, ELE É INCLUÍDO NO NOVO ARRAY PREÇOSFILTRO.
console.log(precosFiltro);

const precosNumeros = precosFiltro.map( (preco) => Number(preco.replace('R$ ', '')) ); // O MÉTODO MAP É USADO PARA CRIAR UM NOVO ARRAY COM OS RESULTADOS DA CHAMADA DE UMA FUNÇÃO PARA CADA ELEMENTO DO ARRAY ORIGINAL. NESTE EXEMPLO, O MÉTODO MAP É USADO PARA TRANSFORMAR O ARRAY PREÇOSFILTRO, QUE CONTÉM STRINGS COM O FORMATO 'R$ VALOR', EM UM NOVO ARRAY PREÇOSNUMEROS, QUE CONTÉM APENAS OS VALORES NUMÉRICOS. A FUNÇÃO DE CALLBACK PASSADA PARA O MÉTODO MAP USA O MÉTODO REPLACE PARA REMOVER A STRING 'R$ ' DE CADA ELEMENTO DO ARRAY PREÇOSFILTRO, E ENTÃO USA A FUNÇÃO NUMBER PARA CONVERTER A STRING RESULTANTE EM UM NÚMERO.
console.log(precosNumeros);

////////////////////////////////////////////////////////////////////////////////////////////////////

const active = true;
const button = active && 'Botão ativo'; // O OPERADOR LÓGICO AND (&&) PODE SER USADO PARA ATRIBUIR UM VALOR A UMA VARIÁVEL COM BASE EM UMA CONDIÇÃO. NESTE EXEMPLO, A VARIÁVEL BUTTON RECEBE O VALOR 'Botão ativo' SE A VARIÁVEL ACTIVE FOR VERDADEIRA. SE ACTIVE FOR FALSA, BUTTON RECEBERÁ O VALOR FALSE. ESSA É UMA FORMA SIMPLES DE ATRIBUIR UM VALOR CONDICIONALMENTE, SEM PRECISAR USAR UMA ESTRUTURA IF.