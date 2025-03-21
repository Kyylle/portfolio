<template>
    <div class="absolute inset-0 grid-bg">
      <GlowEffect glowClass="glow1" />
      <GlowEffect glowClass="glow2" />
      <GlowEffect glowClass="glow3" />
    </div>
  </template>
  
  <script setup>
  import GlowEffect from "./glow-effect.vue";
  </script>
  
  <style scoped>
  /* Grid Background */
  .grid-bg {
    width: 100%;
    height: 100%;
    background-size: 20px 20px;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    position: fixed;
    overflow: hidden;
  }
  </style>
  