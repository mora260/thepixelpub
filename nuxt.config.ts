export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: [
    './base',
    '@nuxt-themes/alpine',
  ],

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ]
})
