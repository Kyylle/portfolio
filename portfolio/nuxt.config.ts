export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/global.css'],
  plugins: ["~/plugins/fontawesome"],

  ssr: false, // Ensure static site generation (important for GitHub Pages)
  app: {
    head: {
      title: "Portfolio",
    },
    baseURL: '/portfolio/', 
    cdnURL: '', 
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || "http://localhost:8000",
    },
  },
})