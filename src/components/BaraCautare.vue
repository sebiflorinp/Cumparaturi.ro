<template>
  <div class="ceva">
    <div class="containerBaraCautare">
      <input v-model="ceAmCautat" :class="paginaCurenta" type="text">
      <div :class="img"><img class="lupa" src="@/assets/lupa.png" alt="lupa"></div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const paginaCurenta = ref("baraCautare")
  const img = ref("img")
  const ceAmCautat = ref('')

  function cautare(){

  }

</script>

<style scoped>
  @import '../css/BaraCautare.css';
</style>