class Storage{
    constructor() {
        this.city;
        this.country;
        this.deafultCity = 'New York';
        this.deafultCountry = 'USA';
    }
    getLocationData(){
        if(localStorage.getItem('city')=== null){
            this.city = this.deafultCity;
           
        }
        else{
            this.city = localStorage.getItem('city')

        }
        if(localStorage.getItem('country')=== null){
            this.country = this.deafultCountry;
        }
        else{
            this.country = localStorage.getItem('country')

        }
        return {
            city: this.city,
            country: this.country
        }
        
    }
    setLocationData(city, country){
        localStorage.setItem('city',city);
        localStorage.setItem('country',country);
    }
}