<template>
  <div class="row" v-if="movies.lenght > 0">
    <movie :movie="movie" v-for="movie in movies" :key="movie.id"></movie>
  </div>
</template>

<script>

import Movie from './MovieItem';
import {mapGetters} from 'vuex';

export default {
    components: {
        Movie
    },

    computed: {
        ...mapGetters({
            movies: 'filteredMovies',
        })
    }
}

</script>

<style>

</style>