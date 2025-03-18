<template>
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  </template>
  
  <script setup>
  import Home from '@/components/Home.vue';
  import About from '@/components/About.vue';
  import Portfolio from '@/components/Portfolio.vue';
  import Contact from '@/components/Contact.vue';

  definePageMeta({
  layout: "default",
});
  </script>
  
  <style scoped>
  /* Ensure smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  </style>
  