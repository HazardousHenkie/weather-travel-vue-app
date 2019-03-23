# weather-travel

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Information
This application aims to provide weather information for first-time travelers to Japan. Where it aims to provide weather information for a few key cities namely: Tokyo, Yokohama, Kyoto, Osaka, Sapporo, Nagoya.

### Information used technologies
This application has been build using, but not limited too, Vue (Vue CLI), HTML, CSS (SASS) and JavaScript with Yarn as a packagemanager and using ESlint as a lint checker.

### Dependencies
Main dependencies include, among ohter, Vuex, Vue router, Axios, FontAwesome, sass and moment.js

### Design/UI/UX choices
This application aims to provide information quickly and orderly.
It's set up so that the user can flow through the page from top to bottom with different sections that intend to give the user different information
We start out with a current location section. This section has been added so that a potential traveler already in Japan canWwhat the weather is like and adjust his itinerary for the day accordingly.
          
The next section shows the 6 popular destinations inside Japan and the current weather for those locations. Only basic information is shown and everything is clean and legible. If a user clicks the block the sections with the 5-day forecast are shown and the user scrolls to that.
The same block layout, excluding the icons, is used here to give the user a brief overview of the 5-day forecast.

For users wishing to visit another city not listed, they can search for any city they want with the search field. Once searched the current information for that city will be shown like the above sections.

The UI flow from top to bottom has been implemented to lead the user through the application and make it easy for him to use the application and find the information he needs.

Since this is an international application the user has the option to switch from Celcius to Fahrenheit and back.

Not all the information is displayed immediately since it might not be of use for every user but it:s easily and readily available when the user clicks the blocks or buttons.

The design is being kept simple and flat so that everything easily is seen and the right information can be found fast and to keep everything legible.
Colors are being used to accent important information and icons are being used to point the user to important parts of the applications while giving him visual information about the weather as well.
          
All buttons are being displayed in a conventional way and are easily identifiable as buttons. Block with links have visual indicators and hover effects to indicate they do something when the user clicks them. 

Basically everything should be to the point, easily identifable, easy to use/understand and legiable.
