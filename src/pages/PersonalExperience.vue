<template>
  <TemplateSection class="experience-container">
    <h1 class="section-title">Experiencia Profesional</h1>

    <div class="timeline-grid">
      <div class="center-line">
        <div class="end-dot"></div>
      </div>

      <div
        v-for="(job, index) in jobs"
        :key="index"
        :class="['grid-item', index % 2 === 0 ? 'left' : 'right']"
        :style="{ gridRow: index + 1 }"
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

        <div
          :class="['connector-horizontal', index % 2 === 0 ? 'right' : 'left']"
        ></div>
      </div>

      <div class="modal" v-if="selectedJob" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div
            class="modal-header"
            :style="{ backgroundColor: selectedJob.color }"
          >
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
import TemplateSection from "@/components/TemplateSection.vue";

export default {
  name: "PersonalExperience",
  components: {
    TemplateSection,
  },
  data() {
    return {
      isMobile: false,
      selectedJob: null,
      jobs: [
        {
          company: "MO Technologies",
          designation: "Tech Lead",
          period: "Diciembre 2021 - Actual",
          year: "Actual",
          description: "Tech lead encargado de desplegar y mantener features del core crediticio de la empresa, ademas de asegurar la arquitectura y buenas practicas del core utilizando domain driven design.",
          color: "#2d4e7c", // Primary color
          showDialog: false,
        },
        {
          company: "MyTeamAbroad",
          designation: "Senior Developer",
          period: "Julio 2020 - Diciembre 2021",
          year: "2021",
          description: "Parte del departamento de Innovación para cliente en el sector de automoción, desarrollando soluciones con algoritmos de aprendizaje automatico.",
          color: "#3a6299", // Slightly lighter primary
          showDialog: false,
        },
        {
          company: "789.mx",
          designation: "Mid Developer",
          period: "Agosto 2019 - Noviembre 2019",
          year: "2019",
          description: "Se desarrollaron módulos para empresas de transporte en Laravel y páginas de seguros con Vue.",
          color: "#4876b4", // Even lighter primary
          showDialog: false,
        },
        {
          company: "Jam IT Solucion",
          designation: "Junior Developer",
          period: "Junio 2017 - Agosto 2019",
          year: "2019",
          description: "Se desarrollaron módulos para un ERP y un sistema de gestión de citas para un spa clínico, ambos en Laravel.",
          color: "#5a8ac9", // Lightest primary
          showDialog: false,
        },
      ],
    };
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener("resize", this.checkIfMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkIfMobile);
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    openJobDetails(job) {
      this.selectedJob = job;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.selectedJob = null;
      document.body.style.overflow = "";
    },
  },
};
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

.section-title {
  margin-bottom: 4rem;
  font-size: 2.5rem;
  color: var(--secondary-color);
  text-align: center;
  width: 100%;
}

.timeline-grid {
  display: grid;
  grid-template-columns: 1fr 30px 1fr;
  width: 80%;
  max-width: 700px;
  position: relative;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 100px;
  min-height: 500px;
  justify-items: center;
  align-items: start;
}

.center-line {
  position: absolute;
  width: 4px;
  height: 80%;
  background-color: #bfae96;
  z-index: 1;
  justify-self: center;
}

.end-dot {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background-color: #bfae96;
  border-radius: 50%;
  z-index: 2;
}

.grid-item {
  position: relative;
  z-index: 5;
  width: 100%;
  display: flex;
}

.grid-item.left {
  grid-column: 1;
  justify-self: end;
  justify-content: center;
  padding-right: 30px;
}

.grid-item.right {
  grid-column: 3;
  justify-self: start;
  justify-content: center;
  padding-left: 30px;
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
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
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

.connector-horizontal {
  position: absolute;
  background-color: #bfae96;
  height: 3px;
  top: 50px;
  z-index: -1;
  width: 50%;
}

.connector-horizontal.right {
  right: -15px;
}

.connector-horizontal.left {
  left: -15px;
}


.period {
  font-style: italic;
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #fff;
}

.description {
  font-size: 1.3rem;
  line-height: 1.4;
  color: #fff;
}

@media (max-width: 768px) {
  .timeline-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 8px;
    padding-top: 0;
    padding-bottom: 30px;
    width: 100%;
    position: relative;
  }

  .center-line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    height: 100%;
    top: 0;
    width: 4px;
  }

  .grid-item.left,
  .grid-item.right {
    grid-column: 1;
    justify-self: center;
    margin-bottom: 20px;
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
    width: 100%;
    display: flex;
  }

  .connector-horizontal.right,
  .connector-horizontal.left {
    width: 100px;
    left: -30px;
    right: auto;
    z-index: -1;
  }

  .company-block {
    width: 280px;
    position: relative;
    margin: 0 auto;
  }

  .connector-horizontal {
    display: none;
  }

  .end-dot {
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
  }
}

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
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  font-size: 2rem;
}
</style>
