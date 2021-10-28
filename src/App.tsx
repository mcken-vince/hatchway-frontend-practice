import './App.scss';
import useWeatherForecast from './hooks/weatherForecast';
import { appForecast } from './types';
import DailyForecastCard from './components/DailyForecastCard';

function App() {
  
  // {date: day.dt, minTemp: day.temp.min, maxTemp: day.temp.max, icon: day.weather[0].icon}

  const forecast: appForecast = useWeatherForecast();

  

  return (
    <div className="App">
      {forecast && <DailyForecastCard {...forecast[0]}/>}    
    </div>
  );
}

export default App;
