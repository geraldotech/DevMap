import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route, Link, NavLink, useSearchParams, useParams, Navigate } from 'react-router-dom'

const swCharacters = [
  { name: 'Luke Skywalker', type: 'Jedi' },
  {
    name: 'Darth Vader',
    type: 'Sith',
    image:
      'https://imgs.search.brave.com/VwW_-m3QI5t6jR34IJr1jWBuC6VdoTKG4jOuumGWp1U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2NmL0Rh/cnRoX1ZhZGVyX211/cmFsX2J5X1BpZWtz/YV9pbl9LcmFrJUMz/JUIzdyUyQ18yMDIx/MDUzMF8xNzQ0XzMz/NTVfRHhPLmpwZy81/MTJweC1EYXJ0aF9W/YWRlcl9tdXJhbF9i/eV9QaWVrc2FfaW5f/S3JhayVDMyVCM3cl/MkNfMjAyMTA1MzBf/MTc0NF8zMzU1X0R4/Ty5qcGc',
  },
  {
    name: 'Emperor Palpatine',
    type: 'Sith',
    image:
      'https://imgs.search.brave.com/YciwDkq84tjTBLmj5ZiA08QwAWIFJaNuHUAmv5NzRaM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvcHQvdGh1bWIv/OC84Zi9FbXBlcm9y/X1JvdEoucG5nLzUx/MnB4LUVtcGVyb3Jf/Um90Si5wbmc',
  },
  { name: 'Yoda', type: 'Jedi' },
]

function HomePage() {
  const [setsearchParams, setSearchParams] = useSearchParams()
  const typeFilter = setsearchParams.get('type')

  console.log(setsearchParams.get('type')) // try http://localhost:5174/characters?type=gege
  console.log(setsearchParams.toString()) // 'type=Sith'
  // ou try & http://localhost:5174/characters?type=Sith&scrimba=awesome

  /* 
👉 tem params: filter content || return all content and map will handle this content
*/
  const renderContent = typeFilter ? swCharacters.filter((char) => char.type.toLocaleLowerCase() === typeFilter.toLocaleLowerCase()) : swCharacters

  // map will render output
  const charEls = renderContent.map((char) => (
    <div key={char.name}>
      <h3 style={{ color: char.type.toLowerCase() === 'jedi' ? 'blue' : 'red' }}>Name: {char.name}</h3>
      <p>Type: {char.type}</p>
      <img src={char.image} />
      <hr />
    </div>
  ))

  function applyStlyesClass(nomeClass) {
    if (typeFilter) {
      return typeFilter.toLowerCase().includes(nomeClass) ? 'active' : null
    }
  }

  function handleFilterChange(newType) {}

  return (
    <main>
      <h2>React useSearchParams() v1, v2, v3 ways</h2>
      <nav>
        <Link to="/characters" className={location.search == '' ? 'active' : null}>
          All characters
        </Link>
        <Link to="">Clear</Link>
        <Link to=".">Clear</Link>
        <Link to="?type=sith" className={applyStlyesClass('sith')}>
          Sith
        </Link>
        <Link to="?type=jedi" className={applyStlyesClass('jedi')}>
          Jedi
        </Link>

        <br />

        {/* SEARCH PARAMS SETTER FUNCTION v1 */}

        {/*  <button onClick={() => setSearchParams('type=jedi')}>Jedi</button>
        <button onClick={() => setSearchParams('type=Sith')}>Sith</button>
        <button onClick={() => setSearchParams('')}>Clear</button> */}

        {/* and V2 pass a obj  */}
        <button onClick={() => setSearchParams({ type: 'jedi' })}>Jedi</button>
        <button onClick={() => setSearchParams({ type: 'Sith' })}>Sith</button>
        <button onClick={() => setSearchParams({})}>Clear</button>
      </nav>

      {charEls}
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<HomePage />} />
        {/* Navigate is a redirect / to /characters */}
        <Route path="/" element={<Navigate to="/characters" />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
