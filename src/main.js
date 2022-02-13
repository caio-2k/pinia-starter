import { createApp } from 'vue'
import App from './App.vue'

// Create Pinia method
import { createPinia } from 'pinia'

const app = createApp(App);


app.use(createPinia())
app.mount('#app')
