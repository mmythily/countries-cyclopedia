import React, {useState, useEffect} from 'react';
import SearchFields from './Components/SearchFields';
import axios from 'axios';
import CountryCard from './Components/CountryCard';
import './App.css';

export default function Dashboard() {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('all')
  const [countries, setCountries] = useState([])
  

  function handleChange (event) {
    console.log(search, region)
    const {name, value} = event.target
    if (name==='country'){
      setSearch(value)
    } else if (name==='region') {
      setRegion(value)
    }
    
  }

  useEffect (() => {
    if (region === 'all') {
      const fetchCountries = async () => {
        const responseAll = await axios.get('https://restcountries.eu/rest/v2/all')
        setCountries(responseAll.data)
      }
      fetchCountries()
    } else {
      const fetchByRegion = async () => {
        const responseRegion = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
        setCountries(responseRegion.data)
      }
      fetchByRegion()
    }
    
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

