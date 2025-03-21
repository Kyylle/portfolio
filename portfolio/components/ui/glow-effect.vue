<template>
    <div :class="['glow-overlay', glowClass]"></div>
  </template>
  
  <script setup>
  defineProps({
    glowClass: String, // Allows different styles per glow
  });
  </script>
  
  <style scoped>
  /* Base Glow Style */
  .glow-overlay {
    position: absolute;
    width: 400px;
    height: 400px;
    filter: blur(250px);
    mix-blend-mode: color-dodge;
    pointer-events: none;
  }
  
  /* Individual Glow Styles */
  .glow1 {
    background: radial-gradient(circle, rgba(0, 150, 255, 0.8) 0%, rgba(0, 150, 255, 0.5) 50%, transparent 90%);
    animation: glowMove1 10s ease-in-out infinite alternate;
  }
  .glow2 {
    background: radial-gradient(circle, rgba(255, 0, 150, 0.8) 0%, rgba(255, 0, 150, 0.5) 50%, transparent 90%);
    animation: glowMove2 12s ease-in-out infinite alternate;
  }
  .glow3 {
    background: radial-gradient(circle, rgba(0, 255, 150, 0.8) 0%, rgba(0, 255, 150, 0.5) 50%, transparent 90%);
    animation: glowMove3 14s ease-in-out infinite alternate;
  }
  
  /* Animations for independent movement */
  @keyframes glowMove1 {
    0% { transform: translate(0vw, 0vh); }
    100% { transform: translate(100vw, 100vh); }
  }
  
  @keyframes glowMove2 {
    0% { transform: translate(100vw, 0vh); }
    100% { transform: translate(-50vw, 100vh); }
  }
  
  @keyframes glowMove3 {
    0% { transform: translate(-50vw, -50vh); }
    100% { transform: translate(50vw, 50vh); }
  }
  </style>
  