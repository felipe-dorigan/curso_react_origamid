# Curso React - Plano de Estudos

Este repositório reúne meus estudos do curso de React, organizados por módulos.

## Status Geral

- Progresso atual: **3 módulos concluídos**
- Módulo atual: **Módulo 4 — Formulários** (iniciado)
- Aula atual: **0401 — Input**

## Módulos

### ✅ Módulo 1 — Recapitulando JavaScript

Resumo do módulo:

- Revisão de fundamentos modernos de JavaScript (desestruturação, rest/spread e módulos ES6)
- Prática com manipulação de dados usando métodos de array (`map`, `filter`)
- Base para integração com APIs usando Promises, `fetch` e `async/await`

---

### ✅ Módulo 2 — React para Iniciantes

Introdução ao funcionamento do React de forma prática, sem ferramentas de build, diretamente no navegador.

Resumo do módulo:

- Fundamentos de React: JSX, componentes, props, eventos e estado com `useState`
- Estruturação de interfaces por composição de componentes reutilizáveis
- Renderização dinâmica com listas, condicionais e manipulação de dados
- Evolução de ambiente: CDN/Babel para projetos com Vite e organização em estrutura moderna

---

### ✅ Módulo 3 — React Hooks

Resumo do módulo:

- Uso de `useState` para controlar interface, listas e fluxo de interação
- Uso de `useEffect` para efeitos colaterais, consumo de API, dependências e cleanup
- Persistência de preferências com `localStorage` integrada ao ciclo de vida dos componentes
- Uso de `useRef` para foco em inputs e controle de timeout sem re-render
- Introdução a otimização de performance com `useCallback` e `useMemo`
- Compartilhamento de estado global com `React.createContext`, `Provider` e `useContext`
- Criação de custom hooks para reutilizar lógica de estado, efeitos, `localStorage` e requisições HTTP
- Reforço das regras dos hooks: chamar hooks no topo do componente ou de outros hooks, sem condicionais ou loops

Principais aulas registradas:

- `0305-usecontext1`: criação de contexto global para compartilhar estado e funções entre componentes
- `0305-usecontext2`: contexto consumindo API, disponibilizando dados e função para limpar o estado global
- `0306-customhooks1`: extração da lógica de persistência para o hook `useLocalStorage`
- `0306-customhooks2`: combinação de `useLocalStorage` com `useFetch` para centralizar loading, erro, dados e request
- `0307-regras`: prática das regras de chamada dos hooks e criação de um hook customizado simples

---

### 🔄 Módulo 4 — Formulários (em andamento)

Resumo do módulo:

- Início do estudo de formulários em React com inputs controlados
- Controle de múltiplos campos em um único objeto de estado com `useState`
- Atualização dinâmica de propriedades do estado usando o `id` do input e propriedade computada (`[id]`)
- Uso de `value` e `onChange` para manter o estado do React como fonte da verdade
- Uso de `event.preventDefault()` para controlar o envio do formulário sem recarregar a página

Principais aulas registradas:

- `0401-input1`: formulário com campos `nome` e `email`, atualização genérica via `handleChange` e submit controlado

---

## Próximos passos

- [x] Concluir Módulo 3 (React Hooks)
- [x] Iniciar Módulo 4 (Formulários)
- [ ] Continuar aulas de formulários
- [ ] Atualizar este README ao final de cada conjunto de aulas
