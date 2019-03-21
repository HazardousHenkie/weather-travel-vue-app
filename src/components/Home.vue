<template>
  <div id="home">
    <CurrentLocation />
    <List />
    <SearchLocation />
  </div>
</template>

<script>
import CurrentLocation from './CurrentLocation.vue';
import List from './List.vue';
import SearchLocation from './SearchLocation.vue';

export default {
  name: 'home',
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