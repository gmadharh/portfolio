<template>
  <div class="m-4 flex h-full w-fit flex-col items-start justify-start md:m-8">
    <img
      class="g-1 w-1/2 self-center md:w-1/4 md:self-start md:justify-self-start"
      src="../assets/profile.png"
      alt="Gevin Madharha Profile"
    />
    <h1 class="inline-block pt-3 text-base font-bold md:text-2xl">
      Hi, my name is Gevin.
    </h1>
    <h6 class="lead font-lora text-sm">
      
    Developer, Hard Worker, Problem Solver at heart.
    </h6>
    <div class="flex gap-3 p-2">
      <a href="https://github.com/gmadharh" target="_blank"
        ><button class="bi bi-github text-4xl"></button
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SplashIntro",
  props: {
    msg: String,
  },
});
</script>
