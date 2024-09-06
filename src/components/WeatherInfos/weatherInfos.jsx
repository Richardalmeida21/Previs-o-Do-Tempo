import './weatherInfos.css';

const WeatherInfos = ({ weather }) => {

    console.log(weather);

  return (
    <div className='container-main'>
      <h2 className='city-name'>{weather.name}</h2>

      <div className='container-info'>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
        <p>{Math.round(weather.main.temp) + "°C"}</p>
      </div>

      <p className='descricao'>{weather.weather[0].description}</p>

      <div className='container-info-sec'>
        <p>{"Sensação térmica: " + Math.round(weather.main.feels_like)}°C</p>
        <p>{"Umidade:" + weather.main.humidity + "%"}</p>
        <p>{"Pressão: " + weather.main.pressure + " hPa"}</p>
      </div>

    </div>
  );
};

export default WeatherInfos;