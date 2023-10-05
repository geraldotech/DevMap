import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from '../project/ProjectCard.module.css' //importando styles do outro form

function ServiceForm({ handleSubmit, btnText, projectData }) {
  //state service array
  const [service, setService] = useState({})

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  function submit(e) {
    e.preventDefault()
    projectData.services.push(service) // push infos
    handleSubmit(projectData)
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handlerOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handlerOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descricao do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handlerOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ServiceForm
