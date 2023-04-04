import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '81922183478-jud8pfus2uov7rt64q6k5lhldojd25er.apps.googleusercontent.com'
}).use(store).use(router).mount('#app')
