import React from "react";

const CityDetails = ({ props }) => {
  const { city, isLoading } = props;
  return (
    <div>
      {isLoading && <h4>Loading...</h4>}
      {city.cod >= 400 && (
        <h3 style={{ color: "red" }}> Please enter vaild city name</h3>
      )}
      {city.cod < 400 && (
        <>
          <div className="container">
            <h2>
              {city.name}, {city.sys.country}
            </h2>
            <h3> {city.weather[0].main}</h3>
            <p> {city.weather[0].description}</p>
            <p> min temp: {city.main.temp_min}</p>
            <p> max temp: {city.main.temp_max}</p>
            <p>
              location: {city.coord.lon}, {city.coord.lat}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CityDetails;
