import { Link } from "react-router-dom"
import styles from '/src/routes/blog.module.css'
export default function Card({to, slug}){
  return (
   <div className={styles.links}>
     <Link to={to}>{slug}</Link>
   </div>
  )
}