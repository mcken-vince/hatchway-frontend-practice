import { IDailyForecast } from '../types';
import '../styles/DailyForecastCard.scss';

const DailyForecastCard = (props: IDailyForecast) => {
  
  return (
    <div className='daily-forecast-card-container'>
      <p>{props.day}</p>
      <img src={props.icon} alt={props.alt}/>
    </div>
  );
};

export default DailyForecastCard;