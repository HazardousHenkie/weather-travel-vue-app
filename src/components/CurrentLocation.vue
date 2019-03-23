<template>
  <div id="CurrentLocation" class="single_location blue-background">
    <div class="fluid-container">
      <div v-if="!errored">
        <div class="single_location__date">
          {{ new Date() | moment("dddd, MMM D") }}
        </div>

        <!-- Don't show this part of data isn't ready yet -->
        <detailViewSingle v-if="currentLocation && weatherState" :singleLocation="currentLocation" :weatherState="weatherState" />

        <div class="single_location__location_text">       
          (<font-awesome-icon icon="map-marker-alt" /> current location)
        </div>
      </div>

      <div class="container">
        <section v-if="errored" class="alert alert-danger">
          <p>{{ errorMessage }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import DetailViewSingle from './DetailViewSingle.vue'

  export default {
    name: 'CurrentLocation',
    data() {
      return {
        errorMessage: "",
        currentLocation: "",
        errored: false,
        weatherState: ""
      }
    },
    components: {
      DetailViewSingle
    },
    methods: {
      geolocation() {
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon='  + position.coords.longitude + '&units=metric&appid=442885e71a45358b44c91f4c3f89be34')
            .then(response => {
              this.currentLocation = response.data
              this.weatherState = response.data.weather[0].main
            })
            .catch(error => {
              console.log(error)
              this.errored = true
              this.errorMessage = "We're sorry, we're not able to retrieve this information at the moment, please try again later."
            })
          },
          error => {
            if (error.code == error.PERMISSION_DENIED) {
              this.errorMessage = "Gelocation permission wasn't given"
            } else {
              this.errorMessage = "Geolocation couldn't be retreived" + error
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
  .single_location {
    color: $white;
    padding: 5px 20px 40px;

    &__location_text {
      margin-top: 8px;
      text-align: center;
      font-size: 0.8rem;

      svg {
        font-size: 0.7rem;
      }
    }
  }
</style>
