<template>
    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-8 text-center">My Portfolio</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="project in projects" :key="project.id" class="bg-white rounded-lg shadow-lg p-6">
                <img :src="project.image" alt="Project Image" class="w-full h-48 object-cover rounded-lg mb-4">
                <h2 class="text-2xl font-semibold mb-2">{{ project.name }}</h2>
                <p class="text-gray-700 mb-4">{{ project.description }}</p>
                <div class="flex space-x-4">
                    <div v-for="tech in project.techStack" :key="tech.name" class="transform transition-transform duration-300 hover:scale-125">
                        <img :src="tech.icon" :alt="tech.name" class="w-8 h-8">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: 'Project One',
                    description: 'This is a description for project one.',
                    image: 'path/to/project-one-image.jpg',
                    techStack: [
                        { name: 'Vue.js', icon: 'path/to/vue-icon.png' },
                        { name: 'Tailwind CSS', icon: 'path/to/tailwind-icon.png' },
                        // Add more tech stacks as needed
                    ],
                },
                {
                    id: 2,
                    name: 'Project Two',
                    description: 'This is a description for project two.',
                    image: 'path/to/project-two-image.jpg',
                    techStack: [
                        { name: 'React', icon: 'path/to/react-icon.png' },
                        { name: 'Node.js', icon: 'path/to/node-icon.png' },
                        // Add more tech stacks as needed
                    ],
                },
                // Add more projects as needed
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