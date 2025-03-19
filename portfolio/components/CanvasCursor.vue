<script setup>
import useCanvasCursor from '@/composables/useCanvasCursor';

useCanvasCursor();
</script>

<template>
  <canvas id="canvas" class="pointer-events-none fixed inset-0"></canvas>
</template>
