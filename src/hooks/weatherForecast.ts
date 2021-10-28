import axios from 'axios';
import { useEffect, useState } from 'react';

const calgaryLatitude: string = '51.049999';
const calgaryLongitude: string = '-114.066666'

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<any>({});
  const uri: string = `http://api.openweathermap.org/data/2.5/onecall?lat=${calgaryLatitude}&lon=${calgaryLongitude}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

  useEffect(() => {
    axios.get(uri)
    .then(response => {
      const dailyForecast: any[] = response.data.daily;
      const formattedForecast = dailyForecast.map(day => {
        // Returns an object with only the needed information
        return ({date: day.dt, minTemp: day.temp.min, maxTemp: day.temp.max, icon: day.weather[0].icon})
      })

      setWeatherData(formattedForecast);
    })
    .catch(err => console.error('Error fetching weather forecast from API'));
  
  }, [uri])

  

  return weatherData;
}
export default useWeatherData;