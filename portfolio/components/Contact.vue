<template>
  <section class="contact-section">
    <div class="min-h-screen flex items-center justify-center px-6">
      <div
        class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <!-- Left Side: Contact Information -->
        <div class="text-white">
          <h2 class="text-3xl font-extrabold mb-4">CONTACT</h2>
          <p class="mb-6 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div class="mb-6">
            <h3 class="text-lg font-bold">Address</h3>
            <p class="text-gray-400">
              532, Tower-84, Space IT-Park, Sohna Road, Gurgaon-122018
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-bold">Phone</h3>
            <p class="text-gray-400">+91 913-919-3104</p>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-bold">Email</h3>
            <p class="text-gray-400">info@nomazdigital.com</p>
          </div>

          <!-- Social Icons -->
          <div class="flex space-x-4 mt-6">
            <a
              v-for="social in socialIcons"
              :key="social.name"
              :href="social.link"
              target="_blank"
              class="w-10 h-10 flex items-center justify-center rounded-full transition transform hover:scale-110"
              :style="{ backgroundColor: social.color }"
            >
              <component :is="social.icon" class="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div
          class="bg-indigo-500/40 p-6 rounded-lg shadow-lg w-full max-h-[500px] mt-10 backdrop-blur-md"
        >
          <h2 class="text-2xl font-bold mb-4 text-white text-center">
            GET IN TOUCH
          </h2>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label
                class="block text-gray-300 text-sm font-bold mb-1"
                for="name"
                >Name</label
              >
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="w-full p-2 bg-[#1E234F] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div class="mb-3">
              <label
                class="block text-gray-300 text-sm font-bold mb-1"
                for="email"
                >Email</label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full p-2 bg-[#1E234F] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div class="mb-3">
              <label
                class="block text-gray-300 text-sm font-bold mb-1"
                for="phone"
                >Phone number</label
              >
              <input
                type="text"
                id="phone"
                v-model="form.phone"
                class="w-full p-2 bg-[#1E234F] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div class="mb-3">
              <label
                class="block text-gray-300 text-sm font-bold mb-1"
                for="message"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="3"
                class="w-full p-2 bg-[#1E234F] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full p-2 mt-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
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

// Form data
const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form.value);
  form.value = { name: "", email: "", phone: "", message: "" };
};

const socialIcons = [
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
    name: "Twitter",
    icon: Twitter,
    link: "https://twitter.com",
    color: "#1DA1F2",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com",
    color: "#0D1117",
  },
];
</script>
