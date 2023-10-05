//importar o Hook
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'

import styles from './Projects.module.css'

function Projects() {
  //state para salvar os projetos
  const [projects, setProjects] = useState([])

  //state para alterar o estado de exibição // comeca nao exibindo
  const [removeLoading, setRemoveLoading] = useState(false)

  // cadastrar state de mensagem
  const [projectMessage, setProjectMessage] = useState('')

  const location = useLocation()
  let message = ''
  //  se tiver alguma coisa no location.state
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      //hackzinho para ver o loading por mais tempo, por se tratar de um fetch local, o memso é carregado instataneamente
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(`useEffect`, data)
          setProjects(data)
          setRemoveLoading(true) // when loaded set as true
        })
        .catch((err) => console.log(err))
    }, 300)
  }, [])

  //remover

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id))
        //message useState define a message
        setProjectMessage('Projeto removido com sucesso')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meu Projetos</h1>
        <LinkButton to="/newprojects" text="Criar Projeto" />
      </div>
      {
        //se tiver mensagem entao
        message && <Message msg={message} type="success" />
      }
      {
        //se tiver mensagem entao
        projectMessage && <Message msg={projectMessage} type="success" />
      }
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              key={project.id}
              budge={project.budget}
              id={project.id}
              category={project.category.name}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  )
}
export default Projects

// Projectcard poderia passar o object inteirio e tratar as informacoes no component  ProjectCard fica a escolha do programador
// https://youtu.be/bTIncEaBvEY?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&t=473
