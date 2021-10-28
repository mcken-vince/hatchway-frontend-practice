import { IDailyForecast } from '../types';
import '../styles/DailyForecastCard.scss';

const DailyForecastCard = (props: IDailyForecast) => {
  
  return (
    <div className='daily-forecast-card-container'>
      <p className='daily-forecast-card-header'>{props.day}</p>
      <img className='daily-forecast-card-image' src={props.icon} alt={props.alt}/>
      <div className='daily-forecast-card-footer'>
        <p>{Math.round(props.maxTemp)}°</p>
        <p>{Math.round(props.minTemp)}°</p>
      </div>
    </div>
  );
};

export default DailyForecastCard;
