import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Usuario {
  nome: string;
  idade: number;
  email: string;
  hobbies: string[];
}

const FormularioPerfilUsuario: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: '',
    idade: 0,
    email: '',
    hobbies: []
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuario(prevUsuario => ({
      ...prevUsuario,
      [name]: name === 'idade' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    setUsuario(prevUsuario => ({
      ...prevUsuario,
      ...data,
      hobbies: typeof data.hobbies === 'string' ? (data.hobbies as string).split(',') : prevUsuario.hobbies
    }));
  };
};
  

export default FormularioPerfilUsuario;
