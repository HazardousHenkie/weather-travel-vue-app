<template>
  <div id="list">
    <div class="row no-gutters">
      <div class="weather_block" :class="[!details ? 'weather_block--hover' : '', block ? 'col-md-2 col-6 col-sm-4' : 'col-md-6 col-lg-3']" v-for="item in weatherState" :key="item.id">
        <div class="weather_block__temp">
          <span v-if="$store.getters.fahrenheit" class="temp__text">
            {{ item.main && item.main.temp | round | fahrenheit }}
          </span>
          <span v-else class="temp__text">
            {{ item.main && item.main.temp | round }}
          </span>

          <span class="temp__symbol"> °{{ $store.getters.fahrenheitText }}</span>
        </div>

        <div class="weather_block__weather_info">
          <span class="low">
            <font-awesome-icon icon="temperature-low" /> 
            <span v-if="$store.getters.fahrenheit" class="text">{{ item.main && item.main.temp_min | round | fahrenheit }}</span>
            <span v-else class="text">{{ item.main && item.main.temp_min | round }}</span>
            <span class="temp__symbol"> °{{ $store.getters.fahrenheitText }}</span>
          </span>
          <span class="high">
            <font-awesome-icon icon="temperature-high" /> 
            <span v-if="$store.getters.fahrenheit" class="text">{{ item.main && item.main.temp_max | round | fahrenheit }}</span>
            <span v-else class="text">{{ item.main && item.main.temp_max | round }}</span>
            <span class="temp__symbol"> °{{ $store.getters.fahrenheitText }}</span>
          </span>
          <span class="humidity">
            <font-awesome-icon icon="tint" /> 
            <span class="text-humid">{{ item.main && item.main.humidity }} %</span>
          </span>
        </div>

        <div v-if="!block" class="weather_block__icon">
          <font-awesome-icon :icon="weatherIcon(item.weather[0].main)" />
        </div>

        <div class="weather_block__weather" :class="{'weather_block__weather--small-block' : block}" >
          {{ item.weather[0].main }}
        </div>

        <div v-if="!details" class="weather_block__location">
          <span v-if="item.name == 'Ebetsu'">
            Sapporo
          </span>
          <span v-else>
            {{ item.name }}
          </span>
        </div>

        <div v-if="details" class="weather_block__date">
          {{ item.dt | moment("dddd HH:mm") }}
        </div>
        
        <div v-if="!details" class="read-more">
          <font-awesome-icon icon="chevron-down" class="read-more-svg" /> 
        </div>

        <span v-if="!details">
          <a class="link_full_width" v-scroll-to="'#detailViewMultiple'" @click='setWidgetData(item.id, item.name)'></a>
        </span>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: 'List',
    props: ['weatherState', 'noDetails', 'smallBlock'],
    data() {
      return {
        // data won't change so set props as local data
        block: this.smallBlock,
        details: this.noDetails
      }
    },
    methods: {
      setWidgetData: function(id, cityName) 
      {
        this.$store.commit('changeClickedId', id)
        this.$store.commit('changeCityName', cityName)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .weather_block {
    color: $white;
    border-left: 1px solid $black;
    border-right: 1px solid $black;
    border-bottom: 2px solid $black;
    padding: 25px 20px;

    &--hover {
      &:hover {
        background: $black;

        .read-more {
          .read-more-svg {
            color: $blue;
          }
        }
      }
    }
    
    &__temp {
      display: flex;
      color: $pink;

      .temp__text {
        font-size: 3rem;
        line-height: 3rem;
      }
    }

    &__weather_info {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      margin-top: 10px;

      svg {
        font-size: 1rem;
      }

      .text {
        margin-left: 5px;
      }

      .text-humid {
        margin-left: 11px;
      }
    }

    &__icon {
      text-align: center;
      color: $pink;

      svg {
        font-size: 5rem;

        @media screen and (min-width: 576px) {
           font-size: 6rem;
        }
      }
    }

    &__weather {
      text-align: center;
      font-size: 1rem;
      line-height: 1rem;
      margin: 8px 0 3px;

      @media screen and (min-width: 576px) {
        font-size: 1rem;
        line-height: 1rem;
      }

      &--small-block {
        color: $pink;
        font-size: 1.4rem;
        line-height: 1.4rem;
        margin-bottom: 10px;
      }
    }

    &__location {
      text-align: center;
      font-size: 1.2rem;
      line-height: 1.2rem;

      @media screen and (min-width: 576px) {
        font-size: 1.6rem;
        line-height: 1.6rem;
      }
    }
 
    &__date {
      text-align: left;
      font-size: 1.2rem;
      line-height: 1.2rem;
    }

    .read-more {
      text-align: center;
      margin-top: 15px;

      .read-more-svg {
        text-align: center;
        color: $pink;
        font-size: 1.5rem;
      }
    }
  }

  .link_full_width {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
