<template>
  <div class="p-8">
    <h1 class="text-3xl font-semibold mb-6">Edit About Section</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="full_name" class="block font-medium">Full Name:</label>
        <input v-model="about.full_name" id="full_name" type="text" class="input" required />
      </div>

      <div>
        <label for="introduction" class="block font-medium">Introduction:</label>
        <textarea v-model="about.introduction" id="introduction" class="input" required />
      </div>

      <div>
        <label for="description" class="block font-medium">Description:</label>
        <textarea v-model="about.description" id="description" class="input" required />
      </div>

      <div>
        <label for="profile_image" class="block font-medium">Profile Image URL:</label>
        <input v-model="about.profile_image" id="profile_image" type="text" class="input" required />
      </div>

      <div>
        <label for="total_projects" class="block font-medium">Total Projects:</label>
        <input v-model="about.total_projects" id="total_projects" type="number" class="input" required />
      </div>

      <div>
        <label for="certificates" class="block font-medium">Certificates:</label>
        <input v-model="about.certificates" id="certificates" type="number" class="input" required />
      </div>

      <div>
        <label for="years_experience" class="block font-medium">Years of Experience:</label>
        <input v-model="about.years_experience" id="years_experience" type="number" class="input" required />
      </div>

      <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Save Changes
      </button>

      <button type="button" @click="handleDelete" class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 ml-4">
        Delete About
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const about = ref({
  full_name: '',
  introduction: '',
  description: '',
  profile_image: '',
  total_projects: 0,
  certificates: 0,
  years_experience: 0,
});

const apiBase = process.env.API_BASE_URL || "http://localhost:8000";

// Fetch about data from FastAPI
const fetchAbout = async () => {
  try {
    const response = await fetch(`${apiBase}/about`);
    if (response.ok) {
      about.value = await response.json();
    }
  } catch (error) {
    console.error("Error fetching about info:", error);
  }
};

// Handle form submission
const handleSubmit = async () => {
  try {
    const method = about.value._id ? "PUT" : "POST";
    const response = await fetch(`${apiBase}/about`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(about.value),
    });

    if (response.ok) {
      alert("About section updated successfully!");
      router.push("/portal");
    }
  } catch (error) {
    console.error("Error updating about info:", error);
  }
};

// Handle delete action
const handleDelete = async () => {
  if (confirm("Are you sure you want to delete the About section?")) {
    try {
      await fetch(`${apiBase}/about`, { method: "DELETE" });
      alert("About section deleted successfully!");
      router.push("/portal");
    } catch (error) {
      console.error("Error deleting about info:", error);
    }
  }
};

onMounted(fetchAbout);
definePageMeta({
  layout: "admin",
});
</script>

<style scoped>
.input {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
