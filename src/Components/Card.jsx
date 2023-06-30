import {useState} from "react";
import { Link } from 'react-router-dom';
import { useTheme  } from './utils/global.context';



const Card = ({ dentist, reRender }) => {
  const { theme } = useTheme();
  const [estaEnArray, setEstaEnArray] = useState(false);

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

    const estaEnElArray = favorites.find(({ id }) => id === dentist.id);
    setEstaEnArray(estaEnElArray);
    reRender()
  }

  return (
    <div className={`${theme} card`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <div className="card-header">
         <h3>{dentist.name}</h3>
         <img
          className="card-button"
          src={`./${estaEnArray ? 'fav' : 'fav_outlined'}.png`} alt="fav_icon" 
          onClick={addFav}
        />
        </div>
        <img src="./images/doctor.jpg" alt='foto-perfil-dentista' className="card-img"/>
        <p>Username: {dentist.name}</p>
        <p>ID: {dentist.id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/details/${dentist.id}`}>Contactar</Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </div>
  );
};

export default Card;
