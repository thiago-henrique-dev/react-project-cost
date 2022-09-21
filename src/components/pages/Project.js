import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'

function Project(){
    let { id } = useParams()
    const [project, setProject] = useState([])
    const [ showProjectForm, setShowProjectForm] = useState(false)
    const [ showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()


    useEffect(() => {
        // Para ver o loading
        setTimeout(
          () =>
            fetch(`http://localhost:5000/projects/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((resp) => resp.json())
              .then((data) => {
                setProject(data)
       
              }),
          2000,
        )
      }, [id])

      function editPost(project){
        //budget validation
        if(project.budget < project.cost){
            //msg
            setMessage('Orçamento não pode ser menor que o custo do projeto')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado')
            setType('success')

        }).catch(err => console.log(err))
      }
    

      function toggleProjectForm(){
            setShowProjectForm(!showProjectForm)
      }

      function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
  }

    return (
        <>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message}/>}
                    <div className={styles.details_container}>
                        <h1>Projeto: {project.name}</h1>
                
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria:</span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total de orçamento:</span> R${project.budget}
                                </p>
                                <p>
                                    <span>Total de Utilizado:</span> R${project.cost}
                                </p>
                                <button className={styles.btn}onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar projeto' : 'Fechar Projeto'}
                        </button>
                            </div>
                        ) : (
                            <div assName={styles.project_info}>
                                <ProjectForm handleSubmit={editPost}  
                                         btnText="Concluir edição" projectData={project}/>
                            </div>
                        )}
                    </div>
                    <div className={styles.service_form_container}>
                            <h2>Adicione um serviço</h2>
                            <button className={styles.btn}onClick={toggleServiceForm}>
                            {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm && (<div>Formulario</div>)}
                        </div>
                    </div>
                    <h2>Serviços</h2>
                    <Container customClass="start">
                        <p>Itens de serviço</p>
                    </Container>
                </Container> 
            </div>
            
        ) : (
            <Loading/>
        )}
        </>
    )
}

export default Project