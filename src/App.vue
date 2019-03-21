<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar-style">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">home</router-link>
          </li>
          <li class="nav-item">
             <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>

        <a class="btn btn-primary" @click='setFahrenheit()'>test</a>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
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