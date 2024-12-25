<template>
  <TemplateSection>
    <div class="content">
      <h1>About</h1>
      <p>
        Ingeniero en Informática, graduado de la Universidad Católica Andrés Bello, con una pasión
        por enfrentar retos y aprender constantemente. Cuento con experiencia en arquitecturas de
        software y patrones de diseño, desarrollando soluciones de alta calidad en colaboración con
        equipos multidisciplinarios para crear sistemas óptimos y fáciles de mantener. Actualmente
        me desempeño como Tech Lead, con un enfoque principal en ingeniería backend, donde he
        liderado proyectos complejos y estratégicos. Además, soy un entusiasta de la seguridad
        informática, especialmente en el ámbito del pentesting, combinando mi interés en la
        ciberseguridad con mi trayectoria técnica para ofrecer soluciones seguras y eficientes.
      </p>
    </div>
  </TemplateSection>
</template>

<script>
import TemplateSection from '@/components/TemplateSection.vue'

export default {
  name: 'AboutMe',
  components: {
    TemplateSection,
  },
}
</script>

<style scoped>
.content {
  background-color: yellow;
}
</style>
