import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

createApp(App).mount('#app')

// document.addEventListener('wheel', (event) => {
//   const app = document.getElementById('app')
//   const scrollAmount = window.innerHeight
//   if (event.deltaY > 0) {
//     app.scrollBy({ top: scrollAmount, behavior: 'smooth' })
//   } else {
//     app.scrollBy({ top: -scrollAmount, behavior: 'smooth' })
//   }
// })
