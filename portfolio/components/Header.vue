<template>
    <header class="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md z-50">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">DevK</h1>
        <ul class="flex gap-6">
            <li v-for="section in sections" :key="section.id">
            <a :href="'#' + section.id" @click.prevent="scrollToSection(section.id)" class="hover:text-gray-400">{{ section.label }}</a>
            </li>
        </ul>
      </nav>
    </header>
  </template>

  <script setup>
  import { ref } from 'vue';

  const sections = ref([
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  </script>

  <style scoped>
  html {
    scroll-behavior: smooth;
  }
  </style>
  