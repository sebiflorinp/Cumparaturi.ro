<template>
  <div class="header">
    <RouterLink :to ="{name: 'Pagina principala'}" class="logoIntoarcere" v-if="$route.name != 'Pagina principala'">Cumparaturi.ro</RouterLink>
    <p v-else></p>
    <ul class="containerButoane">
      <li @click="apasareCont" class="buton">Cont</li>
      <li @click="apasareVinde" class="buton">Vinde</li>
      <li @click="dbDate.accesareAnunturi = true" class="buton">Anunturi Publicate</li>
    </ul>
  </div>
</template>

<script setup>
  import { useData } from "@/stores/date.ts"

  const dbDate = useData()

  function apasareCont(){
    dbDate.accesareCont = true
  }

  function apasareVinde(){
    dbDate.accesareVinde = true
  }

</script>

<style scoped>
  @import '../css/Header.css';
</style>