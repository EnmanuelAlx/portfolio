<template>
  <TemplateSection class="container">
    <div class="row title">
      <h2>Sobre mi</h2>
    </div>
    <div class="columns">
      <div class="column text-column">
        <p>
          Ingeniero en Informática, graduado de la Universidad Católica Andrés Bello, con pasión por
          enfrentar retos y aprender constantemente. Experto en arquitecturas de software y patrones
          de diseño, desarrollando soluciones de alta calidad con equipos multidisciplinarios.
          Actualmente, Tech Lead enfocado en ingeniería backend, liderando proyectos complejos y
          estratégicos. Entusiasta de la seguridad informática y pentesting, combinando
          ciberseguridad y trayectoria técnica para ofrecer soluciones seguras y eficientes.
        </p>
      </div>
      <div class="column image-column">
        <img class="img-profile" src="@/assets/images/me.jpg" alt="Photo" />
      </div>
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
.title {
  font-size: 2rem;
}

.container {
  background-color: var(--secondary-color);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.row {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}

.columns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
}

.column {
  flex: 1;
  padding: 10px;
}

.text-column {
  flex: 2;
}

.text-column p {
  font-size: 1.3rem;
}

.image-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(15%) drop-shadow(10px 8px 1px var(--primary-color));
}

.img-profile {
  max-width: 100%;
  border-radius: 8px;
  height: auto;
  transition: transform 0.3s ease;
  clip-path: polygon(20%0, 100%0, 80% 100%, 0 100%);
}

.image-column img:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .columns {
    flex-direction: column;
  }

  .text-column {
    width: 100%;
    order: 2;
  }

  .image-column {
    width: 100%;
    order: 1;
  }

  .img-profile {
    max-width: 50vw;
  }

  .columns {
    width: 90%;
  }
  .text-column p {
    font-size: 1.1rem;
  }
}
</style>
