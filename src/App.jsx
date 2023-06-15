import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [enfermedades, setEnfermedades] = useState([]);

  useEffect(() => {
    

    fetch('https://app.powerbi.com/view?r=eyJrIjoiMDUyYWJhZjUtYWNmZi00ODU1LWFhMWMtMDE1OTgyNjg2YTViIiwidCI6IjU3N2ZjMWQ4LTA5MjItNDU4ZS04N2JmLWVjNGY0NTVlYjYwMCIsImMiOjR9')
      .then((response) => { return response.json()})
      .then((enfermedades) => {

        console.log(enfermedades['cie10']);
        
        setEnfermedades(enfermedades['cie10'])
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })

 }, []);

   return (
   
    <div className='cuerpo'>
      <div className='logo'>
        <h2>
        DiseaseDetectives
        </h2>
        <div className='logo2'>

        </div>
      </div >
   <ul>
         {
           enfermedades['cie10'] && (
        (enfermedades['cie10']).map(item => 
         
          <li key={item.id}>{item.id}</li>
         
        ))} 
     
     </ul> 
     <div className='grafica'>
     <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMDUyYWJhZjUtYWNmZi00ODU1LWFhMWMtMDE1OTgyNjg2YTViIiwidCI6IjU3N2ZjMWQ4LTA5MjItNDU4ZS04N2JmLWVjNGY0NTVlYjYwMCIsImMiOjR9"></iframe></div> 
      
     </div> 
         
   

    
 );
}

export default App;
