<script setup>
import { ref, onMounted } from "vue";

const containerRef = ref(null);
const isMouseEntered = ref(false);

const handleMouseMove = (event) => {
  if (!containerRef.value) return;
  const { left, top, width, height } = containerRef.value.getBoundingClientRect();
  const x = (event.clientX - left - width / 2) / 25;
  const y = (event.clientY - top - height / 2) / 25;
  containerRef.value.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
};

const handleMouseEnter = () => {
  isMouseEntered.value = true;
};

const handleMouseLeave = () => {
  if (!containerRef.value) return;
  isMouseEntered.value = false;
  containerRef.value.style.transform = `rotateY(0deg) rotateX(0deg)`;
};
</script>

<template>
  <div class="shadow-lg" style="perspective: 200px">
    <div
      ref="containerRef"
      class="transition-all duration-200 ease-linear"
      style="transform-style: preserve-3d"
      @mouseenter="handleMouseEnter"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <slot></slot>
    </div>
  </div>
</template>