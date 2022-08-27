import './App.css';
// import api from './services/api';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const cities = [
    { 'name': 'Dallol' },
    { 'name': 'Fairbank' },
    { 'name': 'London' },
    { 'name': 'Recife' },
    { 'name': 'Vancouver' },
    { 'name': 'Yakutsk' }
  ];


  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});

  var key = "60e5bbbf1366bf586cb3e3c95684b8d3";
  var key2 = "1fa6456d5b6744a997f160359222608"

  useEffect(() => {
    console.log("Location useEffect:", location)
    var url2 = `http://api.weatherapi.com/v1/current.json?key=${key2}&q=${location}&aqi=no`;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}`;
    axios.get(url2)
      .then((response) => {
        setWeather(response.data)
        console.log(response.data);
        //  console.log(response.data);
      })
  }, [location])

  const getLocation = (event) => {
    let city = event.target.value;
    if (city !== '') {
      setLocation(city);
    }
  }

  return (
    <div>
      <h1>Teste </h1>
      {cities.map(city => {
        return (
          <button key={city.name} type="button"
            onClick={getLocation}
            value={city.name}>{city.name}</button>
        )
      })}


    </div>
  );
}


export default App;
