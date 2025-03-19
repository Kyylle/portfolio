<template>
    <section class="min-h-screen flex items-center pt-24">
      <div class="container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between">
        <!-- Left Text Content -->
        <div class="text-center lg:text-left">
            <h1 class="text-6xl font-bold text-white drop-shadow-[0_0_1px_rgba(255,255,255,0.7)]">Full Stack</h1>
            <h1 class="text-7xl font-bold text-[#00FD37] mt-2 drop-shadow-[0_0_4px_rgba(0,255,0,0.8)]">Developer</h1>
            
          <!-- Typing Effect -->
          <p class="text-gray-300 text-xl mt-2 h-8">
            <span class="text-[#00FD37]">{{ displayText }}</span><span class="inline-block w-2 h-6 bg-white animate-blink"></span>
          </p>
  
          <p class="text-gray-200 mt-4">Creating Innovative, Functional, and User-Friendly</p>
          <p class="text-gray-200">Websites & Apps for Digital Solutions.</p>
  
          <!-- Tech Stack Badges -->
          <div class="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
            <span class="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:scale-105 cursor-pointer">Node.js</span>
            <span class="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:scale-105 cursor-pointer">React</span>
            <span class="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:scale-105 cursor-pointer">JavaScript</span>
            <span class="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:scale-105 cursor-pointer">Python</span>
          </div>
  
          <!-- Buttons -->
          <div class="flex gap-6 mt-8 justify-center lg:justify-start">
            <button class="bg-black text-white px-6 py-2 rounded shadow-lg transition hover:scale-105">Projects</button>
            <button class="bg-black text-white px-6 py-2 rounded shadow-lg transition hover:scale-105">Blog</button>
            <button class="bg-black text-white px-6 py-2 rounded shadow-lg transition hover:scale-105">Contact</button>
          </div>
  
          <!-- Social Icons -->
          <div class="flex justify-center lg:justify-start gap-6 mt-8 text-white text-2xl cursor-pointer">
            <i class="fab fa-instagram hover:text-[#00FD37] transition hover:scale-105"></i>
            <i class="fab fa-github hover:text-[#00FD37] transition hover:scale-105"></i>
            <i class="fab fa-facebook hover:text-[#00FD37] transition hover:scale-105"></i>
          </div>
        </div>
  
        <!-- Right Image -->
        <div class="mt-10 lg:mt-0">
          <img src="/public/images/fullstack-icon.png" alt="Full Stack Developer" class="max-w-sm drop-shadow-lg">
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const words = ["Machine Learning", "Web Development", "Full Stack Development", "Backend Development"];
  const displayText = ref("");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let intervalId = null;
  
  const typeEffect = () => {
    const currentWord = words[wordIndex];
  
    if (!isDeleting) {
      displayText.value = currentWord.substring(0, charIndex++);
    } else {
      displayText.value = currentWord.substring(0, charIndex--);
    }
  
    if (!isDeleting && charIndex > currentWord.length) {
      isDeleting = true;
      clearInterval(intervalId);
      setTimeout(() => (intervalId = setInterval(typeEffect, typingSpeed)), 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  };
  
  onMounted(() => {
    intervalId = setInterval(typeEffect, typingSpeed);
  });
  
  onUnmounted(() => {
    clearInterval(intervalId);
  });
  </script>
  
  <style scoped>
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  .animate-blink {
    animation: blink 0.7s infinite;
  }
  </style>
  