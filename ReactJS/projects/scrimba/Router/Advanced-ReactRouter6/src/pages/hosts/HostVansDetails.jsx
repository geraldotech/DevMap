import React, { useEffect, useState } from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'
import { getHostVans } from '../../api'

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState({})
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const { id } = useParams()

  const activeStyles = {
    color: '#161616',
    fontWeight: 'bold',
    textDecoration: 'underline',
  }

  /* useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((req) => req.json())
      .then((data) => setCurrentVan(data.vans))
  }, [])

  if (!currentVan) {
    return <h1>Loading...</h1>
  } */

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getHostVans(id)
        setCurrentVan(data)
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

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>{currentVan.type}</i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink to="." end style={({ isActive }) => (isActive ? activeStyles : null)}>
            Details
          </NavLink>
          <NavLink to="pricing" style={({ isActive }) => (isActive ? activeStyles : null)}>
            Pricing
          </NavLink>
          <NavLink to="photos" style={({ isActive }) => (isActive ? activeStyles : null)}>
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </section>
  )
}
