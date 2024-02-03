<template>
  <div class="flex-auto flex-col justify-start">
    <img
      class="self-center justify-self-center"
      src="../../public/favicon-32x32.png"
      alt="Gevin Madharha Profile"
    />
    <h1 class="lg">
      Hi, my name is Gevin. I am
      <span class="personal-description">an engineer</span>.
    </h1>
    <h6 class="lead">I'm currently working @ RBC as a contractor.</h6>
    <div class="socials">
      <a href="https://github.com/gmadharh" target="_blank"
        ><i class="bi bi-github"></i
      ></a>
      <a href="https://www.linkedin.com/in/gevinm/" target="_blank"
        ><i class="bi bi-linkedin"></i
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
