# React + Vite

## MPA vs SPA

## MirageJS Server

instalei como `npm i miragejs` sem `-D dev` - foi instalado como dependencia de production
Efetuado o deploy do build no netlify em https://react-miragejs-server.netlify.app/ e works nice!

### useEffect()

fez uma const que recebera o div com map e depois call this const no return

# React Router Advanced

## Route Params

Create a <Link> to `/vans/:id` and Create a `VansDetails.jsx` and
Using <Link> in map wrapper the content of card

check Van.jsx

#### Multi params

Check **App.jsx**

`<Route path="path="/vans/:id/:type"element={<VanDetail} />` == http://localhost:5173/vans/1/gera returns a `{id: '1', type: 'gera'}`

## useParams()

check `VanDetails.jsx`

const params = useParams() - params.id or destructuring
const { id } = useParams()

## Nested Routers - Router Parent - Rota Pai

```js
/*  Challenge:
          1. Turn the "/host" path into a parent route and nest
          "/host/income" and "/host/reviews" as children routes.
          Then try entering "/host/income" in the URL and see what
          happens.

          2. See if you can figure out why it did what it did. */

<Route path="/host" element={<Dashboard />}>
  <Route path="/host/income" element={<Income />} />
  <Route path="/host/reviews" element={<Reviews />} />
</Route>

// basicamente o Route de Dashboard wrapper todos os outros outros, e dentro de Dashboard import o OutLet, Dash bordes now works like a Layout
```

## Relative Pachs / Relative Routes

```js

// BEFORE ***
<BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Route Params */}
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VanDetail />} />
      {/* Outlet Dashboard */}
      <Route path="/host" element={<HostLayout />}>
        <Route path="/host" element={<Dashboard />} />
        <Route path="/host/income" element={<Income />} />
        <Route path="/host/reviews" element={<Reviews />} />
      </Route>{' '}
    </Route>
  </Routes>
</BrowserRouter>

// AFTER ***

<BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* Route Params */}
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            {/* Outlet Dashboard */}
            <Route path="host" element={<HostLayout />}>
              <Route path="/host" element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>{' '}
            {/*  Outlet Dashboard */}
          </Route>
       </Routes>
</BrowserRouter>
```

Em `/host` works but de acordo com a documentation o correto replace path to index

https://reactrouter.com/en/main/start/concepts#index-routes

`<Route index element={<Dashboard />} />`
O mesmo foi aplicado para o Layout seguindo https://reactrouter.com/en/main/start/concepts#layout-routes

Criando uma nested router

```js

//  BEFORE ***
  <Route path="vans" element={<Vans />} />
  <Route path="vans/:id" element={<VanDetail />} />


// AFTER ***
  <Route path="vans" element={<VanPages />}>
    <Route index element={<Vans />} />
    <Route path=":id" element={<VanDetail />} />
  </Route>

```

- isActive - change `Link` to `NavLink`
- https://reactrouter.com/en/main/components/nav-link
- check NavLink project

```css
/* by default looks a active class for all `NavLink` */
a.active {
  color: #e17654;
}
```

Resolver bug do active routers adicionar attribute `end` the ends matches:
https://reactrouter.com/en/main/components/nav-link#end

```js
create the obj styles
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


<NavLink style={({ isActive }) => (isActive ? activeStyles : null)} to="/host" end>
  Dashboard
</NavLink>
```

Changes in `HostLayout.jsx`

```js
// /host/income, /host/vans/ /host/reviews
`to="/host/income">`  to relative   `to="income">`


// relative links com isso se mudar o path="host" do parent, ele vai saber automaticamente, é como cd . do diretorio.

to="/host" end> to  `<NavLink  to="." end>`
```

Changes in `HostVansDetails`

```js
👉I find out that `../vans`

`<Link to="../vans"> &larr;  </Link>` works, but no video foi criado outra rota pai em App.jsx
****
`<Route path="vans" element={<Outlet />}>
    <Route index element={<HostVans />} />
    <Route path=":id" element={<HostVansDetails />} />
</Route>`
***
👉sendo assim apenas esses dois pontos works  `<Link to=".."`

👉depois ele falou que era a lot of work e desfez tudo =/

Adicionar o `relative`  <Link to=".." relative="path" com isso fiz que deseja voltar uma rota em nivel de path e nao hierarquia[not parent]
```

inline Hum teste quick render em routers:

`<Route index element={<><h2>Detailed info goes here</h2> <p>ReactJS</p></>}/>`
`<Route path="protected" element={<h1>Super secret info here</h1>} />`

## Outlet context

https://reactrouter.com/en/main/hooks/use-outlet-context

checkout `HostVansDetauls.jsx`

## Query Params

https://reactrouter.com/en/main/hooks/use-search-params

- [ ] <mark>key/value pairs in the URL</mark>
- [x] Begins with `?` => `/vans?type=rugged`
- [] Separated by `&` => `/vans?type=rugged&filterBy=price`

- check `useSeachParams` project and Vans page

- SEARCH PARAMS SETTER FUNCTION ? - check `useSeachParams` project

## Navigate {redirect}

https://stackabuse.com/redirects-in-react-router/
checkout `useSeachParams` and `ProtectedRouters` projects

    /**
     * Mini-challenge: change the absolute path in the Link below
     * to a relative path. There's also one still in the **HostVans.jsx**
     * file that you should change, too.
     */

`<Link to={`/vans/${van.id}`}>` to `<Link to={van.id}>` pq o component já estava living inside parent

## Link State - useLocation()

state do searchParams no `Link` a ser usado no back button `<Link to={van.id} state={{ search: searchParams.toString() }}>`

https://reactrouter.com/en/main/hooks/use-location

check `vans.jsx` 'parent' and `vanDetails.jsx` 'children' receive a object and seja o e dentro de state tem outro objeto `search...`

```js
{pathname: '/vans/6', search: '', hash: '', state: {…}, key: 'k21r0ncw'} hash : "" key : "k21r0ncw" pathname : "/vans/6" search : "" state : search : "type=rugged"
```

clique em voltar e veja que os valore do objeto permanece

Now no children com useLocation() na url fazer um get `vans/6?nome=Geraldo`, recebera um objeto dessa vez em `search ...` e state `null`

`{pathname: '/vans/6', search: '?nome=Geraldo', hash: '', state: null, key: 'default'} hash : "" key : "default" pathname : "/vans/`

- Setando buttons
  - manual test: `<Link to="..?type=simple"`
  - Programaticamente

## 404 page

just add a new route: `<Route path="*" element={<h1>Page Not found!</h1>} />`

- ## Loading state
  prevenir erros caso a api nao seja carregada, foi adicinado try, throw, catch e state loading e error checkout vans.jsx

# Protected Routers

> check Login, AuthRequired, Header

Purpose: stop data fechting of sensitive information, only allow logged-in users to access their data

Approach: If use isn't logged in, stop data fetching by blocking componentes from rendering and send to the Login page. Since fetching is happening inside the components, if those components never render, the fetching never happens.

- localStorage

https://reactrouter.com/en/main/hooks/use-navigate

# History stack

resolver se caso voltar uma página ter que fazer login novamente, add a replace: ` navigate('/host', { replace: true })` e em `<Navigate to="/login" state={{ message: 'You must log in first' }} replace />`

## send user to original Page

- eg: http://localhost:5173/host/income redirecto to login page so redirecto back to original were trying to go

#### helpful resources

- https://github.com/remix-run/react-router/blob/dev/examples/auth/src/App.tsx#L130
- https://reactrouter.com/en/main/hooks/use-location#uselocation
