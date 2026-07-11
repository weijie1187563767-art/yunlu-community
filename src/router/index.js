import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import House from '../views/House.vue'
import Decoration from '../views/Decoration.vue'
import MapView from '../views/Map.vue'
import Forum from '../views/Forum.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/house', name: 'house', component: House },
    { path: '/decoration', name: 'decoration', component: Decoration },
    { path: '/map', name: 'map', component: MapView },
    { path: '/forum', name: 'forum', component: Forum }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
