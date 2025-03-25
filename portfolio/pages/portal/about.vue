<template>
  <div>
    <h1>About Section (Test GET Request)</h1>

    <button @click="fetchAbout">Fetch About Info</button>

    <div v-if="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <form v-if="about" @submit.prevent="updateAbout">
      <label>
        Full Name:
        <input v-model="about.full_name" type="text" />
      </label>

      <label>
        Introduction:
        <textarea v-model="about.introduction"></textarea>
      </label>

      <label>
        Description:
        <textarea v-model="about.description"></textarea>
      </label>

      <button type="submit">Update About</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const about = ref(null);
const loading = ref(false);
const error = ref("");

// Fetch About Information (GET Request)
async function fetchAbout() {
  loading.value = true;
  error.value = "";

  try {
    const response = await fetch("http://localhost:8000/about/");
    if (!response.ok) throw new Error("Failed to fetch about info.");
    about.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

// Update About Information (PUT Request)
async function updateAbout() {
  try {
    const response = await fetch("http://localhost:8000/about", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(about.value),
    });

    if (!response.ok) throw new Error("Failed to update about info.");
    alert("About section updated!");
  } catch (err) {
    alert(err.message);
  }
}

definePageMeta({
  layout: "admin",
});
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 10px;
}

textarea,
input {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
}

button {
  margin-top: 20px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
