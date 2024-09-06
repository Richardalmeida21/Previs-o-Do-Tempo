import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Certifique-se de ter um arquivo CSS para as classes de fundo
import WeatherInfos from './components/WeatherInfos/weatherInfos';


const App = () => {
  const [weather, setWeather] = useState();
  const inputRef = useRef();

  useEffect(() => {
    // Defina a classe de fundo inicial com base na hora atual do sistema
    const currentTime = new Date().getHours();
    if (currentTime >= 6 && currentTime < 18) {
      document.body.classList.add('day');
      document.body.classList.remove('night');
    } else {
      document.body.classList.add('night');
      document.body.classList.remove('day');
    }
  }, []);

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "91ae31fc45a2e1e72251397991f71cf0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      const info = await axios.get(url);
      setWeather(info.data);

      // Obtenha a hora atual da cidade
      const currentTime = new Date(info.data.dt * 1000).getHours();
      // Defina a classe de fundo com base na hora
      if (currentTime >= 6 && currentTime < 18) {
        document.body.classList.add('day');
        document.body.classList.remove('night');
      } else {
        document.body.classList.add('night');
        document.body.classList.remove('day');
      }
    } catch (error) {
      console.error("Erro ao buscar a cidade:", error);
    }
  }

  return (
    <div className="app-container">

      <h1>Previsão do tempo</h1>
      <div className='container-input'>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>
      </div>

      {weather && <WeatherInfos weather={weather} />}
    </div>
  );
}

export default App;