import { useNavigate } from 'react-router-dom'

//  useHistory now is  useNavigate
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function Newproject() {
  const navigate = useNavigate()

  function createPost(project) {
    // console.log(`createPost`, project)
    // initialize const and services

    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        navigate('/projects', {
          state: { message: 'Projeto criado com sucesso!' },
        })
      })
    //.catch((err) => console.log(err))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>New Project</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}
export default Newproject
