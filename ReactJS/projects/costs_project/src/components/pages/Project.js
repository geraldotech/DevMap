import { parse, v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Project.module.css'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function Project() {
  //get o id que esta vindo da url
  let { id } = useParams()
  // console.log(`projectFun`, id)

  const [project, setProject] = useState([])

  // por padrao nao exibir o form by default
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)

  // states para mensagens
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  const [services, setServices] = useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProject(data)
          setServices(data.services) // services get only the data.services
        })
        .catch((err) => console.log(err)) // catch para pegar eventual erro
    }, 300)
  }, [id]) // monitorando o ID do projeto

  //editpost
  function editPost(project) {
    setMessage('') // volta a ser vazio para voltar a mostrar a msn
    // budget validation

    if (project.budget < project.cost) {
      setMessage('O orçamento não pode ser menor que o custo do projeto')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data) // atualiza projeto
        setShowProjectForm(false) // hide form after edicao
        // message
        setMessage('Projeto atualizado')
        setType('success')
      })
      .catch((err) => console.log(err))
  }

  function createService(project) {
    console.log(project)
    setMessage('') // clean input message
    // last serice

    const lastService = project.services[project.services.length - 1]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
    console.log(`newCost`, parseInt(newCost))
    // maximum value validation

    if (newCost > parseFloat(project.budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço')
      setType('error')
      project.services.pop() // remover o servico do obj, para que no prox nao entre junto com valor antigo
      return false //retorna falso para acabar a execucao
    }

    // add service cost to project total const
    project.cost = newCost

    // update project
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => {
        res.json()
      })
      .then((data) => {
        // exibir setvices
        console.log(data)
        setShowServiceForm(false) // adicionar info e fecha o form
      })
      .catch((err) => console.log(err))
  }

  function removeService(id, cost) {
    const servicesUpdate = project.services.filter(
      (service) => service.id !== id
    )

    const projectUpdated = project

    projectUpdated.services = servicesUpdate
    project.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PATCH', // emenda, correcao
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectUpdated),
    })
      .catch((res) => res.json())
      .then((data) => {
        console.log(data)
        setProject(projectUpdated)
        setServices(servicesUpdate)
        setMessage('Serviço removido com sucesso!')
      })
      .catch((err) => console.log(err))
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }
  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria: </span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de orçamento: </span> R$ {project.budget}
                  </p>
                  <p>
                    <span>Total de Utilizado: </span> R$ {project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <p>form</p>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione serviço:</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
              </button>

              <div className={styles.project_info}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar Serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>Serviços:</h2>
            <Container customClass="start">
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length == 0 && <p>Não há serviços cadastrados</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project

// para visualizar todas as propriedades do obj usar JSON.stringify(project)
