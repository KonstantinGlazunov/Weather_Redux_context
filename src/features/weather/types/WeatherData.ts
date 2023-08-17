export default interface WeatherData {
  name: string;
  main: { temp: number };
  wind: { speed: number };
}
