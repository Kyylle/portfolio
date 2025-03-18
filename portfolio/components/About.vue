<template>
    <section class="bg-gray-100 py-12">
        <div class="container mx-auto px-4">
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-gray-800">About Me</h1>
                <p class="text-gray-600 mt-4">A brief introduction about myself</p>
            </div>
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/3 mb-8 md:mb-0">
                    <img src="#" alt="Your Name" class="rounded-full shadow-lg w-64 h-64 mx-auto">
                </div>
                <div class="md:w-2/3 md:pl-12">
                    <p class="text-gray-700 text-lg leading-relaxed">
                        Hello! I'm [Your Name], a passionate software developer with expertise in building modern web applications. I have a strong background in [Your Skills/Technologies], and I enjoy creating user-friendly and efficient solutions. My goal is to continuously improve my skills and contribute to impactful projects.
                    </p>
                    <p class="text-gray-700 text-lg leading-relaxed mt-4">
                        In my free time, I enjoy [Your Hobbies/Interests]. I'm always eager to learn new things and take on new challenges. Feel free to reach out if you'd like to connect or collaborate on a project!
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',
};
</script>

<style scoped>
/* Add any additional styling here */
</style>