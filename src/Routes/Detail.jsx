import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams();
  const [dentist, setDentist] = useState([]);
  const { theme } = useTheme();

  async function getDentist() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const dentist = await res.json();
    setDentist(dentist);
  }

  useEffect(() => {
    getDentist();
  });
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={`${theme} route`}>
      <h1>Detail Dentist {dentist.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>
        <h3>Detalles del Odontologo</h3>
        <table >
          <thead>
            <tr >
              <th>Nombre</th>
              <th>email</th>
              <th>telefono</th>
              <th>WebSite</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td >{dentist.name}</td>
              <td >{dentist.email}</td>
              <td >{dentist.phone}</td>
              <td >{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Detail