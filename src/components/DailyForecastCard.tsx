import { IDailyForecast } from '../types';
import '../styles/DailyForecastCard.scss';
import classNames from 'classnames';

const DailyForecastCard = (props: IDailyForecast) => {
  
  const containerClass:string = classNames('daily-forecast-card-container', {today: (props.day === 0)});
  // This only works for today
  const today = new Date().toDateString().split(' ')[0];

  return (
    <div className={containerClass}>
      <p className='daily-forecast-card-header'>{today}</p>
      <img className='daily-forecast-card-image' src={props.icon} alt={props.alt}/>
      <div className='daily-forecast-card-footer'>
        <p>{Math.round(props.maxTemp)}°</p>
        <p>{Math.round(props.minTemp)}°</p>
      </div>
    </div>
  );
};

export default DailyForecastCard;
