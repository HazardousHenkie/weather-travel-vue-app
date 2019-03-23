// this component is used in every vue component so set it's being set up as a plugin
const fahrenheit = {
    //convert to fahrenheit
    filters: {
        fahrenheit: function (value) {
            if(!value & value != 0) {
              return ''
            }

            return Math.round(value * 9 / 5 + 32)
        }
    },

}

const Fahrenheit = {
    install(Vue) {
        Vue.mixin(fahrenheit);
    }
};
  
export default Fahrenheit;