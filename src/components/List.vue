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
      
        <div class="row custom_row_margin">
          <div class="col-md-3 weather_block" v-for="item in weatherData" :key="item.id">
            <div class="card custom_card">
              <div class="card-header card_header_custom">
                <h3 class="card_header_custom__title">{{item.name}}</h3>
              </div>
              <div class="card-body card_custom_body ">
                <h4>{{item.weather[0].main}}</h4>
                <img :src="'http://openweathermap.org/img/w/' +  item.weather[0].icon  + '.png'" />

                <div class="card_custom_body__temperature">

                  
                  <font-awesome-icon icon="thermometer-half" /> <span class="temperature_number">{{ item.main.temp  | round }}</span> &#8451;
                </div>

                <div class="card_custom_body__additional">
                  min <font-awesome-icon icon="temperature-low" fixed-width />{{item.main.temp_min}}
                  max <font-awesome-icon icon="temperature-high" fixed-width /> {{item.main.temp_max}}
                  humid <font-awesome-icon icon="tint" fixed-width />{{item.main.humidity}}
                </div>

here{{ $store.getters.fahrenheit }}


                <a class="btn btn-primary" @click='setWidgetData(item.id, item.name)'>test</a></div> 
              </div>
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
      errored: false
    }
  },
    components: {
      DetailView
  },
  filters: {
    round: function (value) {
      if (!value) {
        return ''
      }

      return Math.round(value)
    }
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
;
<style lang="scss" scoped>
  .custom_row_margin {
    margin: 15px 0;
  }
  .weather_block {
    margin: 15px 0;
  }
  
  .custom_card {
    -webkit-box-shadow: 0px 0px 23px -3px rgba(0,0,0,0.17);
    -moz-box-shadow: 0px 0px 23px -3px rgba(0,0,0,0.17);
    box-shadow: 0px 0px 23px -3px rgba(0,0,0,0.17);
    border: 0;
    text-align: center;

    .card_header_custom {
      background-color: $orange;

      &__title {
        color: $black;
      }
    }

    .card_custom_body {
      background: $gray;
      color: $black;
      
      &__temperature {
        display: flex;
        justify-content: center;

        svg {
          font-size: 1.4rem;
          align-self: center;
          margin-right: 5px;
        }

        .temperature_number {
          font-size: 3rem;
          line-height: 3rem;
        }
      }
    }
  }

</style>
