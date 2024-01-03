/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Card from './component/Card';    
import CardW from './component/CardW';
import Suny from './image/clearSky.png';
import Thunderstorm from './image/thunderstorm.png'
import Snow from './image/snow.png'
import BrokenClouds from './image/brokenClouds.png'
import ScatteredClouds from './image/scatteredClouds.png'
import ScatteredCloudsmoon from './image/scatteredCloudsMoon.png'
import Rain from './image/rain.png'
import Moon from './image/moon.png'
import Fewclouds from './image/fewClouds.png'
 
function App() {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',];
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecast] = useState(null);
  const [city, setCity] = useState('Misratah'); // Default city

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},LY&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        setWeatherData(response.data);
        localStorage.setItem('myData', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [city]); // Re-run effect only when 'city' state changes

  useEffect(() => {
    const fetchDataa = async () => {
      try {
        const responsee = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},LY&units=Metric&appid=${process.env.REACT_APP_API_KEY}`);
        setForecast(responsee.data);
        localStorage.setItem('myData', JSON.stringify(responsee.data));
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchDataa();
  }, [city]); // Re-run effect only when 'city' state changes

  // Example: Update the city state based on user selection or any other logic
  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
  };

  const iconw = (id) => {
  if(id == '01d') {
    return Suny;
    } else if (id == '01n') {
      return Moon;
    } else if (id == '02d') {
      return Fewclouds;
    } else if (id == '02n' ) {
      return ScatteredCloudsmoon;
    } else if (id == '03d' || id == '03n' || id == '50d' || id == '50n') {
      return ScatteredClouds;
    } else if (id == '04d' || id == '04n') {
      return BrokenClouds;
    } else if (id == '09d' || id == '09n' || id == '10d' || id == '10n') {
      return Rain;
    } else if (id == '11d' || id == '11n') {
      return Thunderstorm;
    } else if (id == '13d' || id == '13n') {
      return Snow;
    }
  };

  const dateInLibya = new Date().toLocaleString('en-US', { timeZone: 'Africa/Tripoli' });
  let date = new Date(dateInLibya);
  
  const Forecast_arr = () => {
    const DayInAWeek = date.getDay()+1;
    const forecastdays = days.slice(DayInAWeek, days.length).concat(days.slice(0, DayInAWeek));
    return forecastdays;
  }

  return (
    <div className={`mx-2 my-2 lg:my-10 lg:mx-10 rounded-lg ${(date.getHours() >= 6 && date.getHours() <=  18) ? 'waether-bg' : 'waether-bg12'} 2xl:mx-[auto] 2xl:w-[70%]`}>
      {weatherData && (
      <div className='bg-black/25 py-10 px-5 lg:py-20 rounded-lg lg:px-20'>
      <div className='flex flex-row gap-2 justify-between mb-10 md:hidden'>
          <button onClick={() =>{handleCityChange("Tripoli")}} className={`transition duration-150 ease-in-out px-2 py-1 rounded font-semibold text-sm ${(city == "Tripoli") ? "bg-white" : "bg-white/25 text-black/75 scale-90 hover:text-black hover:scale-95 hover:bg-white/50" }`}>Tripoli</button>
          <button onClick={() =>{handleCityChange("Benghazi")}} className={`transition duration-150 ease-in-out px-2 py-1 rounded font-semibold text-sm ${(city == "Benghazi") ? "bg-white" : "bg-white/25 text-black/75 scale-90 hover:text-black hover:scale-95 hover:bg-white/50" }`}>Benghazi</button>
          <button onClick={() =>{handleCityChange("Misratah")}} className={`transition duration-150 ease-in-out px-2 py-1 rounded font-semibold text-sm ${(city == "Misratah") ? "bg-white" : "bg-white/25 text-black/75 scale-90 hover:text-black hover:scale-95 hover:bg-white/50" }`}>Misratah</button>
          <button onClick={() =>{handleCityChange("Bayda")}} className={`transition duration-150 ease-in-out px-2 py-1 rounded font-semibold text-sm ${(city == "Bayda") ? "bg-white" : "bg-white/25 text-black/75 scale-90 hover:text-black hover:scale-95 hover:bg-white/50" }`}>Bayda</button>
        </div>
      <div className='titel flex flex-row justify-between items-center'>
        <div>
          <h1 className='text-4xl font-bold text-white'>Libya, {city}</h1>
          <h3 className='text-lg font-semibold text-slate-200'>{`${days[date.getDay()]} ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</h3>
        </div>
        <div className='flex-row gap-2 hidden md:flex'>
          <button onClick={() =>{handleCityChange("Tripoli")}} className={`transition duration-150 ease-in-out px-5 py-2 rounded font-semibold ${(city == "Tripoli") ? "bg-white" : "bg-white/25 text-black/75 scale-90 hover:text-black hover:scale-95 hover:bg-white/50" }`}>Tripoli</button>
          <button onClick={() =>{handleCityChange("Benghazi")}} className={`transition duration-150 ease-in-out px-5 py-2 rounded font-semibold ${(city == "Benghazi") ? "bg-white" : "bg-white/25 text-black/75 scale-90 hover:text-black hover:scale-95 hover:bg-white/50" }`}>Benghazi</button>
          <button onClick={() =>{handleCityChange("Misratah")}} className={`transition duration-150 ease-in-out px-5 py-2 rounded font-semibold ${(city == "Misratah") ? "bg-white" : "bg-white/25 text-black/75 scale-90 hover:text-black hover:scale-95 hover:bg-white/50" }`}>Misratah</button>
          <button onClick={() =>{handleCityChange("Bayda")}} className={`transition duration-150 ease-in-out px-5 py-2 rounded font-semibold ${(city == "Bayda") ? "bg-white" : "bg-white/25 text-black/75 scale-90 hover:text-black hover:scale-95 hover:bg-white/50"}`}>Bayda</button>
        </div>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-1 gap-3 my-5">
      <div className="transition duration-150 ease-in-out hover:scale-[1.03] col-span-3 sm:col-span-1 bg-black/25 backdrop-blur rounded-xl flex flex-row justify-center items-center gap-5 p-5">
          <img src={iconw(weatherData.weather[0].icon)} className='imagesize' alt='sun'/>
          <h2 className='font-bold text-white texthead'>{Math.floor(weatherData.main.temp)}°c</h2>
      </div>
      <div className="transition duration-150 ease-in-out hover:scale-[1.03] col-span-3 sm:col-span-1 bg-black/25 backdrop-blur rounded-xl p-5">
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-2 h-full">
        <Card day={`${Math.floor(weatherData.main.temp_max)}°C`} header="High"/>
        <Card day={`${weatherData.wind.speed} kph`} header="Wind"/>
        <Card day={'7:48'} header="Sunrise"/>
        <Card day={`${Math.floor(weatherData.main.temp_min)-3}°C`} header="Low"/>
        <Card day={`${weatherData.main.humidity}%`} header="Humidity"/>
        <Card day={`18:02`} header="Sunset"/>
      </div>
      </div>
      </div>
      <h1 className='font-bold text-2xl text-white mb-5'>Todays weather</h1>
      {forecastData && (
      <div className="grid grid-flow-row-dense grid-cols-6 grid-rows-1 gap-3">
        <div className="transition duration-150 ease-in-out hover:scale-[1.05] col-span-3 sm:col-span-1">
        <CardW dayy={Forecast_arr()[0]} icon={iconw(forecastData.list[5].weather[0].icon)} temp={Math.floor(forecastData.list[5].main.temp)}/>
        </div>
        <div className="transition duration-150 ease-in-out hover:scale-[1.05] col-span-3 sm:col-span-1">
        <CardW dayy={Forecast_arr()[1]} icon={iconw(forecastData.list[13].weather[0].icon)} temp={Math.floor(forecastData.list[12].main.temp)}/>
        </div>
        <div className='transition duration-150 ease-in-out hover:scale-[1.05] col-span-3 sm:col-span-1'>
        <CardW dayy={Forecast_arr()[2]} icon={iconw(forecastData.list[21].weather[0].icon)} temp={Math.floor(forecastData.list[20].main.temp)}/>
        </div>
        <div className="transition duration-150 ease-in-out hover:scale-[1.05] col-span-3 sm:col-span-1">
        <CardW dayy={Forecast_arr()[3]} icon={iconw(forecastData.list[29].weather[0].icon)} temp={Math.floor(forecastData.list[27].main.temp)}/>
        </div>
        <div className="transition duration-150 ease-in-out hover:scale-[1.05] col-span-3 sm:col-span-1">
        <CardW dayy={Forecast_arr()[4]} icon={iconw(forecastData.list[37].weather[0].icon)} temp={Math.floor(forecastData.list[33].main.temp)}/>
        </div>
        <div className='transition duration-150 ease-in-out hover:scale-[1.05] col-span-3 sm:col-span-1'>
        <CardW dayy={Forecast_arr()[5]} icon={iconw(forecastData.list[13].weather[0].icon)} temp={Math.floor(forecastData.list[12].main.temp)}/>
        </div>
      </div>
      )}
      </div>
      )}
    </div>
  );
}

export default App;
