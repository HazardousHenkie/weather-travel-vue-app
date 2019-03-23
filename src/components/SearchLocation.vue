<template>
  <div id="CurrentLocation" class="single_location blue-background">
    <div class="fluid-container">
      <div class="container custom-container">
        <h2 class="title title--no-border">Going somwhere else? Search by location!</h2>
        <form @submit.prevent="processForm" class="custom_form">
          <div class="form-row">
            <div class="text">
              <input type="text" class="form-control text-input" v-model="search" name="Search" placeholder="Search">
            </div>
            <div class="btn">
                <button type="submit" class="btn btn-primary btn-input">Search</button>
            </div>
          </div>
        </form>
      </div>

      <div v-if="!errored" id="detailViewSingle">
        <transition name="fade" mode="out-in">
          <div v-show="weatherData" key="one">
            <div class="single_location__date">
              {{ new Date() | moment("dddd, MMM D") }}
            </div>

            <detailViewSingle v-if="weatherData && weatherState" :singleLocation="weatherData" :weatherState="weatherState" />
          </div>
        </transition>
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
  import VueScrollTo from 'vue-scrollto'
  import DetailViewSingle from './DetailViewSingle.vue'

  export default {
    name: 'CurrentLocation',
    data() {
      return {
        search: "",
        weatherData: "",
        weatherState: "",
        errored: false,
        errorMessage: ""
      }
    },
    components: {
      DetailViewSingle
    },
    methods: {
      processForm: function() {
          this.getWeather(this.search)
          VueScrollTo.scrollTo("#detailViewSingle")
      },
      getWeather(searchString) {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + searchString + '&units=metric&appid=442885e71a45358b44c91f4c3f89be34')
        .then(response => {
          this.weatherData = response.data
          this.weatherState = response.data.weather[0].main
          this.errored = false
        })
        .catch(error => {
          console.log(error)
          this.errored = true
          this.errorMessage = "We're sorry, we're not able to retrieve this information at the moment, please try again later."
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .custom_form {
    margin-bottom: 20px;

    .text {
      width: calc(100% - 80px);

      .text-input  {
        height: 40px;
        border: 0;
        border-radius: 0;
      }
    }

    .btn {
      width: 80px;
      width: 80px;
      padding: 0;
      height: 40px;
      border: 0;
      border-radius: 0;

      .btn-input {
        width: 100%;
        background: $pink;
      }
    }
  }
</style>
