import { useState } from "react";
import './App.css';
import Login from './components/Login'; 
import Cadastro from './components/Cadastro'; 

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      {isLogin ? <Login /> : <Cadastro />} 
      <button onClick={toggleForm}>
        {isLogin ? "Não tem uma conta? Cadastre-se" : "Já tem uma conta? Faça login"}
      </button>
    </div>
  );
}

export default App;
