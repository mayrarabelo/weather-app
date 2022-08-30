import './App.css';
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
  const [screen, setScreen] = useState(false);
  const [looad, setLooad] = useState(false);

  // var key = "60e5bbbf1366bf586cb3e3c95684b8d3";
  const key2 = "1fa6456d5b6744a997f160359222608";

  useEffect(() => {
    var url2 = `https://api.weatherapi.com/v1/forecast.json?key= ${key2}&q=${location}&days=1&aqi=no&alerts=no`;
    // var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}`;
    setLooad(true)
    axios.get(url2)
      .then((response) => {
        setWeather(response.data)
        setLooad(false)
      })
  }, [location])

  const getLocation = (event) => {
    setTimeout(() => {
      setScreen(true)
    }, 100)

    let city = event.target.value;
    if (city !== '') {
      setLocation(city);
    }
  }

  /*function calcTime() {
    let sunrise = weather.forecast.forecastday[0].astro.sunrise.split('')[0]

    for (const day of weather.forecast.forecastday[0].hour) {
      day.time.split("")
      let hour = day.time[1]

   }
  }*/

  const conditions = {
    'Sunny': 'condition-sunny',
    'Partly cloudy': 'condition-sunny',
    'Cloudy': 'condition-light',
    'Mist': 'condition-light',
    'Clear': 'condition-dark'
  }

  return (
    <>
      {screen ?

        <div className={weather.current ? conditions[weather.current.condition.text] : null}>


          {looad ? <div>Loading</div> :

            <div className='container flex center-y justify-content-center'>
              <header className='flex center-y justify-content-center'>
                <button className='material-symbols-outlined p-10 button-back' onClick={() => { setScreen(false) }}><strong>arrow_back</strong></button>
                {weather.location ? <h1 className='city-title'>{weather.location.name}</h1> : null}
                {weather.current ? <div>{weather.current.condition.text}</div> : null}
              </header>

              <main className='flex center-y justify-content-center'>
                <div className='flex p-20 align-items-center'>
                  {weather.current ? <p className='temp-c'>{weather.current.temp_c}</p> : null}
                  <div>
                    <p className='flex justify-content-end font-1-5'>°C</p>
                    <div className='flex'>
                      <span class="material-symbols-outlined">arrow_upward</span>
                      {weather.forecast ? <p>{weather.forecast.forecastday[0].day.maxtemp_c}</p> : null}
                    </div>
                    <div className='flex'>
                      <span class="material-symbols-outlined">arrow_downward</span>
                      {weather.forecast ? <p>{weather.forecast.forecastday[0].day.mintemp_c}</p> : null}
                    </div>
                  </div>
                </div>

                <div>
                  {weather.current ? <img src={weather.current.condition.icon} alt="Condition"></img> : null}
                </div>

                <div className='flex justify-content-center forecastday'>
                  <div className='flex center-y p-20'>
                    <div>dawn</div>
                    {weather.forecast ? <img src={weather.forecast.forecastday[0].hour[5].condition.icon} alt="Condition"></img> : null}
                    {weather.forecast ? <p>{weather.forecast.forecastday[0].hour[5].temp_c}°C</p> : null}
                  </div>

                  <div className='flex center-y p-20'>
                    <div>morning</div>
                    {weather.forecast ? <img src={weather.forecast.forecastday[0].hour[11].condition.icon} alt="Condition"></img> : null}
                    {weather.forecast ? <p>{weather.forecast.forecastday[0].hour[11].temp_c}°C</p> : null}
                  </div>

                  <div className='flex center-y p-20'>
                    <div>afternoon</div>
                    {weather.forecast ? <img src={weather.forecast.forecastday[0].hour[16].condition.icon} alt="Condition"></img> : null}
                    {weather.forecast ? <p>{weather.forecast.forecastday[0].hour[16].temp_c}°C</p> : null}
                  </div>

                  <div className='flex center-y p-20'>
                    <div>night</div>
                    {weather.forecast ? <img src={weather.forecast.forecastday[0].hour[21].condition.icon} alt="Condition"></img> : null}
                    {weather.forecast ? <p>{weather.forecast.forecastday[0].hour[21].temp_c}°C</p> : null}
                  </div>
                </div>

                <div className='flex'>

                  <div className='flex center-y p-10'>
                    <p>wind speed</p>
                    {weather.current ? <p>{weather.current.wind_mph} m/s</p> : null}
                  </div>
                  <div className='flex center-y p-10'>
                    <div>sunrise</div>
                    {weather.forecast ? <div>{weather.forecast.forecastday[0].astro.sunrise}</div> : null}
                  </div>

                  <div className='flex center-y p-10'>
                    <div>sunset</div>
                    {weather.forecast ? <div>{weather.forecast.forecastday[0].astro.sunset}</div> : null}
                  </div>

                  <div className='flex center-y p-10'>
                    <div>humidity</div>
                    {weather.current ? <div>{weather.current.humidity}%</div> : null}
                  </div>

                </div>

              </main>

            </div>

          }

        </div>

        :

        <div className='flex justify-content-center'>
          <div className='flex center-y container-menu justify-content-center'>
            <h1 className='title-menu'>weather</h1>
            <span>select a city</span>
            <span className="material-symbols-outlined icon-menu">public</span>

            <div className='container-button-menu'>
              {cities.map(city => {
                return (

                  <button key={city.name} type="button" className='button-menu'
                    onClick={getLocation}
                    value={city.name}>{city.name}</button>

                )
              })}

            </div>

          </div>
        </div>


      }

    </>
  );
}


export default App;
