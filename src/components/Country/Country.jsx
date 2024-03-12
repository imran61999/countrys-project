import { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
  const {name, flags, population, area, cca3 } =country; 
  const [visited, setVisited]= useState(false);
  
  const handleVisited = ()=>{
       setVisited(!visited)
  }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{color: visited? 'yellow':'black'}}>Name:{name.common}</h2>
             <img src={flags.png}></img>
             <p>Population: {population}</p>
             <p>Area: {area}</p>
             <p>Code: {cca3}</p>
             <button onClick={handleVisited}> {visited? 'Visited':'Going'} </button>
             {
                visited ? 'I have visited this country':'i  want to visit this country'
             }
            
        </div>
    );
};

export default Country;