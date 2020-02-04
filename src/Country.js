import React from 'react';
import axios from 'axios';

function Country () {

  //  Get single country details
  const fetchCountry = country => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/can`)
      .then(res => JSON.stringify(res.data))
      .catch(err => console.log(err));
  };

  return (
    
    <div>
      <img className='country-flag' src='https://restcountries.eu/data/can.svg' />
      <h2> Canada </h2>
      <h3> Population: </h3>
      <h3> Capital: </h3>
      <h3> Region: </h3>
    </div>
  )
}

export default Country;