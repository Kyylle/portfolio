<template>
  <div>
    <!-- <CanvasCursor /> -->
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
// import CanvasCursor from "~/components/CanvasCursor.vue";
</script>
