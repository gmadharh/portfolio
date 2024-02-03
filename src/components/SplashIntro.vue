<template>
  <div
    class="m-5 p-0 h-full w-fit g-5 border-4 flex flex-col justify-start items-start"
  >
    <img
      class="w-2/12 g-1"
      src="../assets/profile.png"
      alt="Gevin Madharha Profile"
    />
    <h1 class="text-3xl font-bold">
      Hi, my name is Gevin. I am
      <span class="personal-description">an engineer</span>.
    </h1>
    <h6 class="font-lora lead">I'm currently working @ RBC as a contractor.</h6>
    <div class="flex gap-3 p-2">
      <a href="https://github.com/gmadharh" target="_blank"
        ><button class="bi bi-github text-4xl"></button
      ></a>
      <a href="https://www.linkedin.com/in/gevinm/" target="_blank"
        ><i class="bi bi-linkedin text-4xl"></i
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SplashIntro',
  props: {
    msg: String,
  },
  methods: {
    rollingDescriptions: function () {
      let descriptions = [
        'an engineer',
        'a creator',
        'a visionary',
        'a tinkerer',
        'an investor',
      ]
      let personal_desc_span = document.getElementsByClassName(
        'personal-description'
      )[0]
      let curr_desc_i = descriptions.findIndex(
        (desc) => desc == personal_desc_span.innerHTML
      )
      let new_desc_i = (curr_desc_i + 1) % descriptions.length

      personal_desc_span.innerHTML = descriptions[new_desc_i]
    },
  },
  mounted: function () {
    setInterval(this.rollingDescriptions, 2500)
  },
  unmounted: function () {
    for (let i = 0; i < 1000; i++) {
      window.clearInterval(i)
    }
  },
})
</script>
