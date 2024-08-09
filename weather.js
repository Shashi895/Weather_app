const API_KEY="497efea7893c20ae26aeb0f261c982aa";
const API_URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search_boc=document.querySelector(".search input");
const search_btn=document.querySelector(".search button");
const weather_ic=document.querySelector(".weather-icon");
const card=document.querySelector(".card");

async function checkweather(city) {

    try {
        const api=await fetch(API_URL + city+ `&appid=${API_KEY}`);
        if(api.status==404)
        {
            document.querySelector('.erroe').style.display='block';
            document.querySelector('.weather').style.display='none';
        }
    else{
        const data=await api.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";
    if(data.weather[0].main=="Clouds")
    {
        weather_ic.src="images/clouds.png"
        card.style.background="linear-gradient(135deg,#161a18,#5b519e)";
        
    }
    else if(data.weather[0].main=="Rain")
        {
            weather_ic.src="images/rain.png"
            card.style.background="linear-gradient(135deg,#95cde4,#676479)";

        }
    else if(data.weather[0].main=="Drizzle")
            {
                weather_ic.src="images/drizzle.png"
                card.style.background="linear-gradient(135deg,#cbd6da,#676479)";

            }
            else if(data.weather[0].main=="Mist")
                {
                    weather_ic.src="images/mist.png"
                       card.style.background="linear-gradient(135deg,#f0f4f5,#2fb0f1)";

                }
                document.querySelector(".weather").style.display="block"
                document.querySelector('.erroe').style.display='none';
    }
        
    } catch (error) {
        console.log(error);
    }

}
search_btn.addEventListener("click",()=>{
    checkweather(search_boc.value);
})
// checkweather()

