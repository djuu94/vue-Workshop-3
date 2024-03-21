
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';

const app = createApp(App)

app.use(router)
app.mount('#app')

//npx json-server --watch db.json --port 3000
// port 8080