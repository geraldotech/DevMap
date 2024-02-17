import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../api'

export default function vans() {
  const [vans, setVans] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(`vans.jsx`, searchParams.toString())

  const typeFilter = searchParams.get('type')
  //console.warn(typeFilter)

  useEffect(() => {
    /*   fetch('/api/vans')
      .then((req) => req.json())
      .then((data) => setVans(data.vans)) */

    async function loadVans() {
      const data = await getVans()
      setVans(data)
    }

    loadVans()
  }, [])

  const RenderVans = typeFilter ? vans.filter((val) => val.type.toLowerCase() === typeFilter.toLowerCase()) : vans

  const vanElements = RenderVans.map((van) => (
    <div key={van.id} className="van-title">
      <Link to={van.id} state={{ search: searchParams.toString(), currentType: typeFilter }}>
        {/* v2  <Link 
                to={van.id} 
                state={{ search: `?${searchParams.toString()}` }}
            > */}
        <img src={van.imageUrl} />
        <div className="van-info">
          <h2>{van.name}</h2>
          <p>
            ${van.price} <span>/days</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  return (
    <div className="van-list-container">
      <h1>Explorer our van options</h1>
      <div className="van-list-filter-buttons">
        {/*   <Link className="van-type simple" to="?type=simple">
          simple
        </Link>
        <Link className="van-type luxury" to="?type=luxury">
          luxury
        </Link>
        <Link className="van-type rugged" to="?type=rugged">
          rugged
        </Link>
        <Link to="." className="van-type clear-filters">
          Clear Filter
        </Link>
        <button className="van-type rugged" onClick={() => setSearchParams({ type: 'rugged' })}>
          Rugged
        </button> */}
        <button onClick={() => handleFilterChange('type', 'simple')} className={`van-type simple ${typeFilter === 'simple' && 'selected'}`}>
          Simple
        </button>
        <button onClick={() => handleFilterChange('type', 'luxury')} className={`van-type luxury ${typeFilter === 'luxury' && 'selected'}`}>
          Luxury
        </button>
        <button onClick={() => handleFilterChange('type', 'rugged')} className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : null}`}>
          Rugged
        </button>

        {typeFilter && (
          <button onClick={() => handleFilterChange('type', null)} className="van-type clear-filters">
            Clear filter
          </button>
        )}
      </div>

      <div className="van-list">{vanElements}</div>
    </div>
  )
}
