class DataApi {
    constructor() {
        this.months = [
            "Oca", "Şub", "Mar",
            "Nis", "May", "Haz",
            "Tem", "Ağu", "Eyl",
            "Eki", "Kas", "Ara"
        ];

        this.days = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];

        this.airItems = ['co', 'o3', 'no2', 'so2', 'pm2_5', 'pm10'];

        this.codes = {
            "1000": ["sun", "moon", "Açık"],
            "1003": ["cloudSun", "cloudMoon", "Parçalı Bulutlu"],
            "1006": ["cloud", "cloud", "Bulutlu"],
            "1009": ["cloud", "cloud", "Bulutlu"],
            "1030": ["cloudFog", "cloudFog", "Sisli"],
            "1063": ["cloudDrizzleSunAlt", "cloudDrizzleMoonAlt", "Yağmur İhtimali"],
            "1066": ["cloudSnowSun", "cloudSnowMoon", "Kar İhtimali"],
            "1069": ["cloudDrizzleSnowSun", "cloudDrizzleSnowMoon", "Sulu Kar İhtimali"],
            "1072": ["cloudSnow", "cloudSnow", "Çiseleme İhtimali"],
            "1087": ["cloudLightningSun", "cloudLightningMoon", "Gök Gürültülü"],
            "1114": ["cloudSnow", "cloudSnow", "Karlı"],
            "1117": ["cloudSnowAlt", "cloudSnowAlt", "Kar Fırtınası"],
            "1135": ["cloudFog", "cloudFog", "Sisli"],
            "1147": ["cloudFogAlt", "cloudFogAlt", "Sisli"],
            "1150": ["cloudDrizzleAlt", "cloudDrizzleAlt", "Çiseleyen Yağmur"],
            "1153": ["cloudDrizzleAlt", "cloudDrizzleAlt", "Çiseleyen Yağmur"],
            "1168": ["cloudFogAlt", "cloudFogAlt", "Don Olayı"],
            "1171": ["cloudFogAlt", "cloudFogAlt", "Don Olayı"],
            "1180": ["cloudDrizzleSun", "cloudDrizzleMoon", "Hafif Yağmurlu"],
            "1183": ["cloudDrizzle", "cloudDrizzle", "Hafif Yağmurlu"],
            "1186": ["cloudDrizzleSun", "cloudDrizzleMoon", "Orta Yağmurlu"],
            "1189": ["cloudDrizzle", "cloudDrizzle", "Orta Yağmurlu"],
            "1192": ["cloudRainSun", "cloudRainMoon", "Sağanak Yağış"],
            "1195": ["cloudRain", "cloudRain", "Sağanak Yağış"],
            "1198": ["cloudFog", "cloudFog", "Dondurucu Yağmurlu"],
            "1201": ["cloudFog", "cloudFog", "Dondurucu Yağmurlu"],
            "1204": ["cloudDrizzleSnow", "cloudDrizzleSnow", "Sulu Kar"],
            "1207": ["cloudDrizzleSnow", "cloudDrizzleSnow", "Sulu Kar"],
            "1210": ["cloudSnowSunAlt", "cloudSnowMoonAlt", "Hafif Karlı"],
            "1213": ["cloudSnowAlt", "cloudSnowAlt", "Hafif Karlı"],
            "1216": ["cloudSnowSunAlt", "cloudSnowMoonAlt", "Karlı"],
            "1219": ["cloudSnowAlt", "cloudSnowAlt", "Karlı"],
            "1222": ["cloudSnowSunAlt", "cloudSnowMoonAlt", "Karlı"],
            "1225": ["cloudSnowAlt", "cloudSnowAlt", "Karlı"],
            "1237": ["cloudHailAlt", "cloudHailAlt", "Dolu Yağışı"],
            "1240": ["cloudDrizzle", "cloudDrizzle", "Hafif Sağanak"],
            "1243": ["cloudRainSun", "cloudRainMoon", "Sağanak"],
            "1246": ["cloudRainSun", "cloudRainMoon", "Sağanak"],
            "1249": ["cloudDrizzleSnowSun", "cloudDrizzleSnowMoon", "Hafif Sulu Kar"],
            "1252": ["cloudDrizzleSnowSun", "cloudDrizzleSnowMoon", "Sulu Kar"],
            "1255": ["cloudSnowSunAlt", "cloudSnowMoonAlt", "Hafif Karlı"],
            "1258": ["cloudSnowSunAlt", "cloudSnowMoonAlt", "Karlı"],
            "1261": ["cloudHailAltSun", "cloudHailAltMoon", "Hafif Dolu Yağışı"],
            "1264": ["cloudHailAltSun", "cloudHailAltMoon", "Dolu Yağışı"],
            "1273": ["cloudLightningRainSun", "cloudLightningRainMoon", "Hafif Gök Gürültülü Sağanak"],
            "1276": ["cloudLightningRain", "cloudLightningRain", "Gök Gürültülü Sağanak"],
            "1279": ["cloudLightningSnowSun", "cloudLightningSnowMoon", "Hafif Gök Gürültülü Kar"],
            "1282": ["cloudLightningSnow", "cloudLightningSnow", "Gök Gürültülü Kar"]
        }
    }

    async setAllData(cityName) {
        try {


            let url = `http://api.weatherapi.com/v1/forecast.json?key=4fc41325cbdf41c9be955806231409&q=${cityName}&days=7&aqi=yes&alerts=no`;
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('HTTP Hatası: ' + response.status);
            }
            const data = await res.json();

            let current = data.current;
            let forecast = data.forecast.forecastday;
            let today = forecast[0];

            // set name
            boxCity.querySelector('#city-name').innerHTML = data.location.name;

            // set current degree
            boxCity.querySelector('#d').innerHTML = current.temp_c;

            // set current weather mode
            setIdIcons('today-info', await this.findIcon(current.condition.code, current.is_day));
            document.querySelector('#w-mode').innerHTML = await this.findText(current.condition.code);

            // set last update time
            boxCity.querySelector('#last-update').innerHTML = current.last_updated;


            // set air quality
            let air_item;
            let airBox;
            for (let i = 0; i < 6; i++) {
                air_item = this.airItems[i];
                airBox = airAndAstro.querySelector('#value-' + air_item);
                airBox.innerHTML = current.air_quality[air_item];

            }

            // set astro info
            // set sunrise
            setIdIcons('sunrise', 'sunriseAlt');
            airAndAstro.querySelector('#value-sunrise').innerHTML = today.astro.sunrise;

            // set sunrise
            setIdIcons('sunset', 'sunsetAltFill');
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


            // set daily hours info
            for (let i = 0; i < 22; i += 3) {
                hours.querySelector('#value-h' + i).innerHTML = today.hour[i].temp_c;
                setIdIcons('h' + i, await this.findIcon(today.hour[i].condition.code, today.hour[i].is_day));
            }


            // set days of week
            let selectedDay;
            let selectedDayBox;
            for (let i = 0; i < 7; i++) {
                selectedDay = forecast[i];
                selectedDayBox = dayBoxes[i];

                // set icon
                setIdIcons('day-' + i, await this.findIcon(selectedDay.day.condition.code, 1));

                // set degree
                selectedDayBox.querySelector('.degree').innerHTML = `${selectedDay.day.maxtemp_c}° ${selectedDay.day.mintemp_c}°`;

                // set date
                selectedDayBox.querySelector('.day-name').innerHTML = await this.createDate(selectedDay.date_epoch);
            }

        } catch (error) {
            alert(cityName + " Bulunamadı!"); 
            console.error('Hata:', error);
        }
    }

    async findIcon(code, isDay) {
        isDay = (isDay === 1) ? 0 : 1;
        return this.codes[code][isDay];
    }

    async findText(code) {
        return this.codes[code][2];
    }

    async createDate(date_epoch) {

        let normalDate = new Date(date_epoch * 1000);
        let formattedDate = normalDate.getDate() + " " + this.months[normalDate.getMonth()] + " " + this.days[normalDate.getDay()];
        return formattedDate;
    }
}