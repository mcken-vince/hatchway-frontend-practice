import './App.scss';
import useWeatherForecast from './hooks/weatherForecast';
import { appForecast } from './types';
import DailyForecastCard from './components/DailyForecastCard';

function App() {
  
  // {date: day.dt, minTemp: day.temp.min, maxTemp: day.temp.max, icon: day.weather[0].icon}

  const forecast: appForecast = useWeatherForecast();

  const fiveDayForecast = forecast?.map(day => {
    return <DailyForecastCard {...day}/>;
  });  

  return (
    <div className="App">
      <div className='five-day-forecast-container'>
      {forecast && fiveDayForecast}    
      </div>
    </div>
  );
}

export default App;
