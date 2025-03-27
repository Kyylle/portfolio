// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/global.css'],
  plugins: ["~/plugins/fontawesome"],

  ssr: false,
  app: {
    head: {
      title: "Portfolio",
    },
    baseURL: '/portfolio/' // Replace with your GitHub repo name
  },
  nitro: {
    prerender: {
      routes: ['/'] // Ensure the homepage is pre-rendered
    }
  },
  
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || "http://localhost:8000",
    },
  },
})