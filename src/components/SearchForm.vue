<template>
  <div class="row">
    <div class="col">
      <div class="form-group mb-2">
  
        <input type="text" v-model="search" class="buscador__texto form-control" placeholder="ingresa mínimo 3 letras"/>
      </div>

      <div class="form-check form-check-inline mb-2">
        <input
          class="form-radio-input"
          v-model="available"
          :value="true"
          type="radio"
        />

<div class="buscador__selector">
Disponible
</div>
        
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-radio-input"
          v-model="available"
          :value="false"
          type="radio"
        />

<div class="buscador__selector">
No disponible
</div>
        
      </div>



    </div>


  </div>
</template>

<script>
export default {
  computed: {
    search: {
      get() {
        return this.$store.state.filter.query;
      },

      set(val) {
        this.$store.commit("SET_QUERY", val);
      },
    },

    available: {
      get() {
        return this.$store.state.filter.available;
      },
      set() {
        this.$store.commit("SET_AVAILABLE");
      },
    },
  },
};
</script>

<style lang="scss">

.buscador__texto{
  text-align: center;
}

.buscador__selector{
  margin-left: 1rem;;
}

</style>
