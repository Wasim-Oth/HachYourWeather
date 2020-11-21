import React from 'react';

const CityDetails = ({props}) => {
    const {city, deleteCity, key} = props;    
    const icon = city.weather[0].icon;

    return ( 
        <div className='container'>
             <div className = 'city_container' >
                <button className='delete_btn' title='Remove' onClick={ () => deleteCity(key)}> x </button>
                
                <div className='pic_temp'>
                    <img className='weather_icon' src= {`http://openweathermap.org/img/w/${icon}.png`} />
                    <h3> {city.main.temp} °C </h3> 
                </div>

                <h2> {city.name}, {city.sys.country} </h2>
                <h3> {city.weather[0].main} </h3>
                <p>  {city.weather[0].description}  </p>
                <p>  min temp: {city.main.temp_min} °C </p>
                <p>  max temp: {city.main.temp_max} °C </p>
                <p>  location: {city.coord.lon}, {city.coord.lat} </p>
            </div>
        </div>
      
 )
}

export default CityDetails