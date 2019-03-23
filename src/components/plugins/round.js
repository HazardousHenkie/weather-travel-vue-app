// this component is used in every vue component so set it's being set up as a plugin
const round = {
    //round up or down numbers
    filters: {
        round: function (value) {
            if (!value) {
              return ''
            }
      
            return Math.round(value)
        }
    }
}

const Round = {
    install(Vue) {
        Vue.mixin(round);
    }
};
  
export default Round;