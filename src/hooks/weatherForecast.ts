import axios from 'axios';
import { timeStamp } from 'console';
import { useEffect, useState } from 'react';

const calgaryLatitude: string = '51.049999';
const calgaryLongitude: string = '-114.066666'

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const uri: string = `http://api.openweathermap.org/data/2.5/onecall?lat=${calgaryLatitude}&lon=${calgaryLongitude}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

  useEffect(() => {
    axios.get(uri)
    .then(response => {
      const timezoneOffset = response.data.timezone_offset;
      const dailyForecast: any[] = response.data.daily;
      const formattedForecast = dailyForecast.map((day, idx) => {
        // Returns an object with only the needed information
        // Only today and next 4 days
        if (idx < 5) {
          return ({day: idx, dt: day.dt - timezoneOffset, minTemp: day.temp.min, maxTemp: day.temp.max, icon: day.weather[0].icon})
        }
      })
      setWeatherData(formattedForecast);
    })
    .catch(err => console.error('Error fetching weather forecast from API'));
  
  }, [uri])

  

  return weatherData;
}
export default useWeatherData;