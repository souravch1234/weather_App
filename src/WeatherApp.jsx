import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
        city:"wonderland",
        feelsLike : 36.05,
        humidity : 89,
        temp : 29.05,
        tempMax : 29.05,
        tempMin : 29.05,
        weather  : "mist"
});

let updateInfo = (newInfo)=>{
   setWeatherInfo(newInfo);
}
    return(
        <div style={{textAlign:"center"}}>
            <h2>
                Weather app by delta
            </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}