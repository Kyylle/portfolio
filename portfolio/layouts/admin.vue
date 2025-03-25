<template>
  <div class="admin-container">
    <Sidebar />
    <div class="admin-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "~/components/portal/Sidebar.vue";
</script>

<style scoped>
.admin-container {
  display: flex;
  min-height: 100vh;
}

.admin-content {
  flex-grow: 1;
  padding: 20px;
  background: #f4f4f9; /* Light background for admin */
}
</style>
