import { useParams } from 'react-router-dom'
import posts from '../api/db.json'
import { useEffect, useState } from 'react'
import styles from './template.module.css'

const Template = () => {
  const { slug } = useParams()

  const [single, setSingle] = useState([])

  useEffect(() => {
    const find = posts.find((val) => val.slug == slug)
    setSingle(find)
  }, [])

  return (
    <div>
      {/*   {<p>{JSON.stringify(single)}</p>} */}
      <article className={styles.template}>
        <h1>{single.title}</h1>
        <p>{single.body}</p>
      </article>
    </div>
  )
}

export default Template
