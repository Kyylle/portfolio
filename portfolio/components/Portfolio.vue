<template>
  <section class="portfolio-section pt-24">
    <div class="container mx-auto px-6 lg:px-12">
      <h1 class="text-4xl font-bold text-center text-[#00FD37]">
        My Portfolio
      </h1>
      <p class="text-white text-center mt-2">
        Explore my journey through projects, certifications, and technical
        expertise.
      </p>

      <!-- Tabs -->
      <div class="mt-8 flex justify-center">
        <div class="bg-[#151A30] p-3 rounded-lg flex space-x-4">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            :class="[
              'w-60 h-20 px-8 py-3 rounded-lg text-white font-semibold transition duration-300 hover:scale-[1.02]',
              activeTab === tab
                ? 'bg-gray-700 text-black'
                : 'hover:bg-gray-700',
            ]"
          >
            {{ tab }}
          </button>
        </div>
      </div>
      <!-- Projects Grid -->
      <div
        v-if="activeTab === 'Projects'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8"
      >
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-[#151A30] rounded-xl shadow-lg p-4 hover:scale-[1.02] transition-transform duration-300 w-72 flex flex-col items-center"
        >
          <!-- Image and Text Wrapper -->
          <div class="w-full flex flex-col items-center">
            <!-- Project Image -->
            <Card3D>
              <img
                :src="project.image"
                alt="Project Image"
                class="w-full h-50 object-cover rounded-lg"
              />
            </Card3D>

            <!-- Project Details -->
            <div class="mt-4 text-center w-full">
              <h2 class="text-xl font-semibold text-white">
                {{ project.name }}
              </h2>
              <p class="text-gray-400 text-sm mt-2 px-4">
                {{ project.description }}
              </p>

              <!-- Tech Stack Icons -->
              <div class="flex justify-center space-x-3 mt-4">
                <img
                  v-for="tech in project.techStack"
                  :key="tech.name"
                  :src="tech.icon"
                  :alt="tech.name"
                  class="w-8 h-8 bg-gray-800 p-2 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack Grid -->
      <div v-if="activeTab === 'Tech Stack'" class="flex justify-center">
        <div
          class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-8 px-4 place-items-center"
        >
          <div
            v-for="tech in techStack"
            :key="tech.name"
            class="flex items-center justify-center"
          >
            <div
              class="group bg-gray-800 p-6 rounded-xl w-28 h-32 flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-700 hover:scale-[1.05] hover:ring-4 hover:ring-indigo-500/50"
            >
              <img :src="tech.icon" :alt="tech.name" class="w-14 h-14 mb-2" />
              <p class="text-white text-xs font-semibold">{{ tech.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card3D from "@/components/ui/3d-card.vue";

export default {
  components: {
    Card3D,
  },
  data() {
    return {
      activeTab: "Projects",
      tabs: ["Projects", "Certificates", "Tech Stack"],
      projects: [
        {
          id: 1,
          name: "Project One",
          description: "A modern and secure web application.",
          image: "/projects/cha-hae-in.jpeg",
          techStack: [
            { name: "Vue.js", icon: "/techstack/vue.svg" },
            { name: "Tailwind CSS", icon: "/techstack/tailwind.svg" },
          ],
        },
        {
          id: 2,
          name: "Project Two",
          description: "A React-based dashboard system.",
          image: "/projects/sung-jin-woo.jpeg",
          techStack: [
            { name: "React", icon: "/techstack/react.svg" },
            { name: "Node.js", icon: "/techstack/node.svg" },
          ],
        },
      ],
      techStack: [
        { name: "Tailwind", icon: "/techstack/tailwind.svg" },
        { name: "React", icon: "/techstack/react.svg" },
        { name: "Vue", icon: "/techstack/vue.svg" },
        { name: "Nuxt", icon: "/techstack/nuxt.svg" },
        { name: "Git", icon: "/techstack/git.svg" },
        { name: "GitHub", icon: "/techstack/github.svg" },
        { name: "MongoDB", icon: "/techstack/mongodb.svg" },
        { name: "SQL", icon: "/techstack/sql.svg" },
        { name: "JavaScript", icon: "/techstack/js.svg" },
        { name: "Node", icon: "/techstack/node.svg" },
        { name: "HTML", icon: "/techstack/html.svg" },
        { name: "CSS", icon: "/techstack/css.svg" },
        { name: "Python", icon: "/techstack/python.svg" },
        { name: "Express", icon: "/techstack/express.svg" },
        { name: "C#", icon: "/techstack/csharp.svg" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
