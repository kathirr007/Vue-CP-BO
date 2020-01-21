/* eslint-disable */
const webpack = require("webpack");

module.exports = {
  server: {
    // port: 3100, // default 3000
    port: process.env.PORT || 3200,
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    scripts: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // '@assets/lbd/css/lbd-bundle.css',
    '@assets/lbd/css/bootstrap.min.css',
    '@assets/lbd/css/bootstrap-table.min.css',
    '@assets/lbd/css/font-awesome.min.css',
    // '@assets/lbd/css/jquery-ui.min.css',
    '@assets/lbd/css/jquery.mCustomScrollbar.min.css',
    '@assets/lbd/css/material-icons.css',
    // '@assets/lbd/css/jquery-ui-1.8.20.custom.css',
    // '@assets/lbd/lib/plugins-bundle.css',
    '@assets/sass/light-bootstrap-dashboard.scss',
    // '@assets/sass/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/jquery'
    // '~/plugins/lbd-bundle.js',
    '~plugins/js/jquery-ui-1.10.0.custom.min.js',
    '~plugins/js/jquery-ui-slider.min.js',
    '~plugins/js/jquery.validate.min.js',
    '~plugins/js/jquery-mousewheel.js',
    '~plugins/js/jquery.mCustomScrollbar.js',
    '~/plugins/custom.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Simple usage
    // '@nuxtjs/moment',

    // With options
    ['@nuxtjs/moment', { /* module options */ }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // proxy module
    // https://www.npmjs.com/package/@nuxtjs/proxy
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    // your settings here
    // scss: ['./assets/sass/main.scss']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
  },

  /*
    ** Proxy settings
    */
  proxy: {
    // '/missions?': 'http://contentplace.x1.fr/missions?',
    // 'http://localhost:3100/missions?': 'http://contentplace.x1.fr',
    /* '/missions': {
      target: 'http://contentplace.x1.fr/missions?client_secret=%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi&mission_status=ongoing',
      pathRewrite: { '^/missions': '' },
    }, */
  },
  /*
  ** Build configuration
  */
  /* enable Vue devtools */
/*   vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  }, */
  /* enable Vue devtools ends*/
  build: {
    /* styleResources: {
      // your settings here
      scss: ['./assets/sass/main.scss']
    }, */
    /**
     * add external plugins
     */
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
      })
    ],
    /*
    ** You can extend webpack config here
    */
    devtools: true, //enable Vue devtools
    extend(config, ctx) {
    },

  },
};
