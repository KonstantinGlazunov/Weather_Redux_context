import WeatherData from "./types/WeatherData";

export const getWeather = async (city: string): Promise<WeatherData> => {
  const res =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=fa1e72ff893c6a4a5ed4077327e855b4`);
  return res.json();
};
