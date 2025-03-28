<template>
  <section class="about-section pt-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-[#00FD37]">{{ aboutTitle }}</h1>
        <p class="text-white mt-4">{{ aboutSubtitle }}</p>
      </div>
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/3 mb-10 md:mb-0 flex justify-center">
          <img :src="about.profile_image" alt="Profile Image"
            class="w-48 h-48 sm:w-60 sm:h-60 md:w-[22rem] md:h-[22rem] object-contain rounded-lg shadow-lg" />
        </div>
        <div class="md:w-3/5 md:pl-12">
          <p class="text-white text-2xl md:text-4xl leading-relaxed">
            {{ intro }}
          </p>
          <h1 class="text-[#00FD37] text-5xl md:text-6xl font-bold leading-relaxed">
            {{ about.full_name }}
          </h1>
          <p class="text-white text-regular leading-relaxed mt-4">
            {{ about.description}}
          </p>
          <div class="mt-6 flex justify-center md:justify-start">
            <button
              class="border border-[#00FD37] text-[#00FD37] px-5 py-2 rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-[#00FD37] hover:text-black transition duration-300">
              <span class="text-xl">❮ ❯</span> {{ buttonText }}
            </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <a v-for="(stat, index) in stats" :key="index" href="#"
          class="bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-800 flex flex-col">
          <div class="flex flex-row items-center justify-between w-full">
            <div class="bg-gray-800 p-3 rounded-full flex items-center justify-center w-16 h-16">
              <img :src="stat.icon" :alt="stat.label" class="w-8 h-8" />
            </div>
            <span class="text-white text-4xl font-bold">{{ stat.value }}</span>
          </div>
          <h2 class="text-white text-lg font-semibold mt-4">
            {{ statLabels[index] }}
          </h2>
          <p class="text-gray-400 text-sm">{{ statDescriptions[index] }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
const aboutTitle = ref("About Me");
const aboutSubtitle = ref(
  "Transforming Ideas and Building Innovative Digital Solutions"
);

const intro = ref("Hello, I'm");
const fullname = ref("Kyle Khezier");
const about_description = ref(["Need a robust web application? I offer full-stack development services, specializing in Vue.js, React, and Node.js.",
  "With expertise in building dynamic and scalable platforms,",
  "I ensure efficient and maintainable solutions.",
  "I also provide UI/UX design using Figma to create intuitive and user-friendly interfaces,",
  "delivering a seamless user experience."]);

const buttonText = ref("View Projects");
const statLabels = ref([
  "TOTAL PROJECTS",
  "CERTIFICATES",
  "YEARS OF EXPERIENCE",
]);

const statDescriptions = ref([
  "Continuous learning journey",
  "Professional skills validated",
  "Innovative web solutions crafted",
]);

const about = ref({
  intro: "" || intro,
  full_name: "" || fullname,
  description: "" || about_description.value.join(" "),
  profile_image:"/images/profile_about_Me.png",
  total_projects: 0 || 2,
  certificates: 0 || 0,
  years_experience: 0 || 0,
});

const stats = computed(() => [
  {
    icon: "/images/icon_projects.png",
    value: about.value.total_projects,
  },
  {
    icon: "/images/icon_cert.png",
    value: about.value.certificates,
  },
  {
    icon: "/images/icon_experience.png",
    value: about.value.years_experience,
  },
]);

const fetchAbout = async () => {
  try {
    const response = await fetch("http://localhost:8000/about");
    const data = await response.json();
    about.value = { ...about.value, ...data };
  } catch (error) {
    console.error("Error fetching About data:", error);
  }
};

onMounted(fetchAbout);
</script>
