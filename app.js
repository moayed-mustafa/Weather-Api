// create an Icon liberary
const Icons= [{
    sunny: `<i class = 'fas fa-sun'></i>`,
    cloudy: `<i class="fas fa-cloud"></i>`,
    brokenClounds: `<i class="fas fa-cloud-meatball"></i>`,
    windy: `<i class="fas fa-wind"></i>`,
    rainy: `<i class="fas fa-cloud-rain"></i>`,
    snow: `<i class="far fa-snowflake"></i>`,
    bolt: `<i class="fas fa-bolt"></i>`,
    cloudSun: `<i class="fas fa-cloud-sun"></i>`,
    // figure out a way to add a dust icon
    dust: ``,
    wind: `<i class="fas fa-wind"></i>`
}]
// instaniate the storage class
const storage = new Storage;
// get stored location data
const weatehrLocation = storage.getLocationData();
console.log(weatehrLocation);
// instaniate the weatehr class
const weather = new Weather(weatehrLocation.city, weatehrLocation.country);
// weather.changeLocation('DUBAI', 'UAE')

// instantiate the UI class
const ui = new UI;
const changeLocation = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');
const weatherMethod = ()=>{   
            weather.getWeather()
            .then(res =>{
                // console.log(res)
                // console.log(res.humidity)
                ui.showWeather(res)
                ui.addIcon(res, Icons)
    })
    // catch an error here
    .catch(err => console.log(err));
        }
        // change location methosd
        const newLocation = ()=>{
            changeLocation.addEventListener('click', ()=>{
                document.getElementById('change-location').style.display = 'block';
                // change the location here
                
                closeBtn.addEventListener('click' ,(e) => {
                    e.preventDefault()
                    let city = document.getElementById('city').value; 
                    let country = document.getElementById('country').value;
                    // seting the city and country values to local storage
                    storage.setLocationData(city,country);
                    // displaying the weatehr on the ui 
                    weather.changeLocation(city, country);
            weatherMethod();
              
                    document.getElementById('change-location').style.display = 'none';
                      // clear the input fields
                city= '' ;
                country = '';
                })
            })
            
        }
        newLocation();
        
        window.addEventListener('DOMContentLoaded', weatherMethod )

        
   

// This is the way to access a value from the object inside of the weather array.
//     console.log(res.weather[0].description);
