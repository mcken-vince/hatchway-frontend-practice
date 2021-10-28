import { IDailyForecast } from '../types';
import '../styles/DailyForecastCard.scss';
import classNames from 'classnames';

const DailyForecastCard = (props: IDailyForecast) => {
  const today = new Date().toDateString();
  const cardDay = new Date(props.day).toDateString();
  // If the card day is the same as today, add class .today
  const containerClass:string = classNames('daily-forecast-card-container', {today: today === cardDay});

  return (
    <div className={containerClass}>
      <p className='daily-forecast-card-header'>{cardDay.slice(0, 3)}</p>
      <img className='daily-forecast-card-image' src={props.icon} alt={props.alt}/>
      <div className='daily-forecast-card-footer'>
        <p>{Math.round(props.maxTemp)}°</p>
        <p>{Math.round(props.minTemp)}°</p>
      </div>
    </div>
  );
};

export default DailyForecastCard;
