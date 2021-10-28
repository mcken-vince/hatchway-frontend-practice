import './App.scss';
import useWeatherForecast from './hooks/weatherForecast';
import { appForecast } from './types';
import DailyForecastCard from './components/DailyForecastCard';

function App() {
  const forecast: appForecast = useWeatherForecast();

  const fiveDayForecast = forecast?.map((day, idx) => {
    return <DailyForecastCard key={idx} {...day}/>;
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
