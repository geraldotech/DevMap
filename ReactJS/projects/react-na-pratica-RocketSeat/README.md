# React + TypeScript + Vite

`npm i tailwindcss postcss autoprefixer -D`

- Setup TailwindCSS

  - `npx tailwindcss init -p` - cria o postcss.config obrigatorio ter para funcionar corretametamente com vite... https://tailwindcss.com/docs/installation/using-postcss checkout this file

  - go to `tailwind.config.js` e adicionar o content - checkout

- Font padrão?
  adicionar link da font ao html

- body with default styles? checkout index.html

- Now go to index.css e use as 3 linhas que está no arquivo para o tailwind funcionar,
- restart vite server

# lucide-react

> instlal this lib

- `npm i lucide-react`

`pasta components` tem dependencias:

- `npm i tailwind-variants tailwind-merge`

Otimas dica. Array.from. lenght in App.tsx

- npm -i json-server -D

# React Query

> é totalmente swr

A forma que ele faz para consumir api é usando `npm i @tanstack/react-query`

- check main.tsx

Usando isLoading dessa lib similar como foi feito no VansLife by Scrimba, enquando estiver carregando podemos mostrar algo na tela

Very good, sem usar o useEffect para monitorar quando a pagina mudou,

React.Query faz um cache das requisições, foi testando ao adicionar um delay de 2s e depois ao voltar a acessar o conteudo foi instataneo
cada pagina diferente gera um novo cache

por padrão faz um fetchOnFocus - ele recarrega quando volta para a tela

<hr>

# use debounce

https://usehooks-ts.com/react-hook/use-debounce

Observa quando o usuario pagou de digitar e.g: `useDebounceValue(filter, 1000)` apos 1s

Foi usado o https://transform.tools/json-to-typescript para gerar a interface para TypeScript

# React Router

ir em https://reactrouter.com/en/main/start/tutorial and
`npm install react-router-dom localforage match-sorter sort-by` quick reference main.tsx

# JSON-Server

`npm install -g json-server@0.17.4 -D

ufa bug resolvido json-server version 1.0.0-alpha.23, nao consta no package.json mais foi instaldo, adicioanar a lista

````js
      json version anterior n estava adicionando o id first, id: crypto.randomUUID().slice
      (0,4),
```

- npm run server

# Parte 2

Melhor lib para trabalhar com forms
zod para validação e transformação de dados
Mais detalhes procurar por formulários avançados Rocketseat

`npm i react-hook-form zod @hookform/resolvers`
````

Projeto da Rocketseat
https://github.com/rocketseat-education/pizzashop-web/tree/main/src/components
