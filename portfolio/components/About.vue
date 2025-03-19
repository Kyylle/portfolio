<template>
  <section class="about-section pt-24">
    <div class="container mx-auto px-4">
      <!-- About Me Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-[#00FD37]">About Me</h1>
        <p class="text-white mt-4">Transforming Ideas and Building Innovative Digital Solutions</p>
      </div>

      <!-- About Me Content -->
      <div class="flex flex-col md:flex-row items-center">
        <!-- Profile Image -->
        <div class="md:w-1/3 mb-10 md:mb-0 flex justify-center">
          <img src="/public/images/profile_about_Me.png" alt="Your Name"
            class="w-48 h-48 sm:w-60 sm:h-60 md:w-[22rem] md:h-[22rem] object-contain rounded-lg shadow-lg">
        </div>

        <!-- About Text -->
        <div class="md:w-2/3 md:pl-12">
          <p class="text-white text-xl leading-relaxed">Hello, I’m Sung Jin Woo</p>
          <p class="text-white text-regular leading-relaxed mt-4">
            I started as the weakest E-rank hunter, barely surviving in dungeons while others looked down on me.
            But everything changed when I entered a mysterious double dungeon. After a near-death experience,
            I awakened a unique ability called the "System," allowing me to level up and grow stronger.
          </p>

          <!-- View Projects Button -->
          <div class="mt-6 flex justify-center md:justify-start">
            <button
              class="border border-[#00FD37] text-[#00FD37] px-5 py-2 rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-[#00FD37] hover:text-black transition duration-300">
              <span class="text-xl">❮ ❯</span> View Projects
            </button>
          </div>
        </div>
      </div>

      <!-- Statistics Cards Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <!-- Total Projects -->
        <a href="#" class="bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-800 flex flex-col">
          <div class="flex flex-row items-center justify-between w-full">
            <div class="bg-gray-800 p-3 rounded-full flex items-center justify-center w-16 h-16">
              <img src="/public/images/icon_projects.png" alt="Projects" class="w-8 h-8">
            </div>
            <span class="text-white text-4xl font-bold">0</span>
          </div>
          <h2 class="text-white text-lg font-semibold mt-4">TOTAL PROJECTS</h2>
          <p class="text-gray-400 text-sm">Innovative web solutions crafted</p>
        </a>

        <!-- Certificates -->
        <a href="#" class="bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-800 flex flex-col">
          <div class="flex flex-row items-center justify-between w-full">
            <div class="bg-gray-800 p-3 rounded-full flex items-center justify-center w-16 h-16">
              <img src="/public/images/icon_cert.png" alt="Certificates" class="w-8 h-8">
            </div>
            <span class="text-white text-4xl font-bold">0</span>
          </div>
          <h2 class="text-white text-lg font-semibold mt-4">CERTIFICATES</h2>
          <p class="text-gray-400 text-sm">Professional skills validated</p>
        </a>

        <!-- Years of Experience -->
        <a href="#" class="bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-800 flex flex-col">
          <div class="flex flex-row items-center justify-between w-full">
            <div class="bg-gray-800 p-3 rounded-full flex items-center justify-center w-16 h-16">
              <img src="/public/images/icon_experience.png" alt="Experience" class="w-8 h-8">
            </div>
            <span class="text-white text-4xl font-bold">3</span>
          </div>
          <h2 class="text-white text-lg font-semibold mt-4">YEARS OF EXPERIENCE</h2>
          <p class="text-gray-400 text-sm">Continuous learning journey</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>
