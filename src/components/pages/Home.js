
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Cost</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"></LinkButton>
            <img src={savings} alt="Cost"></img>

        </section>
    )
}

export default Home