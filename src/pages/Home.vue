<template>
  <TemplateSection class="content">
    <div class="text-container">
      <h1>
        Tech Lead apasionado por los retos y <span class="highlight">el humor bien
          codificado.</span>
      </h1>
    </div>
  </TemplateSection>
</template>

<script>
import TemplateSection from '@/components/TemplateSection.vue'

export default {
  name: 'VueHeader',
  components: {
    TemplateSection,
  },
}
</script>

<style scoped>
h1 {
  font-size: 4rem;
}
.content {
  background-color: black;
  height: 100vh;
  align-content: center;
  display: grid;
  place-content: center;
  text-align: center;
  color: white;
  background-image: url('@/assets/images/background.jpg');
}
.text-container {
  max-width: 60vw;
  margin: 0 auto;
}
.highlight {
  color: #BFAE96;
}
</style>
