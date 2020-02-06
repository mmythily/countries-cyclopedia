import React from 'react';
import './CountryCard.css'

export default function CountryCard (props) {
  const { flag, name, population, region, capital } = props.country;

  function formatCommas(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return(
    <div className='country-card'>
      <img 
        className='country-flag'
        alt='flag'
        src={flag} />
      <article className='country-article'>
        <h3> {name} </h3>
        <p><strong> Population:</strong> {formatCommas(population)}</p>
        <p><strong> Region:</strong> {region}</p>
        <p><strong> Capital:</strong> {capital}</p>
      </article>
    </div>
  )
}
