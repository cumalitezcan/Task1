import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"patika",
    apiUrl:'https://imdb8.p.rapidapi.com/',
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': '83b6a8d056msh586464f5c969161p114268jsnd0bb370711c6'
  },
   searchResults:[]
  },
  mutations: {
    SET_MOVIE_SEARCH_RESULT(state,payload){
      state.searchResults = payload
    }
  },
  actions: {
    searchFromMovieTitle({state,commit},payload){
    axios.get(`${state.apiUrl}title/find`,{headers:{...state.headers}, params : {q: payload}})
    .then(res => {
      console.log(res)
      commit("SET_MOVIE_SEARCH_RESULT",res)
    }).catch(err=>{
      console.log(err)
    })
  }
},
  modules: {
  }
})
