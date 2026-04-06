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

---

## Próximos passos

- [ ] Concluir Módulo 2
- [ ] Iniciar Módulo 3
- [ ] Atualizar este README ao final de cada módulo
