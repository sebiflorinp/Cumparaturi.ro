<template>
  <div class="ceva">
    <div class="containerBaraCautare">
      <input v-model="ceAmCautat" :class="paginaCurenta" type="text">
      <router-link :to="'cautare/1/' + ceAmCautat">
        <div :class="img"><img class="lupa" src="@/assets/lupa.png" alt="lupa"></div>
      </router-link>
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