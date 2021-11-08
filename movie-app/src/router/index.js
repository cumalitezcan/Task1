import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchMovie from "@/components/SearchMovie"
import MovieDetails from "@/components/MovieDetails"
import ActorDetails from "@/components/ActorDetails"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search-movie',
    name: 'SearchMovie',
    component: SearchMovie
  },
  {
    path: '/search-movie',
    name: 'SearchMovie',
    component: SearchMovie,
   
  },
  {
    path: '/movie-detail/title/:id',
    name: 'movie-details',
    component: MovieDetails,
   
  },
  {
    path: '/actor/name/:id',
    name: 'actor-details',
    component: ActorDetails,
   
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
