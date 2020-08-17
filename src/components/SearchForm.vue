<template>
  <div class="row">
    <div class="col">
      <div class="form-group mb-2">
        <label class="sr-only">Escribe tu búsqueda</label>
        <input type="text" v-model="search" class="form-control" />
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-radio-input"
          v-model="available"
          :value="true"
          type="radio"
        />

        Disponible
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-radio-input"
          v-model="available"
          :value="false"
          type="radio"
        />

        No disponible
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
