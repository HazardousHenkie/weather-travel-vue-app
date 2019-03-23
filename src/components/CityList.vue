<template>
  <div id="cityList">
    <div class="black-background">
      <div class="container custom-container gray-background">
        <h2 class="title">Where are you going next?</h2>
    
        <List v-if='weatherData && !errored' :weatherState="weatherData" />

        <section v-if="errored" class="alert alert-danger">
          <p>{{ errorMessage }}</p>
        </section>
      </div>
    </div>
    
    <DetailViewMultiple />
  </div>

</template>

<script>
  import axios from 'axios'
  import DetailViewMultiple from './DetailViewMultiple.vue'
  import List from './List.vue'

  export default {
    name: 'CityList',
    data() {
      return {
        weatherData: "",
        errored: false,
        errorMessage: "",
        //6 city id's of which the weather report is always shown
        cityIds: [1850147,1848354,1857910,1853909,1856057,2130404]
        
      }
    },
    components: {
      DetailViewMultiple,
      List
    },
    methods: {
      getCurrentWeather: function() {
        axios.get('https://api.openweathermap.org/data/2.5/group?id='+ this.cityIds.toString() +'&units=metric&appid=442885e71a45358b44c91f4c3f89be34')
        .then(response => {
          this.weatherData = response.data.list
        })
        .catch(error => {
          console.log(error)
          this.errored = true
          this.errorMessage = "We're sorry, we're not able to retrieve this information at the moment, please try again later."
        });
      }
    },
    mounted () {
      //get weather data when everything has been mounted
      this.getCurrentWeather()
    }
  }
</script>