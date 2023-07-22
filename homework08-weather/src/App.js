import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [town, setTown] = useState('');

  const key = 'a4c065f24d8b6403dc757b8eec2628c1';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`;

  const searchWeather = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
      })
      setTown('');
    }
  }
  return (
    <div className="app">
      <div className="inp-field">
        <input type="text"
          value={town}
          onChange={(event) => setTown(event.target.value)}
          placeholder="Enter location"
          onKeyDown={searchWeather} />
      </div>
      <div className="container">
        <div className="header">
          <div className="city">
            <p>{data.name}</p>
          </div>
        </div>
        <div className="temp">
          {data.main ? (
            <h1>
              {data.main.temp.toFixed()}
              °C
            </h1>
          ) : null}
        </div>
        <div className="desc">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
      {data.name !== undefined
        && (
          <div className="footer">
            <div className="feels">
              {data.main ? (
                <p className="bold">
                  {data.main.feels_like.toFixed()}
                  °C
                </p>
              ) : null}
              <p>Відчувається як</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold">
                  {data.main.humidity}
                  %
                </p>
              ) : null}
              <p>Вологість</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">
                  {`${data.wind.speed} `}
                  М/С
                </p>
              ) : null}
              <p>Вітер</p>
            </div>
          </div>
        )}
    </div>
  );
}

export default App;
