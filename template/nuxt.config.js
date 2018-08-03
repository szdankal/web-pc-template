const pkg = require('./package')

module.exports = {

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },
  router: {
    // middleware: ['wx-login']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },

  /*
   ** Global CSS
   */
  css: [
    'assets/styles/app.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: 'plugins/plugins.js', ssr: false },
    { src: 'plugins/vuex-persistedstate.js' },
  ],
  transition: {
    name: 'router-fade',
    mode: 'out-in',
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
