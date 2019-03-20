<template>
  <div id="list">
    <div class="container">
        <div class="row">
          <div class="col-md-12">
            <section v-if="errored">
              <p>We're sorry, we're not able to retrieve this information at the moment, please try again later.</p>
            </section>
          </div>
        </div>
      
        <div class="row">
          <div class="col-md-3 weather_block" v-for="item in weatherData" :key="item.id">

            <h3 class="weather_block__title">{{item.name}}</h3>

            <div class="weather_block__weather">{{item.weather[0].main}}</div>
            
            temperature <font-awesome-icon icon="thermometer-half" fixed-width /> {{item.main.temp}}
            min <font-awesome-icon icon="temperature-low" fixed-width />{{item.main.temp_min}}
            humidity <font-awesome-icon icon="temperature-high" fixed-width /> {{item.main.temp_max}}
            {{item.main.humidity}}

            <img :src="'http://openweathermap.org/img/w/' +  item.weather[0].icon  + '.png'" />

            <a class="btn btn-primary" @click='setWidgetData(item.id, item.name)'>test</a>
          </div>
        </div>
        <DetailView />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailView from './DetailView.vue'

export default {
  name: 'List',
  data() {
    return {
      weatherData: "",
      singleWeatherData: "",
      singleWeatherArray: [],
      singleCityName: "",
      errored: false
    }
  },
    components: {
      DetailView
  },
  methods: {
    setWidgetData: function(id, cityName) 
    {
      this.$store.commit('changeClickedId', id)
      this.$store.commit('changeCityName', cityName)
    },
    getCurrentWeather: function() {
      axios.get('https://api.openweathermap.org/data/2.5/group?id=1850147,1848354,1857910,1853909,1856057,2130404&units=metric&appid=442885e71a45358b44c91f4c3f89be34')
      
      .then(response => {
        this.weatherData = response.data.list
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      });
    }
  },
  mounted () {
    this.getCurrentWeather()
  }
}
</script>

<style scoped>

</style>
