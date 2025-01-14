<template>
  <TemplateSection class="container">
    <div>
      <h1>Personal experience</h1>
      <p>This is an example page using the TemplateSection component.</p>
    </div>
  </TemplateSection>
</template>

<script>
import TemplateSection from '@/components/TemplateSection.vue'

export default {
  name: 'PersonalExperience',
  components: {
    TemplateSection,
  },
}
</script>

<style scoped>
.container {
  background-color: purple;
}
</style>
