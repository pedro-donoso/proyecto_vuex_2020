<template>
  <div>
  <div class="container" id="hero-section">
  <h2 class="text-center buscador__title">Buscador con Vuex</h2>
    <h6 class="text-muted">* 100 peliculas de ejemplo, disponibilidad según API</h6>
  <div class="buscador">
   <search-form></search-form>
 </div>
  </div>
    <hr>
    <movie-list></movie-list>
  </div>
</template>

<script>
import SearchForm from './SearchForm';
import MovieList from './MovieList';

export default {
    components: {
        SearchForm,
        MovieList
    }
}
</script>

<style lang="scss">
  #hero-section{
    border: solid 1px red;
    background: yellowgreen;
  }

.buscador__title{
  color: blue;
}


</style>