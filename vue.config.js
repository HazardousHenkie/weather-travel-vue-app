module.exports = {
  //public path for github deploy
  publicPath: process.env.NODE_ENV === 'production'
  ? '/weather-travel/'
  : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/resources.scss";`
      }
    }
  }
};
