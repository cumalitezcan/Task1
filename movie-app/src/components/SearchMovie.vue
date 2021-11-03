<template>
    <div>
        <h2>Search Movie</h2>
        <div>
            <input type="search" v-model="searchValue" />
            <button @click="search()">Search</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchMovie",

    data(){
        return{
            searchValue: ""
        }
    },

    methods:{
        
        search(){
            console.log("geldi")
            this.$store.dispatch("searchFromMovieTitle",this.searchValue)
        }
    }
}
</script>