import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [enfermedades, setEnfermedades] = useState([]);

  useEffect(() => {
    fetch('https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/cie10')
      .then((response) => { return response.json()})
      .then((enfermedades) => {
        console.log(enfermedades);
        setEnfermedades(enfermedades);
      });
  }, []);

   return (
    <div>
      <ul>
        {enfermedades.map((item) => (
          <li key={item.id}>{item.capitulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
