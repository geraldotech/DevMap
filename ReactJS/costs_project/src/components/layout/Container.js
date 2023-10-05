import styles from './Container.module.css'

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {
        //filhos da rota
        props.children
      }
    </div>
  )
}

export default Container

// props.children are filhos do router
// customClass é uma classe a ser definida by props
