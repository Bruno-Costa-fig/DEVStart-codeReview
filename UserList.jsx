// COMPONENTE PARA REVISAR
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  // Busca dados
  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
      
    // ERRO 1: Sem array de dependências!
  }); 

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user, index) => (
          // ERRO 2: Usando 'index' como key
          <li key={index}>
            {/* ERRO 3: Lógica de renderização dentro do componente "pai" */}
            <div>
              <img src={user.avatar} />
              <strong>{user.name}</strong>
            </div>
          </li>
        ))}
      </ul>
      {/* ERRO 4: Não trata estados de loading ou erro */}
    </div>
  );
}
