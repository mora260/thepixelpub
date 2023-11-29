// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  extends: [],
  runtimeConfig: {},
  pages: true,
  modules: [],
  components: [],
  css: [],
  colorMode: {
    classSuffix: ''
  },
  pinceau: {
    studio: true
  },
  content: {
  },
  experimental: {
    inlineSSRStyles: false
  },
  typescript: {
    includeWorkspace: true
  },
  nitro: {
  },
})
