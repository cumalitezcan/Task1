<template>
  <div>
    
    {{ this.$route.params }}
    <div v-if="movieDetails !== []">
        <h3>{{movieDetails.title}}</h3>
        <div v-if="movieDetails.image">
          <b-img :src="movieDetails.image.url" fluid />
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "MovieDetails",
  computed: {
    ...mapState(["movieDetails"]),
  },
  methods: {
    ...mapActions(["getMovieDetail"]),
  },
  created() {
    console.log(this.$route.params);
    if (this.$route.params.id) this.getMovieDetail(this.$route.params.id);
  },
};
</script>
