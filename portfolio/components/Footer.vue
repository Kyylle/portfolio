<template>
  <footer class="text-white text-center p-6 mt-10 relative">

    <!-- Social Media Icons -->
    <div class="flex justify-center space-x-6 mb-3 relative">
      <div
        v-for="social in socialIcons"
        :key="social.name"
        class="relative group"
      >
        <!-- Tooltip (Icon Name) -->
        <div
          v-if="hoveredIcon === social.name"
          class="absolute bottom-14 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded-md text-white"
          :style="{ backgroundColor: social.color }"
        >
          {{ social.name }}
        </div>

        <!-- Icon -->
        <a
          :href="social.link"
          target="_blank"
          class="p-3 rounded-lg transition transform hover:scale-110 flex items-center justify-center"
          @mouseover="hoveredIcon = social.name"
          @mouseleave="hoveredIcon = null"
          :style="{
            backgroundColor:
              hoveredIcon === social.name
                ? social.hoverColor || social.color
                : '#1E2235',
          }"
        >
          <component
            :is="social.icon"
            :size="24"
            :style="{
              color: hoveredIcon === social.name ? '#ffffff' : 'inherit',
            }"
          />
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <p class="text-sm opacity-80">DevK | All rights reserved 2025</p>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-vue-next";

// Define hover state for each icon
const hoveredIcon = ref(null);

// Icon data with brand colors
const socialIcons = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com",
    color: "#151A30",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://linkedin.com",
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://instagram.com",
    color: "#E1306C",
  },
  {
    name: "YouTube",
    icon: Youtube,
    link: "https://youtube.com",
    color: "#FF0000",
  },
  {
    name: "Facebook",
    icon: Facebook,
    link: "https://facebook.com",
    color: "#1877F2",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    link: "https://twitter.com",
    color: "#1DA1F2",
  },
];
</script>