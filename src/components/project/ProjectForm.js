import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm( { btnText }) {
  return (
    <form className={styles.form_control}>
        <Input 
              type="text" 
              text="Nome do projeto"
              name="name" 
              placeholder="Insira o nome do projeto"/>
        <Input
              type="number" 
              text="Orçamento do projeto"
              name="name" 
              placeholder="Insira o nome do projeto"/>
    
     <Select 
            name="category_id" 
            text="Selecione a categoria"/>
      <SubmitButton text={btnText}/>
    </form>
  );
}

export default ProjectForm;
