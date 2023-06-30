import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ dentist }) => {
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const existingIndex = favorites.findIndex((fav) => fav.id === dentist.id);

    if (existingIndex !== -1) {
      favorites.splice(existingIndex, 1);
    } else {
      favorites.push(dentist);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log(JSON.parse(localStorage.getItem('favorites')));
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3>{dentist.name}</h3>
        <img src="./images/doctor.jpg" alt='foto-perfil-dentista' />
        <p>Username: {dentist.name}</p>
        <p>ID: {dentist.id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/details/${dentist.id}`}>Contactar</Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
