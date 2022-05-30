import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/tailwind.css"
import { MotionPlugin } from '@vueuse/motion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faArrowDown)

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.component('font-awesome-icon',FontAwesomeIcon)

app.mount('#app')
