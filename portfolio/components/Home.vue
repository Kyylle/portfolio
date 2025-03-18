<template>
    <div class="home">
        <header class="bg-gray-800 text-white py-6">
            <h1 class="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p class="text-lg mt-2">Full Stack Developer specializing in Python, JavaScript, Nuxt, Vue, and React</p>
        </header>
        <section class="about my-12">
            <h2 class="text-3xl font-semibold">About Me</h2>
            <p class="mt-4 text-gray-700">
                I am a passionate full stack developer with experience in building dynamic and responsive web applications using modern technologies. My expertise lies in Python, JavaScript, Nuxt, Vue, and React.
            </p>
        </section>
        <section class="skills my-12">
            <h2 class="text-3xl font-semibold">Skills</h2>
            <ul class="mt-4 flex flex-wrap justify-center">
                <li class="bg-gray-200 text-gray-800 py-2 px-4 m-2 rounded">Python</li>
                <li class="bg-gray-200 text-gray-800 py-2 px-4 m-2 rounded">JavaScript</li>
                <li class="bg-gray-200 text-gray-800 py-2 px-4 m-2 rounded">Nuxt</li>
                <li class="bg-gray-200 text-gray-800 py-2 px-4 m-2 rounded">Vue</li>
                <li class="bg-gray-200 text-gray-800 py-2 px-4 m-2 rounded">React</li>
            </ul>
        </section>
        <section class="projects my-12">
            <h2 class="text-3xl font-semibold">Projects</h2>
            <p class="mt-4 text-gray-700">Check out some of my projects below:</p>
            <!-- Add project components or links here -->
        </section>
        <footer class="bg-gray-800 text-white py-4 mt-12">
            <p>&copy; 2023 My Portfolio</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style scoped>
.home {
    text-align: center;
    padding: 20px;
}
</style>
