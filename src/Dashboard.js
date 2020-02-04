import React from 'react';
import CountryList from './Components/CountryList';
import './App.css';

class Dashboard extends React.Component {

  render(){
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
          <div>
            <CountryList />
          </div>
      </div>
    );
  }
}

export default Dashboard;
