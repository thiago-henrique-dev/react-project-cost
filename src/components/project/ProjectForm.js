function ProjectForm() {
  return (
    <form>
      <div>
        <input text="text" placeholder="Insira seu nome do projeto" />
      </div>
      <div>
        <input type="number" placeholder="Insira o orçamento total" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>Selecione a categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar projeto"></input>
      </div>
    </form>
  );
}

export default ProjectForm;
