import React from 'react';

export default function CountryPage (props) {
  const { flag, name, population, region, capital } = props.countryP;

  return(
    <div className='country-card'>
      <img 
        className='country-flag'
        alt='flag'
        src={flag} />
      <article className='country-article'>
        <h3> {name} </h3>
        <p><strong> Population:</strong> {population}</p>
        <p><strong> Region:</strong> {region}</p>
        <p><strong> Capital:</strong> {capital}</p>
      </article>
    </div>
  )
}