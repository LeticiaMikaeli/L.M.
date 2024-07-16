import React from 'react';
import PerfilUsuario from './components/PerfilUsuario';
import FormularioPerfilUsuario from './components/FormularioPerfilUsuario';
import ListaUsuarios from './components/ListaUsuarios';

const App: React.FC = () => {
  return (
    <div>
      <PerfilUsuario />
      <FormularioPerfilUsuario />
      <ListaUsuarios />
    </div>
  );
};

export default App;