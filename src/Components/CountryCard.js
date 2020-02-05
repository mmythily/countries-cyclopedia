import React from 'react';

export default function CountryCard (props) {
  const { flag, name, population, region, capital } = props.country;

  return (
    <div className='country-card'>
      <img 
        className='country-flag'
        alt='flag'
        src={flag} />
      <article className='country-article'>
        <h2> {name} </h2>
        <p><strong> Population:</strong> {population}</p>
        <p><strong> Capital:</strong> {capital}</p>
        <p><strong> Region:</strong> {region}</p>
      </article>
    </div>
  )
}
