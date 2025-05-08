import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ padding: 20 }}>
          <h2>Bem-vindo ao Painel</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
