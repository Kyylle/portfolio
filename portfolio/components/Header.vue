<template>
  <header
    class="fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 text-white"
    :class="{
      'backdrop-blur-xl bg-white/10 shadow-lg border-b border-white/20': !isScrolled,
      'backdrop-blur-md bg-black/30 shadow-md border-b border-gray-600': isScrolled
    }"
  >
    <nav class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl md:text-3xl font-extrabold tracking-wide text-white ml-10">DevK</h1>
      <ul class="flex gap-10 text-base md:text-lg font-medium text-white mr-10">
        <li v-for="section in sections" :key="section.id">
          <a
            :href="'#' + section.id"
            @click.prevent="scrollToSection(section.id)"
            class="transition duration-300 pb-1 border-b-2"
            :class="{
              'text-[#00FD37] border-[#00FD37]': activeSection === section.id,
              'hover:text-gray-300 border-transparent': activeSection !== section.id
            }"
          >
            {{ section.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useWindowScroll } from "@vueuse/core";
import { useDebounceFn } from "@vueuse/core";

const sections = ref([
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" }
]);

const { y } = useWindowScroll(); // Track scroll position
const isScrolled = ref(false);
const activeSection = ref("home"); // Default active section

watch(y, (newY) => {
  isScrolled.value = newY > 50; // Change header style when scrolled
  updateActiveSection();
});

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    activeSection.value = id; // Set active section when clicked
  }
};

const updateActiveSection = () => {
  let currentSection = "home"; // Default to home
  const navbarHeight = document.querySelector("header").offsetHeight; // Get navbar height
  const viewportTop = navbarHeight + 50; // Adjust detection threshold

  sections.value.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= viewportTop && rect.bottom >= viewportTop) {
        currentSection = section.id;
      }
    }
  });

  activeSection.value = currentSection;
};

const debouncedUpdateActiveSection = useDebounceFn(updateActiveSection, 100);

onMounted(() => {
  updateActiveSection();
  window.addEventListener("scroll", debouncedUpdateActiveSection);
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
