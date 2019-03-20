<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar-style">
      <div class="container">
        <ul class="navbar-nav">
        
        </ul>
      </div>
    </nav>

    <CurrentLocation />
    <List />
  </div>
</template>

<script>
import CurrentLocation from './components/CurrentLocation.vue';
import List from './components/List.vue';

export default {
  name: 'app',
  data() {
    return {
     
    };
  },
  components: {
    CurrentLocation,
    List
  }
}
</script>


<style scoped>

</style>