<template>
  <div class="flex flex-col items-center">
    <SplashIntro />
    <ProjectCard
      v-for="project in projects"
      :key="project.name"
      :name="project.name"
      :link="project.link"
      :icon="project.icon"
    />
  </div>
</template>

<script setup lang="ts">
import SplashIntro from "./components/SplashIntro.vue";
import ProjectCard from "./components/ProjectCard.vue";
import spotifyIcon from "./assets/spotify-song-extractor.png";

const projects = [
  {
    name: "Copyify",
    link: "https://chromewebstore.google.com/detail/spotify-song-extractor/mnaooedpbbimbgcjlfebmkomloakbeag?hl=en&authuser=2",
    icon: spotifyIcon,
  },
];
</script>
