import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

export default function CountryList (){
  const [countries, setCountries] = useState([])
  useEffect (() => {
    const fetchCountries = async () => {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      setCountries(response.data)
    }
    fetchCountries();
  }, [countries])
  return (
    <main className='countries-container'>
      {countries.map(country => (
        <span key={country.alpha3Code}>
          <CountryCard country={country} />
        </span>
      ))}
    </main>
  )
}
