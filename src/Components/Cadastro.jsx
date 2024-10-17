import './Cadastro.css';

function Cadastro() {
  return (
    <div className="signup-form">
      <h2>Cadastro</h2>
      <form className="form-container">
        <div className="column1">
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="dob">Data de Nascimento:</label>
            <input type="date" id="dob" name="dob" required />
          </div>
          <div>
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
          </div>
        </div>
        <div className="column2">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirmar Senha:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
