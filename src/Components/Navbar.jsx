import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const { theme, toggleTheme } = useTheme();
  
  const handleClick = () => {
    toggleTheme();
  };

  return (
    <nav className={`${theme} navbar`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className='logo'>
        <img src="./DH.ico" alt="Logo" /> 
        <h2>Odonto</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <img
          src={`./${theme ? 'dark' : 'light'}.png`} alt="fav_icon" 
          onClick={handleClick}
      />
    </nav>
  )
}

export default Navbar