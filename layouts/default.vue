<template>
  <div class="wp-app layout-3">
    <MainMenu />
    <div class="wrapper">
      <sideBar />
    </div>
    <nuxt />
  </div>
</template>

<script>
  import MainMenu from '../components/MainMenu.vue'
  import sideBar from '../components/sideBar.vue'
  export default {
    head() {
      return {
        title: "",
        meta: [
          { charset: 'utf-8' },
          { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
          { name: 'keywords', content: 'keyword 1, keyword 2'},
          { hid: 'description', name: 'description', content: 'This is the generic description.'}
        ],
        link: [
          { rel: 'icon', type:'image/png', href: '~/static/favicon.ico' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp' },
        ],
        script: [
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
        ]
      }
    },
    components: {
      MainMenu,
      sideBar
    }
  }
</script>

<style lang="scss">
// @import '~assets/lbd/css/lbd-bundle.css';
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
