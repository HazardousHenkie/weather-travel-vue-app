import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        cityName: "",
        clickedId: "",
        fahrenheit: false
      },
      mutations: {
        changeCityName(state, cityName) {
          state.cityName = cityName
        },
        changeClickedId(state, clickedId) {
            state.clickedId = clickedId
        },
        changeToFahrenheit(state, fahrenheit) {
          state.fahrenheit = fahrenheit
        }
      },
      getters: {
        fahrenheit: state => state.fahrenheit
      }
})