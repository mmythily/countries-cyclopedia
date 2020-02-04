import React from 'react';
import axios from 'axios';
import Country from './Country';

import './App.css';

function App() {
  // const [countries, setCountries] = useState([]);
  // const [country, setCountry] = useState({});

  // Get all countries
  const fetchCountries = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  

  // useEffect(() => {
  //   axios.get(`https://restcountries.eu/rest/v2/all`)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err));
  // })
  
  return (
    <div className="App">
      <nav>
        Where in the World?
        Dark Mode
      </nav>
      <form>
          <input 
            type='text' 
            name='country' 
            placeholder='Search for a country...' />
          <select>
            <option disabled>Filter by Region</option>
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </form>
        <Country />

    </div>
  );
}

export default App;
