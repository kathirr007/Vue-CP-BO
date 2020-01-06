/* eslint-disable */
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/jquery'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
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
  ],
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
    /*
    ** You can extend webpack config here
    */
    devtools: true, //enable Vue devtools
    extend(config, ctx) {
    },
  },
};
