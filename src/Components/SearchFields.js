import React from 'react'

export default function SearchFields ({search, handleChange}) {
  return(
    <form>
      <input 
        type='search' 
        name='country' 
        placeholder='Search for a country...'
        onChange={handleChange} />
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
  )
}