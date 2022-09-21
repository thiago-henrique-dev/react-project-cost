import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Project(){
    let { id } = useParams()
    const [project, setProject] = useState([])
    const [ showProjectForm, setProjectForm] = useState(false)


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

      function toggleProjectForm(){
            setProjectForm(!showProjectForm)
      }

    return (
        <>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass="Column">
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
                                <p>Detalhes do projeto</p>
                            </div>
                            
                        )}
                    </div>
                </Container>
            </div>
            
        ) : (
            <Loading/>
        )}
        </>
    )
}

export default Project