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

    <div class="max-w-lg w-full space-y-12">
      <!-- Name -->
      <header class="space-y-4">
        <h1 class="font-display text-4xl md:text-5xl tracking-wider uppercase">
          <span :class="{ cursor: !nameComplete }">{{ displayedName }}</span>
        </h1>
        <p v-if="showSubtitle" class="font-sans text-base md:text-lg opacity-70 tracking-wide">
          I am <span class="cursor">{{ displayedTrait }}</span>
        </p>
        <div class="w-16 h-px bg-current opacity-40"></div>
      </header>

      <!-- Bio -->
      <section class="space-y-4 opacity-0 animate-fade-up stagger-2">
        <p class="font-serif opacity-80 leading-relaxed text-sm md:text-base">
          Software developer. I view tech as leverage to solve problems and build real value.<br />
          Documenting the journey at the intersection of tech, wealth, and faith.
        </p>
      </section>

      <!-- Social Links -->
      <nav class="flex flex-wrap gap-5 md:gap-6 opacity-0 animate-fade-up stagger-4">
        <!-- YouTube -->
        <a
          href="https://www.youtube.com/@GevinMadharha"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          aria-label="YouTube"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>

        <!-- TikTok -->
        <a
          href="https://www.tiktok.com/@gevinthegreat"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          aria-label="TikTok"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com/gevinthegreat/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/gevinm/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        <!-- Discord -->
        <div class="tooltip-container">
          <button
            class="social-icon"
            aria-label="Discord"
            @click="showDiscord = !showDiscord"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
            </svg>
          </button>
          <span class="tooltip" :class="{ 'tooltip-visible': showDiscord }">gevinthegreat</span>
        </div>
      </nav>

      <!-- Footer -->
      <footer class="pt-8 opacity-0 animate-fade-up stagger-6">
        <p class="opacity-30 text-xs tracking-widest uppercase">
          {{ new Date().getFullYear() }} · Soli Deo Gloria
        </p>
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showDiscord = ref(false)
const lightMode = ref(false)

const fullName = 'Gevin Madharha'
const displayedName = ref('')

const traits = [
  // Leadership & Character
  'a leader.', 'ambitious.', 'driven.', 'relentless.', 'disciplined.', 'resilient.',
  'tenacious.', 'bold.', 'fearless.', 'unstoppable.', 'determined.', 'focused.',
  // Tech & Development
  'a developer.', 'a builder.', 'technical.', 'a problem solver.', 'analytical.',
  'a coder.', 'an engineer.', 'a technologist.', 'detail-oriented.', 'systematic.',
  // Business & Startup
  'an entrepreneur.', 'a founder.', 'innovative.', 'strategic.', 'visionary.',
  'growth-minded.', 'resourceful.', 'opportunistic.', 'a dealmaker.', 'scalable.',
  'a hustler.', 'execution-focused.', 'results-driven.', 'value-driven.',
  // Faith & Purpose
  'faithful.', 'purpose-driven.', 'blessed.', 'grateful.', 'called.', 'steadfast.',
  'humble.', 'servant-hearted.', 'God-fearing.', 'redeemed.', 'hopeful.', 'joyful.',
  // Creator & Impact
  'a creator.', 'a maker.', 'a doer.', 'an innovator.', 'a disruptor.', 'a thinker.',
  'a learner.', 'curious.', 'adaptable.', 'versatile.', 'hungry.', 'passionate.'
]
const displayedTrait = ref('')
const showSubtitle = ref(false)
const nameComplete = ref(false)

const toggleTheme = () => {
  lightMode.value = !lightMode.value
  document.documentElement.classList.toggle('light', lightMode.value)
}

onMounted(() => {
  // Check for saved preference or system preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    lightMode.value = true
    document.documentElement.classList.add('light')
  }

  // Typing effect for name
  let charIndex = 0
  const typingInterval = setInterval(() => {
    if (charIndex < fullName.length) {
      displayedName.value = fullName.slice(0, charIndex + 1)
      charIndex++
    } else {
      clearInterval(typingInterval)
      nameComplete.value = true
      // Start subtitle animation after name is done
      setTimeout(() => {
        showSubtitle.value = true
        startTraitAnimation()
      }, 300)
    }
  }, 80)
})

// Trait typing animation
function startTraitAnimation() {
  let traitIndex = 0
  
  function typeIn(trait: string, callback: () => void) {
    let charIdx = 0
    const interval = setInterval(() => {
      charIdx++
      displayedTrait.value = trait.slice(0, charIdx)
      if (charIdx === trait.length) {
        clearInterval(interval)
        callback()
      }
    }, 80)
  }
  
  function typeOut(trait: string, callback: () => void) {
    let charIdx = trait.length
    const interval = setInterval(() => {
      charIdx--
      displayedTrait.value = trait.slice(0, charIdx)
      if (charIdx === 0) {
        clearInterval(interval)
        callback()
      }
    }, 50)
  }
  
  function animateTrait() {
    const currentTrait = traits[traitIndex]
    typeIn(currentTrait, () => {
      setTimeout(() => {
        typeOut(currentTrait, () => {
          traitIndex = (traitIndex + 1) % traits.length
          setTimeout(animateTrait, 300)
        })
      }, 1500)
    })
  }
  
  animateTrait()
}

// Watch for changes and save to localStorage
import { watch } from 'vue'
watch(lightMode, (val) => {
  localStorage.setItem('theme', val ? 'light' : 'dark')
})
</script>
