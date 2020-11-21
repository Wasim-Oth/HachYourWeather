import React , {useState} from 'react';
import Search from './Search';
import CityDetails from './cityDetails';

const CityWeather = () => { 
    const [cityWeather, setCityWeather] = useState([]);
    const [cityName, setCityName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [valedCityName, setValidCity] = useState(false)

    const FetchWeatherData = async(e) => {
        try{
        e.preventDefault();
        setLoading(true)
        const key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric` ;
        const res = await fetch (url);
        const data = await res.json();

        if (data.cod >=400) {
            setValidCity(true)
        } else {  
            setValidCity(false)
            setCityWeather([data, ...cityWeather])
        }

        } catch (err) {
            console.error(err)
            setError(true);

        } finally {
            setLoading(false);
            setCityName("");
          }

    }
    
    const InputValue = (event) => setCityName(event.target.value);
    
    const deleteCity = (key) => {
        const newCityWeather= [...cityWeather];
        newCityWeather.splice(key, 1);
        setCityWeather(newCityWeather);
      };

    return (
        <div>
            <Search change={InputValue} cityname={cityName} fetch={FetchWeatherData}  /> 
            {error && <h4> Sorry! we were not able to process your request, please try again later </h4> }
            {loading && <h4>Loading...</h4>}
            {valedCityName ? <h4> Please enter a vaild city name </h4> : 
            <> 
                {cityWeather.map((city, i) => <CityDetails
                    key={i}
                    props={{
                        city,
                        deleteCity,
                        key:i
                       }}/>
                    )}
            </>  
            }

        </div>
    )
}

export default CityWeather;
