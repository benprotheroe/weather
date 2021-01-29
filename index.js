// const maps = ()=>{loader.load().then(function (google) {
//     const map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: -34.397, lng: 150.644},
//         zoom: 8,
//     });
// })
// };
// maps();

// fetch the API to get the weather data for london
//"https://www.metaweather.com/api/location/44418/"

// import { Backend } from "./backend.js"

class Backend{
    constructor() {
        this.baseUrl = ""
    }

    setBaseUrl(baseUrl){
        this.baseUrl = baseUrl;
    }

    get(endpoints){
        return fetch(this.baseUrl+endpoints) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.json())
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
    }
}

const weather = new Backend;
weather.setBaseUrl("https://api.weatherapi.com/v1/current.json?key= 6e1d028ccb944323bb4150319212701&q=");
//const weatherInfo = weather.get("london");
const form = document.querySelector("#add-item-form")
const selectLocation = document.querySelector("#item-name")
console.log(selectLocation);





//const setLocation = (location)=>{
   // return document.querySelector("#location-select").innerHTML = location;
// }

//setLocation("london");

const getLocationWeather = () => {
    form.addEventListener("submit", event => {
        event.preventDefault();
        console.log(selectLocation.value);
        weather.get(selectLocation.value)
            .then(data => {
                document.querySelector("#location-name").textContent = "Name: " + data.location.name;
                document.querySelector("#location-region").textContent = "region: " + data.location.region;
                document.querySelector("#location-country").textContent = "country: " + data.location.country;
                document.querySelector("#location-local-time").textContent = "Local Time: " + data.location.localtime;
                document.querySelector("#the-temp").textContent = "The Temperature: " + data.current.temp_c + "C";
                document.querySelector("#wind-speed").textContent = "Wind Speed: " + data.current.wind_mph + "mph";
                document.querySelector("#wind-direction").textContent = "Wind Direction: " + data.current.wind_dir;
                document.querySelector("#weather-state-name").textContent = "weather state: " + data.current.condition.text;
                document.querySelector("#weather-state-name").insertAdjacentHTML("beforeend", `<img src="${data.current.condition.icon}">`);
                console.log(data);
            })
    })
}



//console.log(setLocation("new York"));


//const weatherKeys = weatherInfo.then(data=> Object.keys(data));
//console.log(weatherKeys);
//const trggerg = []

//console.log(trggerg);
//function getWeather() {

//weatherInfo
//.then(data => Object.keys(data.current).forEach(key => {
// trggerg.push(key);
//       })
//   );
//return trggerg;
//}

//console.log(trggerg)

//const getWeatherState = ()=>{
//return weatherInfo
//.then(data => {
// document.querySelector("#weather-state-name").textContent = "weather state: " + data.current.condition.text;
// document.querySelector("#weather-state-name").insertAdjacentHTML("beforeend",`<img src="${data.current.condition.icon}">`);
//})
//} 

//document.querySelector("#weather-state-name").insertAdjacentHTML("beforeend",`<img src="${data.current.condition.icon}">`);

//console.log(getWeather());

/* const getTheTemp = () => {
    return weatherInfo
        .then(data => document.querySelector("#the-temp").textContent = "The Temperature: " + data.current.temp_c) + "C";

}

const getWindSpeed = () => {
    return weatherInfo
        .then(data => document.querySelector("#wind-speed").textContent = "Wind Speed: " + data.current.wind_mph) + "mph";
 */
//}


getLocationWeather();
//getWeatherState();
//getWindSpeed();
//getTheTemp();

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159297.3500573775!2d41.046337474456074!3d37.890619074517666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400b46fc6e630ad3%3A0x8fba52e2fe61162e!2sBatman%2C%20Batman%20Merkez%2FBatman%2C%20Turkey!5e0!3m2!1sen!2suk!4v1611849196952!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101921.71768637413!2d-9.01603371608571!3d37.03236646731831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b4c17d26b1a2d%3A0x500ebbde490b750!2sSagres%2C%20Portugal!5e0!3m2!1sen!2suk!4v1611850771401!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.9730569949!2d139.60077990439535!3d35.66816252436279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2suk!4v1611850830367!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
