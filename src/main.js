import './assets/main.css'

import { createApp } from 'vue'
import { loadSlim } from '@tsparticles/slim'
import { primaryColor, secondaryColor } from '@/constants'
import Particles from '@tsparticles/vue3'
import App from './App.vue'
let app = createApp(App)

document.documentElement.style.setProperty('--primary-color', primaryColor)
document.documentElement.style.setProperty('--secondary-color', secondaryColor)

app
  .use(Particles, {
    init: async (engine) => {
      await loadSlim(engine)
    },
  })
  .mount('#app')
