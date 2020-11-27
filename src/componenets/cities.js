import React, { useState } from "react";
import Search from "./Search";
import CityDetails from "./cityDetails";

const CityWeather = () => {
  const [city, setCity] = useState([]);
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const FetchWeatherData = () => {
    setLoading(true);
    const key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCity(data))
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  function Change(event) {
    setCityName(event.target.value);
  }

  return (
    <div>
      <Search Change={Change} Fetch={FetchWeatherData} />

      {isError ? (
        <h4> Sorry! we were not able to process your request </h4>
      ) : (
        <CityDetails
          props={{
            city,
            loading
          }}
        />
      )}
    </div>
  );
};

export default CityWeather;
