import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav style={{ backgroundColor: '#333', color: 'white', padding: 10, display: 'flex', justifyContent: 'space-between' }}>
      <h3>Sistema Interno</h3>
      <button onClick={handleLogout} style={{ backgroundColor: '#555', color: 'white', border: 'none', padding: '6px 12px' }}>
        Sair
      </button>
    </nav>
  );
};

export default Navbar;
