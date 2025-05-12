import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import api from '../services/api';
import type { loginToken } from '../types/auth';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const decoded = jwtDecode<loginToken>(token);
        const userId = decoded.id;

        const response = await api.get(`usuarios/pegarusuario/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        setUsername(response.data.nome); // Ajuste conforme a resposta real da API
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav style={{ backgroundColor: '#333', color: 'white', padding: 10, display: 'flex', justifyContent: 'space-between' }}>
      <h3>Sistema Interno {username}</h3>
      <button onClick={handleLogout} style={{ backgroundColor: '#555', color: 'white', border: 'none', padding: '6px 12px' }}>
        Sair
      </button>
    </nav>
  );
};

export default Navbar;
