// this component is used in every vue component so it's being set up as a plugin
const weatherIcon = {
    methods: {
        //switch to show an icon when there is a specific weather state
        weatherIcon: function(weatherState) {
            switch(weatherState) {
            case "Clear":
                return "sun"
            case "Clouds":
                return "cloud"
            case "Rain":
                return "cloud-showers-heavy"             
            case "Thunderstorm":
                return "bolt"
            case "Snow":
                return "cloud-meatball"
            case "Drizzle":
                return "cloud-rain"
            case "Smoke":
            case "Ash":
            case "Sand":
            case "Haze":   
            case "Fog":
            case "Dust":    
            case "Mist":
                return "smog"
            case "Snow":
                return "smog"
            case "Tornado":
            case "wind":
                return "wind"    
            default:
                return "question"
            }
        }
    }
}

const WeatherIcon = {
    install(Vue) {
        Vue.mixin(weatherIcon);
    }
};
  
export default WeatherIcon;