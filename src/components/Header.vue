<template>
  <div class="header">
    <RouterLink :to ="{name: 'Pagina principala'}" class="logoIntoarcere" v-if="$route.name != 'Pagina principala'">Cumparaturi.ro</RouterLink>
    <p v-else></p>
    <ul class="containerButoane">
      <li @click="apasareCont" class="buton">Cont</li>
      <li class="buton">Vinde</li>
      <li class="buton">Setari</li>
    </ul>
  </div>
</template>

<script setup>
  import { useData } from "@/stores/date.ts"

  const dbDate = useData()

  function apasareCont(){
    dbDate.accessareCont = true
  }

</script>

<style scoped>
  @import '../css/Header.css';
</style>