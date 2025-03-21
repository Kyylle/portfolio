<template>
  <div class="relative w-full min-h-screen bg-black overflow-hidden">
    <GridBackground />
    <div class="relative z-10">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import GridBackground from "~/components/ui/grid-background.vue";
</script>
