<template>
  <div id="app">
    <div class="container text-center">
      <movies-app></movies-app>
    </div>
  </div>
</template>

<script>
import MoviesApp from "./components/MoviesApp";

export default {
  name: "app",
  components: {
    MoviesApp,
  },
};
</script>

<style lang="scss">
  *body{
    background: black;
  }
</style>
