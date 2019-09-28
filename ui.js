class UI{
    constructor(){
        this.weatehrCard = document.querySelector('.weather')
    }
    showWeather(data){

        let output = '';
        output += `
        <div id= 'card'>
        <span >
        <h3 class = 'inline'>${data.id} ${data.country}, Temperature: ${data.temp.toFixed(2)} C&#176</h3> 
        </span>
        <hr>
        <span id='weather-description'>
        Weather Description:
        <br>
        <span>Humidity:${data.humidity}</span>
        ${data.weather[0].main}, 
        ${data.weather[0].description}
        </span>
        <hr>
        <span id= 'wind'>
        Wind Speed:
        <br>
        ${data.wind.speed} km/h
        </span>
        </div>
        `
      this.weatehrCard.innerHTML = output;
    }
    // add icons to the weather card from the icons liberary
    addIcon(data, iconLiberary){
        iconLiberary.forEach(icons =>{
            const iconSpace = document.getElementById('weather-description');
            // try to loop througth the dectionary and figure out a way to change the icon dynamically
            let weatherDescription = data.weather[0].main;
            switch(weatherDescription){
                case 'Rain':
                iconSpace.innerHTML+= icons.rainy;
                 break;
                 case 'Clear': 
                 iconSpace.innerHTML+= icons.sunny;
                 break;
                 case 'Fog': 
                 iconSpace.innerHTML+= icons.cloudy;
                 break;    
                 case 'Snow': 
                 iconSpace.innerHTML+= icons.snow;
                 break;   
                 case 'Dust':
                 iconSpace.innerHTML+= icons.dust;
                 break;
                 case  'Clouds':
                 iconSpace.innerHTML += icons.brokenClounds;
                 break;

            }
            // wind icon shows in all cases
            const windIconSpace = document.getElementById('wind');
            windIconSpace.innerHTML+= icons.wind;
            
        })

    }
}