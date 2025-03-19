<template>
  <header
    class="fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 text-white"
    :class="{
      'backdrop-blur-xl bg-white/10 shadow-lg border-b border-white/20': !isScrolled,
      'backdrop-blur-md bg-black/30 shadow-md border-b border-gray-600': isScrolled
    }"
  >
    <nav class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl md:text-3xl font-extrabold tracking-wide text-white relative right-[-50px]">DevK</h1>
      <ul class="flex gap-10 text-base md:text-l font-medium text-white relative left-[-50px]">
        <li v-for="section in sections" :key="section.id">
          <a
            :href="'#' + section.id"
            @click.prevent="scrollToSection(section.id)"
            class="hover:text-gray-300 transition duration-300"
          >
            {{ section.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>


<script setup>
import { ref } from "vue";
import { useWindowScroll } from "@vueuse/core";

const sections = ref([
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" }
]);

const { y } = useWindowScroll(); // Track scroll position
const isScrolled = ref(false);

watch(y, (newY) => {
  isScrolled.value = newY > 50; // Apply effect when scrolled 50px down
});

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
