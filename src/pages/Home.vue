<template>
  <TemplateSection class="content">
    <div class="text-container">
      <h1>
        Tech Lead apasionado por los retos y el humor bien
        codificado.
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
  font-weight-bold: 700;
}
</style>
