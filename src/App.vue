<template>
  <div class="flex flex-col items-center">
    <SplashIntro />
    <h2 class="text-2xl font-bold">About Me</h2>
    <p class="p-2 text-center w-1/2">Always had a passion for problem solving and creating stuff. Studied Computer Science at University of Guelph as a catalyst to that. Working in the industry doing the same, using and learning various technologies to make things work, and pursuing any side projects that come my way 🔥
    </p>
    <h2 class="text-2xl font-bold p-5">Links & Projects</h2>
    <p class="p-2 text-justify w-1/2">
      <b class="text-emerald-500">Copyify</b> - A browser extension used to copy song information from Spotify to clipboard. <br />
     ➡️ <a class="underline text-blue-800" href="https://chromewebstore.google.com/detail/copyify/mnaooedpbbimbgcjlfebmkomloakbeag">Chrome </a> <br>
     ➡️ <a class="underline text-blue-800" href="https://addons.mozilla.org/en-US/firefox/addon/copyify/">Firefox</a>

     <br>
      <div>
      <a class="underline text-slate-500" href="https://github.com/gmadharh">Github</a> <a class="underline text-slate-500" href="https://www.linkedin.com/in/gevinm/">LinkedIn</a> <a class="underline text-slate-500 " href="mailto:contact@gevin.ca">Email</a> 
      </div>
    </p>
  </div>
</template>

<script setup lang="ts">
import SplashIntro from "./components/SplashIntro.vue";
</script>
