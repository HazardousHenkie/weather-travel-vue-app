<template>
  <div id="DetailViewSingle">
    <div class="single_location__temp">
      <span v-if="$store.getters.fahrenheit" class="temp__text">
        {{ singleLocation.main && singleLocation.main.temp | round | fahrenheit }}
      </span>
      <span v-else class="temp__text">
        {{ singleLocation.main && singleLocation.main.temp | round }}
      </span>

      <span class="temp__symbol"> °{{ $store.getters.fahrenheitText }}</span>
    </div>

    <div class="single_location__weather_info">
      <span class="low">
        <font-awesome-icon icon="temperature-low" /> 
        <span v-if="$store.getters.fahrenheit" class="text">{{ singleLocation.main && singleLocation.main.temp_min | round | fahrenheit }}</span>
        
        <!-- Check if singleLocation.main is available first since temp_min is an object inside an object it won't be renedered instantly -->
        <span v-else class="text">{{ singleLocation.main && singleLocation.main.temp_min | round }}</span>
        <span class="temp__symbol"> °{{ $store.getters.fahrenheitText }}</span>
      </span>
      <span class="high">
        <font-awesome-icon icon="temperature-high" /> 
        <span v-if="$store.getters.fahrenheit" class="text">{{ singleLocation.main && singleLocation.main.temp_max | round | fahrenheit }}</span>
        <span v-else class="text">{{ singleLocation.main && singleLocation.main.temp_max | round }}</span>
        <span class="temp__symbol"> °{{ $store.getters.fahrenheitText }}</span>
      </span>
      <span class="humidity">
        <font-awesome-icon icon="tint" /> 
        <span class="text-humid">{{ singleLocation.main && singleLocation.main.humidity }} %</span>
      </span>
    </div>

    <div class="single_location__icon">
      <font-awesome-icon :icon="weatherIcon(weatherState)" />
    </div>

    <div class="single_location__weather">
      {{ weatherState }}
    </div>

    <div class="single_location__location">
      {{ singleLocation.name }}, {{ singleLocation.sys && singleLocation.sys.country }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailViewSingle',
    // Don't add them as a data object since these props are dynamic
    props: ['singleLocation', 'weatherState']
  }
</script>

<style lang="scss" scoped>
  .single_location {
    &__temp {
      display: flex;

      .temp__text {
        font-size: 4rem;
        line-height: 4rem;
      }
    }

    &__weather_info {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
      margin-top: 20px;

      svg {
        font-size: 1.5rem;
      }

      .text {
        margin-left: 5px;
      }

      .text-humid {
        margin-left: 14px;
      }
    }

    .temp__symbol {
      font-size: 1rem;
    }

    &__icon {
      text-align: center;
      margin-top: -50px;

      svg {
        font-size: 8rem;

        @media screen and (min-width: 576px) {
           font-size: 10rem;
        }
      }
    }
  
    &__weather {
      text-align: center;
      font-size: 1.3rem;
      line-height: 1.3rem;
      margin: 10px 0 5px;

      @media screen and (min-width: 576px) {
        font-size: 1.6rem;
        line-height: 1.6rem;
      }
    }

    &__location {
      text-align: center;
      font-size: 1.5rem;
      line-height: 1.5rem;

      @media screen and (min-width: 576px) {
        font-size: 2rem;
        line-height: 2rem;
      }
    }
  }
</style>
