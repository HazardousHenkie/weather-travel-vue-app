<template>
  <div id="app">
    <nav class="navbar navbar-expand pink-background custom-navbar-style">
      <router-link to="/" class="navbar-brand" href="#"><img class="main-logo" src="@/assets/main-logo.png"/></router-link>

      <a v-if="$route.path == '/'" class="btn btn btn-primary fahrenheit_button" @click='setFahrenheit()'>Change to °{{ buttonText }}</a>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        buttonText: "F"
      }
    },
    methods: {
      setFahrenheit: function() 
      {
        this.$store.commit('changeToFahrenheit', !this.$store.getters.fahrenheit)
        
        if(this.$store.getters.fahrenheit) {
          this.buttonText = "C"
          this.$store.commit('changeFahrenheitText', "F")
        }
        else {
          this.buttonText = "F"
          this.$store.commit('changeFahrenheitText', "C")
        }
      }
    },
    computed: {

    }
  }
</script>


<style lang="scss" scoped>
  a.fahrenheit_button {
    cursor: pointer;
    background: $gray;
    color: $white;
    text-align: center;
    margin-left: auto;
    border: 0;

    &:hover {
      background: $white;
    }

  //  &:active,
    &:not(:disabled):not(.disabled):active {
      color: $black;
      background-color: $white;
    }
  }

  .main-logo {
    max-width: 150px;

    @media screen and (min-width: 576px) {
      max-width: 200px;
    }
  }
</style>