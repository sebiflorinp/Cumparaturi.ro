<template>
  <p class="logo">CUMPARATURI.RO</p>
  <BaraCautare/>
  <p class="numeBaraProduse">Categorii populare</p>
  <BaraProduse tipBaraAnunturi="categorii"/>
  <p class="numeBaraProduse">Anunturi promovate</p>
  <BaraProduse tipBaraAnunturi="produsePromovate"/>
  <p class="numeBaraProduse">Anunturi recente</p>
  <BaraProduse tip="produs"/>
</template>

<script setup>
  import BaraCautare from '../components/BaraCautare.vue';
  import BaraProduse from '../components/BaraProduse.vue';
</script>

<style lang="scss" scoped>
  @import '../css/app.css';
</style>
