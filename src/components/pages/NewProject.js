import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import { useNavigate  } from 'react-router-dom'

function NewProject(){
    const navigate = useNavigate()

    function createPost(project){
        project.cost = 0
        project.service = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
          })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })

            })
        }


    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Preencha o formulario</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject