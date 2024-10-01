const apiKey = "0adc7ed02cb33b942e50edeedd091747";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const resp = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await resp.json();

   if(resp.status == 404){
        document.querySelector(".weather").innerHTML = "<br><h2>Error : Invalid city name</h2> <br><br> <h3>Please enter valid city name</h3 >";
   }else{
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>o</sup>C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "rain"){
        weatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
   }   
}

searchBtn.addEventListener("click",() => {
    checkWeather(searchBox.value);
    searchBox.value ="";
});