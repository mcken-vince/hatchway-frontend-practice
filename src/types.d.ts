export interface IDailyForecast {
  day: number;
  minTemp: number;
  maxTemp: number;
  icon: string;
  alt: string;
};

export type appForecast = null | IDailyForecast[];