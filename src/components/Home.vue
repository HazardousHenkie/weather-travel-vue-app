<template>
  <div id="home">
    <div class="blue-background">
      <div class="container">
          <h1 class="main-title">Weather in Japan</h1>
      </div>
    </div>

    <CurrentLocation />
    <CityList />
    <SearchLocation />

    <router-link to="/about" class="bottom-button"> <font-awesome-icon icon="info-circle" /></router-link>
  </div>
</template>

<script>
  import CurrentLocation from './CurrentLocation.vue';
  import CityList from './CityList.vue';
  import SearchLocation from './SearchLocation.vue';

  export default {
    name: 'home',
    components: {
      CurrentLocation,
      CityList,
      SearchLocation
    },
    methods: {
      setFahrenheit: function() 
      {
        this.$store.commit('changeToFahrenheit', true)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-title {
    padding: 15px 0;
    color: $white;
    text-align: center;
  }
</style>