import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "patika",
    apiUrl: "https://imdb8.p.rapidapi.com/",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "83b6a8d056msh586464f5c969161p114268jsnd0bb370711c6",
    },
    searchResults: [],
    favMovies: [],
    movieDetails: [],
  },
  mutations: {
    SET_MOVIE_SEARCH_RESULT(state, payload) {
      state.searchResults = payload;
    },
    SET_FAV(state, payload) {
      switch (payload.type) {
        case "add":
          {
            let i = state.searchResults.findIndex(
              (el) => el.id === payload.movie.id
            );
            state.searchResults[i] = { ...state.searchResults[i], fav: true };
            state.favMovies.push(payload.movie);
          }
          break;

        default: {
          let i = state.favMovies.findIndex((el) => el.id === payload.movie.id);
          state.searchResults[i] = { ...state.searchResults[i], fav: false };
          state.favMovies.splice(i, 1);
        }
      }
    },
    SET_MOVIE_DETAIL_RESULT(state, payload) {
      state.movieDetails = payload;
    },
  },
  actions: {
    searchFromMovieTitle({ state, commit }, payload) {
      axios
        .get(`${state.apiUrl}title/find`, {
          headers: { ...state.headers },
          params: { q: payload },
        })
        .then((res) => {
          console.log(res.data.results);
          let data = [];
          //get data
          for (let i = 0; i < res.data.results.length; i++) {
            //get data contain image
            if (res.data.results[i].image) {
              data.push(res.data.results[i]);
            }
          }

          commit("SET_MOVIE_SEARCH_RESULT", data);
        })
        .catch((err) => console.log(err));
    },
    getMovieDetail({ state, commit }, payload) {
      axios
        .get(`${state.apiUrl}title/get-details`, {
          headers: { ...state.headers },
          params: { tconst: payload },
        })
        .then((res) => {
          console.log(res);

          commit("SET_MOVIE_DETAIL_RESULT", res.data);
        })
        .catch((err) => console.log(err));
    },
  },
  getters: {
    searchTypeMovie: (state) => {
      let res = 0;
      for (let i = 0; i < state.searchResults.length; i++) {
        if (state.searchResults[i].titleType === "movie") res++;
      }
      return res;
    },
    favNumber: (state) => {
      return state.favMovies.length;
    },
  },
  modules: {},
});
