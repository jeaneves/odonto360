import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div style={{
      width: 200,
      height: '100vh',
      backgroundColor: '#f0f0f0',
      padding: 20
    }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li style={{ marginTop: 10 }}>
          <div onClick={() => setOpen(!open)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
            Funcionários {open ? '▲' : '▼'}
          </div>
          {open && (
            <ul style={{ paddingLeft: 15 }}>
              <li><a href="/funcionarios/cadastrar">Cadastrar</a></li>
              <li><a href="/funcionarios/listar">Listar</a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
