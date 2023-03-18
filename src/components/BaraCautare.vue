<template>
    <div class="containerBaraCautare">
      <input v-model="ceAmCautat" :class="$route.name == 'Pagina principala' ? 'baraCautare' : 'baraCautare pCautare'" type="text">
      <router-link :to=" $route.name == 'Pagina principala' ? 'cautare/1/' + ceAmCautat : ceAmCautat">
        <div :class="$route.name == 'Pagina principala' ? 'img' : 'img imgPCautare'"><img class="lupa" src="@/assets/lupa.png" alt="lupa"></div>
      </router-link>
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