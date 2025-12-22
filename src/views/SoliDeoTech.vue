<template>
  <main class="min-h-screen flex flex-col items-center justify-center px-6 py-12 transition-colors duration-300">
    <!-- Theme Toggle -->
    <button
      @click="toggleTheme"
      class="fixed top-4 right-4 md:top-6 md:right-6 p-3 opacity-40 hover:opacity-100 transition-opacity duration-300"
      aria-label="Toggle theme"
    >
      <!-- Sun (shown in dark mode) -->
      <svg v-if="!lightMode" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 md:w-6 md:h-6">
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
      </svg>
      <!-- Moon (shown in light mode) -->
      <svg v-else viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 md:w-6 md:h-6">
        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"/>
      </svg>
    </button>

    <!-- Back to Portfolio -->
    <router-link
      to="/"
      class="fixed top-4 left-4 md:top-6 md:left-6 p-3 opacity-40 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-xs tracking-widest uppercase"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      <span class="hidden md:inline">Back</span>
    </router-link>

    <div class="max-w-xl w-full text-center space-y-10">
      <!-- Cross Icon -->
      <div class="opacity-0 animate-fade-up stagger-1">
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 md:w-16 md:h-16 mx-auto opacity-60">
          <path d="M11 2v7H4v2h7v11h2V11h7V9h-7V2z"/>
        </svg>
      </div>

      <!-- Name -->
      <header class="space-y-4 opacity-0 animate-fade-up stagger-2">
        <h1 class="font-display text-5xl md:text-7xl tracking-wider uppercase">
          Soli Deo Tech
        </h1>
        <p class="font-serif text-lg md:text-xl opacity-70 leading-relaxed">
          A network of Christians in tech
        </p>
        <div class="w-24 h-px bg-current opacity-30 mx-auto"></div>
      </header>

      <!-- Tagline -->
      <section class="space-y-4 opacity-0 animate-fade-up stagger-3">
        <p class="font-sans text-sm md:text-base opacity-60 max-w-md mx-auto leading-relaxed">
          Building a network for Christians in technology.<br /><br />
          I am creating a space where believers can meet to support each other and share advice. 
          The goal is to bring our faith and our tech skills together in a meaningful way.
        </p>
      </section>

      <!-- Discord Invite Button -->
      <div class="opacity-0 animate-fade-up stagger-4 pt-4">
        <a
          href="https://discord.gg/aUahgUzCam"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-3 px-8 py-4 border-2 border-current 
                 transition-all duration-300 ease-out
                 hover:bg-paper hover:text-ink hover:border-paper
                 dark:hover:bg-paper dark:hover:text-ink"
        >
          <!-- Discord Icon -->
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
          </svg>
          <span class="font-sans text-sm md:text-base tracking-wider uppercase">Join the Community</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      <!-- Footer -->
      <footer class="pt-12 opacity-0 animate-fade-up stagger-5">
        <p class="opacity-30 text-xs tracking-widest uppercase">
          {{ new Date().getFullYear() }} · Soli Deo Gloria
        </p>
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const lightMode = ref(false)

const toggleTheme = () => {
  lightMode.value = !lightMode.value
  document.documentElement.classList.toggle('light', lightMode.value)
}

onMounted(() => {
  // Check for saved preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    lightMode.value = true
    document.documentElement.classList.add('light')
  }
})

// Watch for changes and save to localStorage
watch(lightMode, (val) => {
  localStorage.setItem('theme', val ? 'light' : 'dark')
})
</script>

