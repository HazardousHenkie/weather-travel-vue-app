<template>
    <div id="CurrentLocation" class="current_location">
        <div class="container">
            <section v-if="errored">
              <p>We're sorry, we're not able to retrieve this information at the moment, please try again later.</p>
            </section>

            <h2>Current weather forecast for current city</h2>

            <h3 class="current_location__title">
              {{ currentLocation.name }}
            </h3>

            <div class="current_location__information">
              {{ currentLocation.main && currentLocation.main.temp }}°C
              {{ currentLocation.weather && currentLocation.weather[0].main }}
            </div>

           
             
            <div v-show="geolocationError">
                {{ geolocationError }}

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CurrentLocation',
  data() {
    return {
      geolocationError: "",
      currentLocation: "",
      errored: false
    }
  },
  methods: {
    geolocation() {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon='  + position.coords.longitude + '&units=metric&appid=442885e71a45358b44c91f4c3f89be34')
          .then(response => {
             this.currentLocation = response.data
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
        },
        error => {
           if (error.code == error.PERMISSION_DENIED) {
              this.geolocationError = "Gelocation permission wasn't given"
           } else {
              this.geolocationError = "Geolocation couldn't be retreived" + error
           }
        })
      }
    }
  },
  beforeMount() {
    this.geolocation()
  }
}
</script>

<style lang="scss" scoped>
  .current_location {
    background-color: $orange;
    border-bottom: 1px solid $gray;

    &__title {
      font-size: 1rem;
      color: $white;
    }
  
  }
</style>
