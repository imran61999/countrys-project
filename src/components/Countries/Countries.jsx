import  { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'



const Countries = () => {
    const [countries , setCountries] = useState([]);

    useEffect(()=>{
        fetch ('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <h2>Visited countries:</h2>
            
           <div className='country-container'>
                {
                        countries.map((country,idx) => <Country key={idx} country={country}></Country>)
                    }
           </div>

        </div>
    );
};

export default Countries;