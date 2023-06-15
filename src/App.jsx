import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [enfermedades, setEnfermedades] = useState([]);

  useEffect(() => {
    fetch('https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/cie10')
      .then((response) => { return response.json()})
      .then((enfermedades) => {
        console.log(enfermedades['cie10']);
        setEnfermedades(enfermedades);
      });
  }, []);

   return (
    <div>
      
      
      <div>
        {
        Object.values(enfermedades['cie10']).map(item => 
          <ul>
          <li key={item.id}>{item.códigoDeLaCie10CuatroCaracteres}</li>
          </ul>
        )}
        </div> 
         
        <ul>
          

{ Object.keys(enfermedades).forEach((e) => { 

  console.log(e,':', enfermedades[e]);
 
  // <ul>
  //   <p>{id}</p>
  // <li key={item.id}>{item.códigoDeLaCie10CuatroCaracteres}</li>
  // </ul>
  
 })}

</ul>

      
    </div>
  );
}

export default App;
