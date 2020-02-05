import React, {useState} from 'react';
import CountryList from './Components/CountryList';
import './App.css';
import SearchFields from './Components/SearchFields';

export default function Dashboard() {
  const [search, setSearch] = useState('')

  function handleChange (event) {
    setSearch(event.target.value)
  }
  console.log(search)
  return (
    <div>
      <nav>
        Where in the World?
        Dark Mode
      </nav>
      <SearchFields handleChange={handleChange}/>
      <CountryList />
    </div>
  );
}
;
