<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar-style">
      <div class="container">
        <ul class="navbar-nav">
        
        </ul>

           <a class="btn btn-primary" @click='setFahrenheit()'>test</a>
      </div>
    </nav>

    <CurrentLocation />
    <List />
    <SearchLocation />
  </div>
</template>

<script>
import CurrentLocation from './components/CurrentLocation.vue';
import List from './components/List.vue';
import SearchLocation from './components/SearchLocation.vue';

export default {
  name: 'app',
  data() {
    return {
     
    };
  },
  components: {
    CurrentLocation,
    List,
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

</style>