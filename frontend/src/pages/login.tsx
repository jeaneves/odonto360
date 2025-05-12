import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import type { loginToken } from '../types/auth';
// Importação correta para CSS padrão
import '../components/styles/style.css' // Certifique-se que este caminho está correto e o arquivo existe lá

const Login: React.FC = () => {
  const [nome, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post<loginToken>('/usuarios/login', { nome, senha });

      console.log(response.data);
      
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      alert('Login inválido!');
    }
  };

  return (
      // Nomes de classe como strings, pois não estamos usando CSS Modules aqui
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="input-group">
          <label htmlFor="usuario">Usuário:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Digite seu usuário"
            required
            value={nome}
            // Usa o setter com nome corrigido
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
