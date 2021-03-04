import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTimes)

createApp(App).mount('#app')
