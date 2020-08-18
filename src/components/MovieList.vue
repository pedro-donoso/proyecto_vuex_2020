<template>
  <div class="row">
  
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