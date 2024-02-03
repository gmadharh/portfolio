<template>
  <div class="flex flex-col items-center">
    <!-- 
    <h1 class="mb-4 text-3xl">Hey, welcome to my website.</h1>
    <p>
      There's nothing here right now, its currently a work in progress. But
      check back later for some cool stuff. 😎
    </p>

    <br />

    <p>In the meantime, check me out here:</p>
    <ul class="pl-5 list-disc">
      <li>
        <a
          class="text-blue-400"
          href="https://www.linkedin.com/in/gevinm/"
          target="_blank"
          >LinkedIn</a
        >
      </li>
      <li>
        <a
          class="text-blue-400"
          href="https://github.com/gmadharh"
          target="_blank"
          >GitHub</a
        >
      </li>
    </ul>
  -->
    <SplashIntro />
    <ProjectCard />
  </div>
</template>

<script setup lang="ts">
import SplashIntro from './components/SplashIntro.vue'
import ProjectCard from './components/ProjectCard.vue'
</script>
