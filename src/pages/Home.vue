<template>
  <TemplateSection class="content">
    <div><vue-particles id="particles" :options="particleConfig" /></div>
    <div class="text-container">
      <h1>
        Tech Lead apasionado por los retos y
        <span class="highlight">el humor bien codificado.</span>
      </h1>
    </div>
  </TemplateSection>
</template>

<script>
import TemplateSection from '@/components/TemplateSection.vue'
import { primaryColor, secondaryColor } from '@/constants'
export default {
  name: 'HomePage',
  components: {
    TemplateSection,
  },
  data() {
    return {
      particleConfig: {
        background: {
          color: {
            value: '#000000',
          },
          repeat: 'no-repeat',
          size: 'contain',
        },
        backgroundMask: {
          composite: 'overlay',
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: primaryColor,
          },
          links: {
            color: secondaryColor,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            outModes: 'bounce',
            speed: 3,
          },
          number: {
            density: {
              enable: true,
            },
            value: 100,
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
      },
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 4rem;
}
.content {
  height: 100vh;
  align-content: center;
  display: grid;
  place-content: center;
  text-align: center;
  color: white;
}
.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 55vw;
  text-align: center;
}
@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  .text-container {
    width: 85vw;
  }
}
.highlight {
  color: var(--secondary-color);
}
</style>
