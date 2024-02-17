import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { BsStarFill } from 'react-icons/bs'

const Dashboard = () => {
  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2.260</h2>
        </div>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Reviews score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
      </section>

      {/*  <Outlet /> */}
    </>
  )
}

export default Dashboard
