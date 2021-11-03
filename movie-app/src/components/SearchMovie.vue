<template>
  <div>
    <h2>Search Movie</h2>
    <div>
      <input type="search" v-model="searchValue" />
      <button @click="search()">Search</button>
    </div>
    <div v-if="searchResults !== []">
      <b-card
        v-for="(movie, index) in searchResults"
        :key="index"
        :title="movie.title"
        :sub-title="movie.titleType"
      >
      <div v-if="movie.image">
        <b-img :src="movie.image.url" fluid></b-img>
      </div>
        <b-card-text>
          Some quick example text to build on the <em>card title</em> and make
          up the bulk of the card's content.
        </b-card-text>

        <b-card-text>A second paragraph of text in the card.</b-card-text>

        <a href="#" class="card-link">{{movie.id}}</a>
        <b-link href="#" class="card-link">Another link</b-link>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMovie",

  data() {
    return {
      searchValue: "",
    };
  },

  methods: {
    search() {
      console.log("geldi");
      this.$store.dispatch("searchFromMovieTitle", this.searchValue);
    },
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    },
  },
};
</script>
