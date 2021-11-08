<template>
  <div>
    <h2>Search Movie</h2>
    <div>
      <input type="search" v-model="searchValue" />
      <button @click="search()">Search</button>

      <div>Movie Number: {{ searchTypeMovie }}</div>
      <div>Fovorite Movie Number: {{ favNumber }}</div>
    </div>
    <b-spinner v-show="loading" variant="primary" />
    <div v-if="searchResults !== []">
      <b-card
        class="m-3"
        v-for="(movie, index) in searchResults"
        :key="index"
        :title="movie.title"
        :sub-title="movie.titleType"
        style="min-width: 20rem"
      >
        <b-button
          v-if="movie.fav !== true"
          @click="addFavorite(movie, 'add')"
          variant="primary"
        >
          Add <b-badge variant="light">+</b-badge>
        </b-button>
        <b-button v-else @click="addFavorite(movie, 'del')" variant="danger">
          Delete <b-badge variant="light">-</b-badge>
        </b-button>

        <div v-if="movie.image">
          <b-img :src="movie.image.url" fluid></b-img>
        </div>

        <b-list-group class="mt-4" v-if="movie.principals">
          <b-list-group-item v-for="(el,$i) in movie.principals" :key="$i"
            @click="goActorPage(el.id)"
          >
            {{el.name}}
          </b-list-group-item>
        </b-list-group>

        <button @click="goDetails(movie.id)" class="card-link mt-2">Detail</button>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "SearchMovie",

  data() {
    return {
      searchValue: "",
      loading: false,
    };
  },

  methods: {
    ...mapActions(["searchFromMovieTitle"]),
    ...mapMutations(['SET_FAV','SET_MOVIE_DETAILS']),
    search() {
      this.$router.push({
        name: "SearchMovie",
        query: { title: this.searchValue },
      });
      this.loading = true;
      this.searchFromMovieTitle(this.searchValue).then(() => {
        this.loading = false;
      });
    },
    addFavorite(movie, type) {
      this.SET_FAV({ type, movie });
    },
    goDetails(id) {
      this.$router.push({ path: "/movie-detail" + id });
    },
    goActorPage(id){
       this.$router.push({ path: "/actor" + id });
    }
  },
  computed: {
    ...mapGetters(["searchTypeMovie", "favNumber"]),
    ...mapState(["searchResults"]),
    // searchResults() {
    //   return this.$store.state.searchResults;
    // },
  },

  // beforeRouteLeave (next) { //beforeRouteEnter, beforeRouteUpdate
  //   this.SET_MOVIE_DETAILS({type:'del'})
  //   next();
  // },

  //sayfa yenilenince arama listesinin gitmemesi
  mounted() {
    if (this.$route.query.title) {
      this.loading = true;
      this.searchValue = this.$route.query.title;
      this.searchFromMovieTitle(this.searchValue).then(() => {
        this.loading = false;
      });
    }
  },
};
</script>
