import './App.scss';
import useWeatherForecast from './hooks/weatherForecast';

function App() {
  
  // {date: day.dt, minTemp: day.temp.min, maxTemp: day.temp.max, icon: day.weather[0].icon}
  const forecast: JSON = useWeatherForecast();
    


  return (
    <div className="App">
      <h1>{JSON.stringify(forecast)}</h1>
    </div>
  );
}

export default App;
