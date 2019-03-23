<template>
  <div id="detailViewMultiple">
    <div class="black-background">
      <div class="container custom-container gray-background">
         <transition name="fade" mode="out-in">
          <div v-if="!errored" v-show="singleWeatherData" key="one">
            <h2 class="title">
              Weather in 
              
              <span v-if="clickedCity == 'Ebetsu'">
                Sapporo
              </span>
              <span v-else>
                {{ clickedCity }}
              </span>
            </h2>
            
            <!-- Don't show this part if data isn't ready yet and pass all props -->
            <List v-if='singleWeatherData' :weatherState="singleWeatherData.list" :smallBlock="true" :noDetails="true" />
          </div>
        </transition>

        <section v-if="errored" class="alert alert-danger">
          <p>{{ errorMessage }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import List from './List.vue'

  export default {
    name: 'DetailViewMultiple',
    data() {
      return {
        singleWeatherData: "",
        singleWeatherArray: [],
        errored: false,
        errorMessage: ""
      }
    },
    components: {
      List
    },
    computed: {
      clickedId () {
        return this.$store.state.clickedId 
      },
      clickedCity () {
        return this.$store.state.cityName 
      }
    },
    watch: {
      // Watch for an id change so we can open the extra information section. We are watching here since the click function/html is inside another component
      clickedId: function (cityId) {
        this.openWidget(cityId, this.clickedCity)
      }
    },
    methods: {
      openWidget: function(id, cityName) 
      {
        // Don't call the API everytime we need information. Below it's stored in an array and we check if it exist in that array before calling the function
        if(this.singleWeatherArray[cityName] !== undefined) {
          this.singleWeatherData = this.singleWeatherArray[cityName]
        }
        else {
          axios.get('https://api.openweathermap.org/data/2.5/forecast?id=' + id + '&units=metric&appid=442885e71a45358b44c91f4c3f89be34')
          .then(response => {
            this.singleWeatherArray[response.data.city.name] = response.data
            this.singleWeatherData = response.data
          })
          .catch(error => {
            console.log(error)
            this.errored = true
            this.errorMessage = "We're sorry, we're not able to retrieve this information at the moment, please try again later."
          })
        }
      }
    }
  }
</script>

