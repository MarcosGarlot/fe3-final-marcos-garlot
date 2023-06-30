import { useEffect, useState} from "react";
import Card from '../Components/Card'
import { useTheme } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist, setDentist] = useState([]);
  const { theme } = useTheme();

  async function getDentist() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const dentist = await response.json();
    setDentist(dentist);
  }

  useEffect(() => {
    getDentist();
  }, []);


  return (
    <main className={`home ${theme}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentist.map((dentist) => (
          <Card dentist={dentist}  key={dentist.id} />
        ))}
      </div>
    </main>
  )
}

export default Home