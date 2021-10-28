import axios from 'axios';
import { useEffect, useState } from 'react';
import { IDailyForecast } from '../types';

const calgaryLatitude: string = '51.049999';
const calgaryLongitude: string = '-114.066666';

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<IDailyForecast[] | null>(null);
  const uri: string = `http://api.openweathermap.org/data/2.5/onecall?lat=${calgaryLatitude}&lon=${calgaryLongitude}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

  // Only fetch forecast from API once
  useEffect(() => {
    axios.get(uri)
      .then(response => {
        const fiveDayForecast: any[] = response.data.daily.slice(0, 5);
        const current: Date = new Date();
        const formattedForecast: IDailyForecast[] = fiveDayForecast.map((day, idx) => {
          // Returns an object with only the needed information
          const iconUrl: string = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
          return ({day: current.setDate(current.getDate()+idx), minTemp: day.temp.min, maxTemp: day.temp.max, icon: iconUrl, alt: day.weather[0].main})
        

        });
        setWeatherData(formattedForecast);
      })
      .catch(err => console.error('Error fetching weather forecast from API'));
  
  }, [uri])
  return weatherData;
}
export default useWeatherData;
