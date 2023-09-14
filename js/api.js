class DataApi {
    constructor() {

    }

    setAllData(cityName) {
        console.log(cityName);
        this.setCurrent(cityName);
    }

    async setCurrent(cityName) {

        let url = `http://api.weatherapi.com/v1/forecast.json?key=4fc41325cbdf41c9be955806231409&q=${cityName}&days=7&aqi=yes&alerts=no`;
        const res = await fetch(url);
        const data = await res.json();

        let current = data.current;
        let forecast = data.forecast;

        // set name
        boxCity.querySelector('#city-name').innerHTML = data.location.name;

        // set current degree
        boxCity.querySelector('#d').innerHTML = current.temp_c;

        // set weather mode


        // set last update time
        boxCity.querySelector('#last-update').innerHTML = current.last_updated;

        // set air quality
        // set co2
        airAndAstro.querySelector('#value-co2').innerHTML = current.air_quality.co;
        // set o3
        airAndAstro.querySelector('#value-o3').innerHTML = current.air_quality.o3;
        // set no2
        airAndAstro.querySelector('#value-no2').innerHTML = current.air_quality.no2;
        // set so2
        airAndAstro.querySelector('#value-so2').innerHTML = current.air_quality.so2;
        // set pm25
        airAndAstro.querySelector('#value-pm25').innerHTML = current.air_quality.pm2_5;
        // set pm10
        airAndAstro.querySelector('#value-pm10').innerHTML = current.air_quality.pm10;

        
        let today = forecast.forecastday[0];
        // set astro info
        // set sunrise
        airAndAstro.querySelector('#value-sunrise').innerHTML = today.astro.sunrise;

        // set sunrise
        airAndAstro.querySelector('#value-sunset').innerHTML = today.astro.sunset;


        // set other info
        // set humidity
        other.querySelector('#value-humidity').innerHTML = current.humidity;

        // set wind speed
        other.querySelector('#value-wind').innerHTML = current.wind_kph;

        // set pressure
        other.querySelector('#value-pressure').innerHTML = current.pressure_mb;

        // set max degree
        other.querySelector('#value-max-degree').innerHTML = today.day.maxtemp_c;
        
        // set min degree
        other.querySelector('#value-min-degree').innerHTML = today.day.mintemp_c;

        // set min fells like degree
        other.querySelector('#value-feels-like').innerHTML = current.feelslike_c;


        console.log(data);
        console.log();
    }

    async getData() {
        let url = "http://api.weatherapi.com/v1/current.json?key=4fc41325cbdf41c9be955806231409&q=İstanbul&aqi=yes";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        return data;
    }
}