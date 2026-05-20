# Curso React - Plano de Estudos

Este repositório reúne meus estudos do curso de React, organizados por módulos.

## Status Geral

- Progresso atual: **1 módulo concluído**
- Módulo atual: **Módulo 2 — React para Iniciantes** (em andamento)

## Módulos

### ✅ Módulo 1 — Recapitulando JavaScript

Tópicos estudados:

- Desestruturação de arrays e objetos
- Rest parameters (`...args`)
- Spread operator em arrays e objetos
- Módulos ES6 (`export` / `import`, default e nomeado)
- Funções de array (`filter`, `map`)
- Operadores lógicos para renderização condicional
- Introdução a Promises, `fetch` e `async/await`

---

### 🔄 Módulo 2 — React para Iniciantes (em andamento)

Introdução ao funcionamento do React de forma prática, sem ferramentas de build, diretamente no navegador.

**Configuração do ambiente:**

- Carregamento do React via CDN (`react`, `react-dom`)
- Uso do Babel Standalone para transpilar JSX no navegador (`type="text/babel"`)
- Ponto de montagem com `<div id="root">`

**Tópicos estudados até o momento:**

- Criação do root com `ReactDOM.createRoot()` e `root.render()`
- Componentes funcionais com arrow functions retornando JSX
- Sintaxe JSX — mistura de HTML com expressões JavaScript usando `{}`
- Composição de componentes (componente dentro de componente)
- Renderização dinâmica de dados dentro do JSX
- Eventos no React — `onClick` e `handleClick`
- Introdução ao `React.useState` — gerenciamento de estado básico
- Atualização de estado com `setCount` e re-renderização reativa
- Componente `App` como raiz da aplicação

**Novos estudos (ferramentas de automação):**

- Inicialização de projeto com npm (`npm init -y`)
- Instalação e uso do `esbuild` para empacotamento
- Criação de scripts no `package.json` para desenvolvimento e build
- Script `start` com `--watch` e `--servedir` para fluxo local
- Script `build` para gerar bundle final em `dist/main.js`

**Novos estudos (ferramentas front-end com Vite):**

- Inicialização de projeto React com Vite
- Estrutura padrão do projeto (`src`, `public`, `index.html`)
- Ponto de entrada com `createRoot` em `main.jsx`
- Componente `App` como módulo principal da interface
- Configuração e uso de scripts do Vite no `package.json`:
  - `npm run dev` para ambiente de desenvolvimento
  - `npm run build` para build de produção
  - `npm run preview` para pré-visualizar build localmente
- Introdução ao ESLint no projeto:
  - Arquivo de configuração dedicado
  - Regras para React e React Hooks
  - Ajustes iniciais de regras para o contexto de estudo
- Prática de renderização condicional com JSX
- Prática com arrays e `reduce` para cálculo de total de compras
- Exibição dinâmica de dados de objeto no componente

**Novos estudos (JSX com arrays):**

- Renderização de listas com `.map()` dentro do JSX
- Uso obrigatório da prop `key` em listas renderizadas
- Encadeamento de `.filter()` e `.map()` para filtrar e exibir dados
- Iteração sobre arrays aninhados (ex: lista de cores por produto)
- Aplicação de estilos inline dinâmicos via JSX (`style={{ backgroundColor: cor }}`)

**Novos estudos (eventos no React):**

- Eventos sintéticos do React: `onClick` com arrow function inline
- Acesso ao objeto `event` nos handlers de evento
- Criação de função `handleScroll` com `window.addEventListener`
- Diferença entre eventos nativos do DOM e eventos React

**Novos estudos (0211 - propriedades / props):**

- Passagem de propriedades para componentes reutilizáveis (`label`, `id`, `type`, `placeholder`)
- Uso de `children` para conteúdo interno de componentes (ex: texto do botão)
- Uso de rest/spread props em componentes (`...props`) para repasse de atributos
- Criação de componente de título customizável via props (`cor`, `texto`, `children`)
- Composição de formulário com componentes desacoplados (`Form`, `Input`, `Button`, `Titulo`)
- Passagem de arrays e leitura de props para depuração inicial com `console.log`

**Novos estudos (componentes e estrutura centralizada):**

- Criação de uma estrutura React única na raiz do repositório com Vite
- Configuração do ambiente na raiz com `react`, `react-dom`, `vite` e `@vitejs/plugin-react`
- Scripts principais no `package.json` da raiz: `dev`, `build` e `preview`
- Ponto de entrada único com `index.html`, `src/main.jsx` e `src/App.jsx`
- Importação de componentes diretamente das pastas de estudo (ex: `0210-componentes/src/Form.jsx`)
- Remoção de estruturas duplicadas de configuração React dentro das subpastas

**Fluxo atual de execução para estudo:**

- Estrutura React/Vite centralizada na raiz do repositório
- Entrada principal da aplicação em `src/index.jsx`
- Arquivos de apoio para alternar contexto entre aulas (`src/App-0210.jsx` e `src/App-0211.jsx`)
- Componente principal (`src/App.jsx`) como ponto de troca manual durante os estudos

**Comandos para iniciar um ambiente React com Vite:**

- Criar projeto na pasta atual: `npm create vite@latest . -- --template react`
- Instalar dependências após criar o projeto: `npm install`
- Iniciar ambiente de desenvolvimento: `npm run dev`
- Gerar build de produção: `npm run build`
- Visualizar localmente a build de produção: `npm run preview`

**Convenções de versionamento do ambiente React:**

- `node_modules/` fica no `.gitignore`, pois pode ser recriado com `npm install`
- `dist/` fica no `.gitignore`, pois contém apenas os arquivos gerados pelo build de produção
- `package-lock.json` deve ser versionado para manter consistência nas instalações de dependências

---

## Próximos passos

- [ ] Concluir Módulo 2
- [ ] Iniciar Módulo 3
- [ ] Atualizar este README ao final de cada módulo
