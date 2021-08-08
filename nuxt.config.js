const serverPort = 3004;
const serverHost = "localhost";
const headTitle = "ISEF-LSEUOL";
const sentryDsn = "https://e0d69cc336c14237b067ee65f3e9bd1b@o373043.ingest.sentry.io/5871612";
const recaptchaKey = "6Ldh1qgbAAAAAEGnyLH5zTqXUxp6ZY7qwPoVxBrD";
const yandexMetrikaId = "83123536";
const apiUrl = "https://isef-lseuol.ac";

// baseURL: 'https://isef-lseuol.ac/api/v1'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tailwind-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // IF YOU TOUCH THERE, I'LL KILL YOU!!! (Murodkhuja)
    //  baseURL: process.env.BASE_URL || apiUrl + '/api/v1/'
     baseURL: 'https://isef-lseuol.ac/api/v1/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
