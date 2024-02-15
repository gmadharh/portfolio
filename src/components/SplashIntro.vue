<template>
  <div class="m-4 flex h-full w-fit flex-col items-start justify-start md:m-8">
    <img
      class="g-1 w-1/2 self-center md:w-1/4 md:self-start md:justify-self-start"
      src="../assets/profile.png"
      alt="Gevin Madharha Profile"
    />
    <h1 class="inline-block pt-3 text-base font-bold md:text-2xl">
      Hi, my name is Gevin. I am
      <span
        class="personal-description w-0 animate-fade-out-in overflow-hidden whitespace-nowrap"
      >
      </span>
    </h1>
    <h6 class="lead font-lora text-sm">
      I'm currently working @ TCS as a software developer.
    </h6>
    <div class="flex gap-3 p-2">
      <a href="https://github.com/gmadharh" target="_blank"
        ><button class="bi bi-github text-4xl"></button
      ></a>
      <a href="https://www.linkedin.com/in/gevinm/" target="_blank"
        ><i class="bi bi-linkedin text-4xl"></i
      ></a>

      <a href="mailto:contact@gevin.ca">
        <i class="bi bi-envelope-fill text-4xl"></i>
      </a>
      <a
        href="https://www.youtube.com/channel/UCTYgh_w12MwRA_I2aq73lrQ"
        target="_blank"
      >
        <i class="bi bi-youtube text-4xl"></i>
      </a>
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
  methods: {
    rollingDescriptions: function () {
      let descriptions = [
        "a creator",
        "a visionary",
        "a tinkerer",
        "an investor",
        "proactive",
        "versatile",
        "curious",
        "efficient",
        "persistent",
      ];
      let personal_desc_span = document.getElementsByClassName(
        "personal-description",
      )[0] as HTMLElement;

      let curr_desc_i = descriptions.findIndex(
        (desc) => desc == personal_desc_span.innerHTML,
      );
      let new_desc_i = (curr_desc_i + 1) % descriptions.length;

      personal_desc_span.innerHTML = descriptions[new_desc_i];

      personal_desc_span.classList.remove("animate-fade-out-in");

      void personal_desc_span.offsetWidth;
      personal_desc_span.classList.add("animate-fade-out-in");
    },
  },
  mounted: function () {
    setInterval(this.rollingDescriptions, 2500);
  },
  unmounted: function () {
    for (let i = 0; i < 1000; i++) {
      window.clearInterval(i);
    }
  },
});
</script>
