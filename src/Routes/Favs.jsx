import { useState } from "react";
import Card from "../Components/Card";
import { useTheme } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [dentist, setDentist] = useState(JSON.parse(localStorage.getItem("favorites")))
  const { theme } = useTheme();

  const reRender = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setDentist(favorites);
  };

  return (
    (dentist?.length >= 1)? (
      <div className={`${theme} route`}>
        
        <h1>Dentists Favs</h1>
        <div className="card-grid">
        {dentist.map((dentist) => (
          <Card dentist={dentist} key={dentist.id} reRender={reRender}/>
        ))}
        </div>
      </div>
      ):
      (<div className={`${theme} empty-favs`}>
        No se ha agregado ningun odontólogo en su lista de favoritos
      </div>)
  );
};

export default Favs;
