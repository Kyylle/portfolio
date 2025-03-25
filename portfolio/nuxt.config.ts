// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/global.css'],
  plugins: ["~/plugins/fontawesome"],

  app: {
    head: {
      title: "Portfolio",
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || "http://localhost:8000",
    },
  },
})