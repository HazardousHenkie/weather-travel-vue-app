import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        cityName: "",
        clickedId: ""
      },
      mutations: {
        changeCityName(state, cityName) {
          state.cityName = cityName
        },
        changeClickedId(state, clickedId) {
            state.clickedId = clickedId
        }
      },
      getters: {
        cityName: state => state.cityName,
        clickedId: state => state.clickedId
      }
})