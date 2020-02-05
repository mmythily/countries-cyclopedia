import React, {useState, useEffect} from 'react';
import SearchFields from './Components/SearchFields';
import axios from 'axios';
import CountryCard from './Components/CountryCard';
import './App.css';

export default function Dashboard() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  function handleChange (event) {
    setSearch(event.target.value)
    console.log(search)
  }

  useEffect (() => {
    const fetchCountries = async () => {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      setCountries(response.data)
    }
    fetchCountries();
  }, [countries])

  const filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(search.toLowerCase())
  })
  
  return (
    <div>
      <nav>
        Where in the World?
        Dark Mode
      </nav>
      <SearchFields handleChange={handleChange}/>
      <main className='countries-container'>
        {filteredCountries.map(country => (
          <span key={country.alpha3Code}>
            <CountryCard country={country} />
          </span>
        ))}
      </main>
    </div>
  )
}

