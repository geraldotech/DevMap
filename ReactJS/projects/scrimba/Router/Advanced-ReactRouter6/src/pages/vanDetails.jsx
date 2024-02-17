import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { getVans } from '../api'

export default function VanDetail() {
  const [van, setVan] = useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const { id } = useParams()

  const location = useLocation()
  // console.log(location)
  // console.log(location.state.search)

  /*   useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
  }, []) */

  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans(id)
        setVan(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  const search = location.state?.search || ''
  const currentVanType = location.state?.currentType || 'all'

  return (
    <div className="van-detail-container">
      <Link to={`..?${search}`} relative="path" className="back-button">
        &larr; <span>Back to {currentVanType} vans</span>
      </Link>

      {van && (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      )}
    </div>
  )
}
