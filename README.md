# Curso React - Plano de Estudos

Este repositório reúne meus estudos do curso de React, organizados por módulos.

## Status Geral

- Progresso atual: **4 módulos concluídos**
- Módulo atual: **Módulo 4 — Formulários** (concluído)
- Aula atual: **0412 — Desafio Formulários**

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

### ✅ Módulo 4 — Formulários

Resumo do módulo:

- Inputs, textareas, selects, radios e checkboxes controlados com `useState`
- Gestão de formulário com estado único e também com estados separados por campo
- Componentização de campos reutilizáveis (`Input`, `Select`, `Radio`, `Checkbox`)
- Validação de dados com regex e exibição de mensagens de erro por campo
- Extração da lógica de formulário para custom hook `useForm`
- Construção de desafio final com fluxo de perguntas, controle de respostas e resultado

Principais aulas registradas:

- `0401-input1`: formulário com campos `nome` e `email`, atualização genérica via `handleChange` e submit controlado
- `0401-input2`: variação de input controlado com organização alternativa do estado e do `onChange`
- `0402-textarea`: controle de textarea com `value`/`onChange` mantendo sincronismo com estado
- `0403-select`: select controlado com opção inicial desabilitada e atualização por evento
- `0404-radio`: grupos de radio controlados com comparação via `checked`
- `0405-checkbox1`: checkbox múltiplo com inclusão/remoção de itens em array
- `0405-checkbox2`: renderização dinâmica de checkboxes via `map` e estado em lista
- `0406-componentes-input`: criação de componente `Input` reutilizável com props
- `0407-componentes-select`: criação de componente `Select` reutilizável com lista de opções
- `0408-componentes-radio`: criação de componente `Radio` reutilizável para diferentes grupos
- `0409-componentes-checkbox`: criação de componente `Checkbox` reutilizável para seleção múltipla
- `0410-validacao`: validação de CEP com regex, `onBlur`, `onChange` e feedback de erro
- `0411-useform`: uso de custom hook `useForm` para centralizar valor, validação e erro
- `0412-desafio-formularios`: quiz com navegação entre perguntas e cálculo de acertos

---

## Próximos passos

- [x] Concluir Módulo 3 (React Hooks)
- [x] Iniciar Módulo 4 (Formulários)
- [x] Concluir Módulo 4 (Formulários)
- [ ] Iniciar próximo módulo do curso
- [ ] Atualizar este README ao final de cada conjunto de aulas
