<template>
  <section class="about-section pt-24">
    <div class="container mx-auto px-4">
      <!-- About Me Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-[#00FD37]">{{ aboutTitle }}</h1>
        <p class="text-white mt-4">{{ aboutSubtitle }}</p>
      </div>

      <!-- About Me Content -->
      <div class="flex flex-col md:flex-row items-center">
        <!-- Profile Image -->
        <div class="md:w-1/3 mb-10 md:mb-0 flex justify-center">
          <img
            :src="profileImage"
            alt="Profile Image"
            class="w-48 h-48 sm:w-60 sm:h-60 md:w-[22rem] md:h-[22rem] object-contain rounded-lg shadow-lg"
          />
        </div>

        <!-- About Text -->
        <div class="md:w-2/3 md:pl-12">
          <p class="text-white text-2xl md:text-4xl leading-relaxed">
            {{ introduction }}
          </p>
          <h1
            class="text-[#00FD37] text-5xl md:text-6xl font-bold leading-relaxed"
          >
            {{ fullName }}
          </h1>
          <p class="text-white text-regular leading-relaxed mt-4">
            {{ aboutDescription }}
          </p>

          <!-- View Projects Button -->
          <div class="mt-6 flex justify-center md:justify-start">
            <button
              class="border border-[#00FD37] text-[#00FD37] px-5 py-2 rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-[#00FD37] hover:text-black transition duration-300"
            >
              <span class="text-xl">❮ ❯</span> {{ buttonText }}
            </button>
          </div>
        </div>
      </div>

      <!-- Statistics Cards Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <!-- Dynamic Statistic Cards -->
        <a
          v-for="stat in stats"
          :key="stat.id"
          href="#"
          class="bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-800 flex flex-col"
        >
          <div class="flex flex-row items-center justify-between w-full">
            <div
              class="bg-gray-800 p-3 rounded-full flex items-center justify-center w-16 h-16"
            >
              <img :src="stat.icon" :alt="stat.label" class="w-8 h-8" />
            </div>
            <span class="text-white text-4xl font-bold">{{ stat.value }}</span>
          </div>
          <h2 class="text-white text-lg font-semibold mt-4">
            {{ stat.label }}
          </h2>
          <p class="text-gray-400 text-sm">{{ stat.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// About Section Data
const aboutTitle = ref("About Me");
const aboutSubtitle = ref("Transforming Ideas and Building Innovative Digital Solutions");
const profileImage = ref("/images/profile_about_Me.png");
const introduction = ref("Hello, I’m");
const fullName = ref("Kyle Khezier");
const aboutDescription = ref(
  "I started as the weakest E-rank hunter, barely surviving in dungeons while others looked down on me. But everything changed when I entered a mysterious double dungeon. After a near-death experience, I awakened a unique ability called the 'System,' allowing me to level up and grow stronger."
);
const buttonText = ref("View Projects");

// Dynamic Statistics
const stats = ref([
  {
    id: 1,
    icon: "/images/icon_projects.png",
    value: 10,
    label: "TOTAL PROJECTS",
    description: "Innovative web solutions crafted",
  },
  {
    id: 2,
    icon: "/images/icon_cert.png",
    value: 5,
    label: "CERTIFICATES",
    description: "Professional skills validated",
  },
  {
    id: 3,
    icon: "/images/icon_experience.png",
    value: 3,
    label: "YEARS OF EXPERIENCE",
    description: "Continuous learning journey",
  },
]);
</script>
