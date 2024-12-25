<template>
  <a
    :href="link"
    class="flex items-center justify-center flex-auto w-10/12 m-2 transition duration-300 ease-in-out delay-150 rounded-full 2xl:w-1/4 md:w-1/2 hover:-translate-y-1 hover:scale-110 border-12 h-14"
    target="_blank"
  >
    <img :src="icon" alt="Project Icon" class="w-6 h-6 mr-2" />
    <span>{{ name }}</span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    link: String,
    name: String,
    icon: String,
  },
})
</script>
