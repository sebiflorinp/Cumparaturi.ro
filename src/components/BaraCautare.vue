<template>
    <div class="containerBaraCautare">
      <input v-model="ceAmCautat" :class="$route.name == 'Pagina principala' ? 'baraCautare' : 'baraCautare pCautare'" type="text">
      <router-link @keyup.enter="submit" :to="$route.name == 'Pagina principala' ? 'cautare/' + ceAmCautat : '/cautare/' + ceAmCautat">
        <div :class="$route.name == 'Pagina principala' ? 'img' : 'img imgPCautare'"><img class="lupa" src="@/assets/lupa.png" alt="lupa"></div>
      </router-link>
    </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const props = defineProps(['ceAmCautat'])

  const paginaCurenta = ref("baraCautare")
  const img = ref("img")
  const ceAmCautat = ref('')

</script>

<style scoped>
  @import '../css/BaraCautare.css';
</style>