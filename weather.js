class Weather{
    constructor(city, country){
        this.api= '0ddf3b8eb96e938d57b500fed2757184';
        this.city= city;
        this.country = country;
    }
    async getWeather(){
        const request = await fetch(` http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.api}`);
        const response = await request.json();
        return {
            id:response.name,
            country: response.sys.country,
            temp: Number(response.main.temp)  - 273.15 ,
            weather: response.weather,
            wind: response.wind,
            humidity: response.main.humidity,
        }
    }
    changeLocation(city, country){
        this.city = city;
        this.country = country;

    }
}


// This is a model response
// {"coord":{"lon":55.3,"lat":25.27},
// "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}]
// ,"base":"stations","main":{"temp":310.82,"pressure":1003,"humidity":45,"temp_min":310.15,"temp_max":311.15},"visibility":10000,
// "wind":{"speed":7.7,"deg":310},
// "clouds":{"all":0},"dt":1568723867,
// "sys":{"type":1,"id":7537,"message":0.0088,
// "country":"AE","sunrise":1568685921,"sunset":1568730112},"timezone":14400,
// "id":292223,"name":"Dubai","cod":200}