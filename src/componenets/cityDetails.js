import React from 'react';

const CityDetails = ({props}) => {
    return ( 
       <div>
           {props.isLoading && <h4>Loading...</h4>}
           {props.city.cod === '404' && <h3 style={{color: "red"}}> Please enter vaild city name</h3> }
           {props.city.length === 0  && null } 
           {(props.city.length !== 0 && props.city.cod !== '404') && <>
            <div className= 'container'>  
                    <h2> {props.city.name}, {props.city.sys.country}  </h2>
                    <h3> {props.city.weather[0].main}</h3>
                    <p>  {props.city.weather[0].description}</p>
                    <p>  min temp: {props.city.main.temp_min}</p>
                    <p>  max temp: {props.city.main.temp_max}</p>
                    <p>  location: {props.city.coord.lon}, {props.city.coord.lat}</p>
            </div>
            </>}
        </div>
 )
}

export default CityDetails