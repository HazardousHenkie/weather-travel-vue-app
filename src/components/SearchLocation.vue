<template>
    <div id="CurrentLocation" class="current_location">
        <div class="container">
        <form @submit.prevent="processForm" class="form-styles">
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" v-model="search" name="prefecture" placeholder="Prefecture">
            </div>
            <div class="col">
                <button type="submit" class="btn btn-primary">Search</button>
            </div>
          </div>
        </form> 


            <section v-if="errored">
              <p>We're sorry, we're not able to retrieve this information at the moment, please try again later.</p>
            </section>

         {{this.weatherData }}

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CurrentLocation',
  data() {
    return {
      search: "",
      weatherData: "",
      errored: false
    }
  },
  methods: {
    processForm: function() {
        this.getWeather(this.search)
    },
    getWeather(searchString) {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + searchString + '&?units=metric&appid=442885e71a45358b44c91f4c3f89be34')
        .then(response => {
          this.weatherData = response.data
          this.errored = false
        })
        .catch(error => {
            console.log(error)
            this.errored = true
        })
    }
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
