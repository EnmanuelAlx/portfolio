<template>
  <TemplateSection class="experience-container">
    <h1>Mi Experiencia Profesional</h1>
    <div class="timeline">
      <!-- Línea central vertical -->
      <div class="center-line"></div>
      
      <!-- Columna izquierda (items impares) -->
      <div class="column left-column">
        <div 
          v-for="(job, index) in jobs.filter((_, i) => i % 2 === 0)" 
          :key="index" 
          class="timeline-item left"
          :style="{ marginTop: index > 0 ? '180px' : '0' }"
          @click="openJobDetails(job)"
        >
          <div class="company-block" :style="{ backgroundColor: job.color }">
            <div class="company-info">
              <div class="company-name">{{ job.company }}</div>
              <div class="designation">{{ job.designation }}</div>
            </div>
            <div class="year-circle">
              <span>{{ job.year }}</span>
            </div>
          </div>
          
          <!-- Conector horizontal hacia la línea central -->
          <div class="connector-horizontal right"></div>
        </div>
      </div>
      
      <!-- Columna derecha (items pares) -->
      <div class="column right-column">
        <div 
          v-for="(job, index) in jobs.filter((_, i) => i % 2 === 1)" 
          :key="index" 
          class="timeline-item right"
          :style="{ marginTop: index === 0 ? '90px' : '180px' }"
          @click="openJobDetails(job)"
        >
          <div class="company-block" :style="{ backgroundColor: job.color }">
            <div class="company-info">
              <div class="company-name">{{ job.company }}</div>
              <div class="designation">{{ job.designation }}</div>
            </div>
            <div class="year-circle">
              <span>{{ job.year }}</span>
            </div>
          </div>
          
          <div class="connector-horizontal left"></div>
        </div>
      </div>
      
      <div class="modal" v-if="selectedJob" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="modal-header" :style="{ backgroundColor: selectedJob.color }">
            <h2>{{ selectedJob.company }}</h2>
            <div class="modal-close" @click="closeModal">&times;</div>
          </div>
          <div class="modal-body">
            <h3>{{ selectedJob.designation }}</h3>
            <p class="period">{{ selectedJob.period }}</p>
            <p class="description">{{ selectedJob.description }}</p>
          </div>
        </div>
      </div>

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
  data() {
    return {
      isMobile: false,
      selectedJob: null,
      jobs: [
        {
          company: 'MO Technologies',
          designation: 'Tech Lead',
          period: 'Diciembre 2021 - Actual',
          year: '2021',
          description: 'Descripción de tu experiencia en MO Technologies...',
          color: '#2d4e7c', // Primary color
          showDialog: false
        },
        {
          company: 'MyTeamAbroad',
          designation: 'Senior Developer',
          period: 'Julio 2020 - Diciembre 2021',
          year: '2020',
          description: 'Descripción de tu experiencia en MyTeamAbroad...',
          color: '#3a6299', // Slightly lighter primary
          showDialog: false
        },
        {
          company: '789.mx',
          designation: 'Developer',
          period: 'Agosto 2019 - Noviembre 2019',
          year: '2019',
          description: 'Descripción de tu experiencia en 789.mx...',
          color: '#4876b4', // Even lighter primary
          showDialog: false
        },
        {
          company: 'Jam IT Solucion',
          designation: 'Junior Developer',
          period: 'Junio 2017 - Agosto 2019',
          year: '2017',
          description: 'Descripción de tu experiencia en Jam IT Solucion...',
          color: '#5a8ac9', // Lightest primary
          showDialog: false
        }
      ]
    }
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIfMobile);
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    openJobDetails(job) {
      this.selectedJob = job;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.selectedJob = null;
      document.body.style.overflow = '';
    }
  }
}
</script>

<style scoped>
.experience-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #000000;
  color: white;
  min-height: 100vh;
}

h1 {
  margin-bottom: 4rem;
  font-size: 2.5rem;
  color: #2d4e7c; /* primaryColor */
}

.timeline {
  display: flex;
  width: 90%;
  max-width: 1000px;
  position: relative;
  margin: 0 auto;
  padding-top: 2rem;
  min-height: 800px;
}

/* Línea central vertical */
.center-line {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background-color: #bfae96; /* Color secundario */
  z-index: 1;
}

/* Círculos en la línea central */
.center-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background-color: #bfae96; /* Color secundario */
  border-radius: 50%;
  z-index: 2;
}

/* Columnas */
.column {
  width: 50%;
  position: relative;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar horizontalmente en PC */
}

.left-column {
  padding-right: 40px;
  align-items: flex-end; /* Alinear a la derecha */
}

.right-column {
  padding-left: 40px;
  align-items: flex-start; /* Alinear a la izquierda */
}

/* Items del timeline */
.timeline-item {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
}

.timeline-item.left {
  justify-content: flex-end;
}

.timeline-item.right {
  justify-content: flex-start;
}

.company-block {
  display: flex;
  width: 300px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.company-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.company-info {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.company-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
}

.designation {
  font-size: 0.9rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
}

.year-circle {
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 20px;
  font-weight: bold;
  color: #333;
  box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.3);
}

/* Conectores horizontales */
.connector-horizontal {
  position: absolute;
  background-color: #bfae96; /* Color secundario */
  height: 3px;
  top: 50px;
  z-index: 0;
}

.connector-horizontal.right {
  width: 40px;
  right: -40px;
}

.connector-horizontal.left {
  width: 40px;
  left: -40px;
}



.dialog h3 {
  margin-top: 0;
  color: #bfae96; /* Secondary color */
  font-size: 1.2rem;
}

.period {
  font-style: italic;
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: #fff;
}

.description {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #fff;
}

@media (max-width: 768px) {
  .timeline {
    width: 100%;
    flex-direction: column;
  }
  
  .column {
    width: 100%;
    padding: 0;
    align-items: flex-start; /* Alinear a la izquierda en móvil */
  }
  
  .left-column,
  .right-column {
    padding: 0 0 0 60px; /* Espacio para la línea vertical */
  }
  
  .center-line {
    left: 30px;
    height: calc(100% - 50px);
  }
  
  .center-dot {
    left: 30px;
  }
  
  .timeline-item.left,
  .timeline-item.right {
    justify-content: flex-start;
    margin-top: 0 !important; /* Anular el escalonamiento en móviles */
    margin-bottom: 4rem;
  }
  
  .company-block {
    width: 280px;
  }
  
  .connector-horizontal.right,
  .connector-horizontal.left {
    width: 30px;
    left: -30px;
  }
  

  
  .company-block {
    position: relative;
  }

}

/* Estilos para el modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  width: 100%;
  max-width: 500px;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

.modal-header {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.modal-close {
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  color: white;
}

.modal-body {
  padding: 20px;
  color: white;
  background-color: #111;
}

.modal-body h3 {
  margin-top: 0;
  color: #bfae96;
  font-size: 1.2rem;
}
</style>
