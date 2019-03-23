<template>
  <div id="about">
    <div class="blue-background about-styling">
      <div class="container">
        <h1>About</h1>

        <h2>Information</h2>
        <p>
          This application aims to provide weather information for first-time travelers to Japan. Where it aims to provide weather information for a few key cities namely: Tokyo, Yokohama, Kyoto, Osaka, Sapporo, Nagoya.
        </p>
        <h2>Information used technologies</h2>
        <p>
          This application has been build using, but not limited too, Vue (Vue CLI), HTML, CSS (SASS) and JavaScript with Yarn as a packagemanager and using ESlint as a lint checker.
        </p>
        <h2>Dependencies</h2>
        <p>
          Main dependencies include, among ohter, Vuex, Vue router, Axios, FontAwesome, sass and moment.js
        </p>
        <h2>Design/UI/UX choices</h2>
        <p>
          This application aims to provide information quickly and orderly. <br />
          It's set up so that the user can flow through the page from top to bottom with different sections that intend to give the user different information <br />
          We start out with a current location section. This section has been added so that a potential traveler already in Japan can see what the weather is like and adjust his itinerary for the day accordingly. <br /> <br />
          
          The next section shows the 6 popular destinations inside Japan and the current weather for those locations. Only basic information is shown and everything is clean and legible. If a user clicks the block the sections with the 5-day forecast are shown and the user scrolls to that. <br />
          The same block layout, excluding the icons, is used here to give the user a brief overview of the 5-day forecast. <br /> <br /> 

          For users wishing to visit another city not listed, they can search for any city they want with the search field. Once searched the current information for that city will be shown like the above sections.<br /> <br />

          The UI flow from top to bottom has been implemented to lead the user through the application and make it easy for him to use the application and find the information he needs. <br /><br />

          Since this is an international application the user has the option to switch from Celcius to Fahrenheit and back. <br /> <br />

          Not all the information is displayed immediately since it might not be of use for every user but it:s easily and readily available when the user clicks the blocks or buttons.<br /> <br />

          The design is being kept simple and flat so that everything easily is seen and the right information can be found fast and to keep everything legible. <br />
          Colors are being used to accent important information and icons are being used to point the user to important parts of the applications while giving him visual information about the weather as well. <br />
          
          All buttons are being displayed in a conventional way and are easily identifiable as buttons. Block with links have visual indicators and hover effects to indicate they do something when the user clicks them. <br /><br />

          Basically everything should be <strong>to the point, easily identifable, easy to use/understand and legiable</strong>.
        </p>
      </div>
    </div>

    <router-link to="/" class="bottom-button bottom-button--modified"> <font-awesome-icon icon="home" /></router-link>
  </div>
</template>

<script>
  export default {
    name: 'about'
  }
</script>


<style lang="scss" scoped>
  .about-styling {
    color: $white;
    padding: 20px 0 50px;

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2.5rem;
      margin: 20px 0 5px;
    }
  }

  .bottom-button { 
    &--modified {
      background: $pink;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      text-align: center;

      &:hover {
        background: $white;

        svg {
          color: $blue;
        }
      }

      svg {
        color: $white;
        font-size: 1.5rem;
        margin-top: 10px;
      }
    }
  }
</style>