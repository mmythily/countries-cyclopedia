import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

function CountryList (){
  const [countries, setCountries] = useState([])
  
  useEffect (() => {
    const fetchCountries = async () => {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      setCountries(response.data)
    }
    fetchCountries();
  }, [countries])

  return (
    <div>
      {countries.map(country => (
        <span key={country.alpha3Code}>
          <CountryCard country={country} />
        </span>
      ))}
    </div>
  )
}
export default CountryList;