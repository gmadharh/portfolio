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
  <footer class="m-10">
    <p class="text-right align-text-bottom text-xs">
      &copy; 2024 Gevin Madharha. All Rights Reserved.
    </p>
  </footer>
</template>

<script setup lang="ts">
import SplashIntro from "./components/SplashIntro.vue";
import ProjectCard from "./components/ProjectCard.vue";
import spotifyIcon from "./assets/spotify-song-extractor.png";
import pursuitIcon from "./assets/pursuit-pioneer.png";
import zenTabIcon from "./assets/zen-tab.png";

const projects = [
  {
    name: "Copyify",
    link: "https://chromewebstore.google.com/detail/spotify-song-extractor/mnaooedpbbimbgcjlfebmkomloakbeag?hl=en&authuser=2",
    icon: spotifyIcon,
  },
  {
    name: "ZenTab",
    link: "https://chromewebstore.google.com/detail/zentab-quotes-time/afaabopmcmehmmemkofeonpappbhfdgi?hl=en",
    icon: zenTabIcon,
  },
  {
    name: "PursuitPioneer",
    link: "https://github.com/gmadharh/pursuit-pioneer",
    icon: pursuitIcon,
  },
];
</script>
