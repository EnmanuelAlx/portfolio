<template>
  <section class="template-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'TemplateSection',
}
</script>

<style>
.template-section {
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  box-sizing: border-box; /* Include padding in the element's total width and height */
  scroll-snap-align: start;
}
div.content {
  padding: 20px;
}
</style>
