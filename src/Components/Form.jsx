import React, { useState } from 'react';


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 5 || !email.includes('@')) {
      setErrorMessage('Por favor verifique su información nuevamente');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage(`Gracias ${name}, te contactaremos cuanto antes vía mail`);
      console.log('Datos enviados:', { name, email });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='contact-form'>
      <label>
          Nombre completo:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
      </form>
    </div>
  );
};

export default Form;
