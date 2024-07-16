import React, { useState } from 'react';

interface Usuario {
  nome: string;
  idade: number;
  email: string;
  hobbies: string[];
}

const PerfilUsuario: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: 'John Doe',
    idade: 30,
    email: 'johndoe@example.com',
    hobbies: ['Leitura', 'Jogos', 'Cozinhar']
  });


};

export default PerfilUsuario;
