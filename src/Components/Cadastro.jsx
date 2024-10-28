import React from 'react';
import HeaderCadastro from './HeaderCadastro';
import './Cadastro.css';

function Cadastro() {
  return (
    <div className="container">
      <HeaderCadastro />
      <div className='espacoVaziu'></div>
      <div className="form-container">
        <form className="form">
          
          <input type="text" placeholder="Nome completo" className="input" />

          <input type="date" placeholder="Data de Nascimento" className="input" />

          <input type="text" placeholder="CPF" className="input" />

          <input type="text" placeholder="Endereço" className="input" />

          <input type="password" placeholder="Senha" className="input" />

          <input type="password" placeholder="Confirmar Senha" className="input" />



          <button type="submit" className="submit-button">Cadastrar</button>
        </form>
      </div>
      
    </div>
  );
}

export default Cadastro;
