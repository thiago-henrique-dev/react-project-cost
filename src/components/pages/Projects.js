import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Project.module.css'
import Message from '../layout/Message'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

function Projects(){

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {

            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(resp => resp.json())
            .then(data => {
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 1000)
    },[])

    const location = useLocation()
    let message = ''
    if (location.state) {
    message = location.state.message
  }

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar projeto"/>
            </div>

            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 && 
                projects.map((project) => 
                    <ProjectCard 
                    id={project.id}
                    name={project.name}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}

                   
                        />
                )}
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0
                    (
                        <p>Não há projetos cadastrados!</p>
                    )
                }
            </Container>
        </div>
    )
}

export default Projects