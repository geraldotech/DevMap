import React from 'react'
import { BsStarFill } from 'react-icons/bs'

export default function Exe13() {
  const reviewsData = [
    {
      rating: 5,
      name: 'Geraldo',
      date: 'February 16, 2024',
      text: 'This App is so awesome, I can find best vans',
      id: 3,
    },
    {
      rating: 4,
      name: 'Elliot',
      date: 'January 3, 2023',
      text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
      id: '1',
    },
    {
      rating: 2,
      name: 'Sandy',
      date: 'December 12, 2022',
      text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
      id: '2',
    },
  ]


  return (
    <div className="container">
      <h1>Exe13</h1>

      {reviewsData.map((review) => (
        <div key={review.id}>
          <div>
            {/*    {[...Array(review.rating)].map((_, i) => (
              <BsStarFill key={i} />
            ))} */}
            <h2>{review.rating}</h2>
            <p className="name">{review.name}</p>
            <p className="date">{review.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
