<template>
  <div id="list">
    <div class="container">
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try again later.</p>
      </section>

      <transition name="fade" mode="out-in">
      <div v-show="singleWeatherData" key="one">
          test
         {{ $store.getters.cityName }}



        <div v-for="weatherInfo in singleWeatherData.list" :key="weatherInfo.id">
          <!-- {{ weatherInfo.main.temp }} -->
          {{ weatherInfo.weather[0].main }}

          {{ weatherInfo.dt_txt }}
        </div>

      </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DetailView',
  data() {
    return {
      singleWeatherData: "",
      singleWeatherArray: [],
      errored: false
    }
  },
   computed: {
    clickedId () {
      return this.$store.getters.clickedId 
    }
  },
   watch: {
    clickedId: function (cityId) {
      this.openWidget(cityId, this.singleCityName)
    }
  },
  methods: {
    openWidget: function(id, cityName) 
    {
      if(this.singleWeatherArray[cityName] !== undefined) {
        this.singleWeatherData = this.singleWeatherArray[cityName]
        this.singleCityName = cityName
      }
      else {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?id=' + id + '&appid=442885e71a45358b44c91f4c3f89be34')
        .then(response => {
          this.singleWeatherArray[response.data.city.name] = response.data
          this.singleWeatherData = response.data
          this.singleCityName = response.data.city.name
        })
        .catch(error => {
            console.log(error)
            this.errored = true
        })
      }
    }
  }
}
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
