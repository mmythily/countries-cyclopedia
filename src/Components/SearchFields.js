import React from 'react'
import './SearchFields.css';

export default function SearchFields ({search, region, handleChange}) {
  return(
    <div >
      <form className='form'>
        <input 
          name='country' 
          placeholder='Search for a country...'
          onChange={handleChange} />
        <select
          name='region'
          value={region}
          onChange={handleChange}
          >
          <option disabled>Filter by Region</option>
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </div>
  )
}