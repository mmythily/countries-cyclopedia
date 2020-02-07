import React from 'react';
import './CountryCard.scss'

export default function CountryCard (props) {
  const { flag, name, population, area, region, subregion, capital } = props.country;

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
        <p><strong> Area:</strong> {area}</p>
        <p><strong> Density:</strong> {(population/area).toFixed(2)}</p>
        <p><strong> Region:</strong> {region}</p>
        <p><strong> Subregion:</strong> {subregion?subregion:'-'}</p>
        <p><strong> Capital:</strong> {capital?capital:'-'}</p>
      </article>
    </div>
  )
}
