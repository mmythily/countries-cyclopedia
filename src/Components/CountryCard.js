import React from 'react';

function CountryCard (props) {
  const { flag, name, population, region, capital } = props.country;

  return (
    <div className='country-card'>
      <img 
        className='country-flag'
        alt='flag'
        src={flag} />
      <article className='country-article'>
        <h2> {name} </h2>
        <h4> Population: {population}</h4>
        <h4> Capital: {capital}</h4>
        <h4> Region: {region}</h4>
      </article>
    </div>
  )
}

export default CountryCard;