<template>
  <div class="backgroundModal">
    <div class="containerContinutModal">
      <div class="selectieLogareCreareCont">
        <div @click="logare = true" class="Logare" :class="{ activ:logare}">
          <p class="labelLogare">Logare</p>
        </div>
        <div @click=" logare = false" class="CreareCont" :class="{ activ:!logare}">
          <p class="labelCreareCont">Creare cont</p>
        </div>
      </div>
      <div v-if="logare && incercat && logareReusita" class="continut">
        <p class="mesajFelicitare">Logare Reusita!</p>
      </div>
      <div v-else-if="logare" class="continut">
        <p class="labelLogareEmail">Email</p>
        <input v-model="emailLogare" type="text">
        <p class="labelLogareParola">Parola</p>
        <input v-model="parolaLogare" type="password">
        <p v-if="logareReusita == false && incercat == true" class="mesajAvertizare">Datele introduse sunt gresite</p>
        <button @click="incercareLogare()" type="submit">Logare</button>
      </div>
      <div v-else class="continut">
        <p class="labelCCNume">Nume (4-12 caractere)</p>
        <input v-model="numeCC" type="text">
        <p class="labelCCPrenume">Prenume (4-12 caractere)</p>
        <input v-model="prenumeCC" type="text">
        <p class="labelCCEmail">Email</p>
        <input v-model="emailCC" type="text">
        <p class="labelCCTelefon">Telefon</p>
        <input v-model="telefonCC" type="text">
        <p class="labelCCParola">Parola (4-12 caractere)</p>
        <input v-model="parola1CC" type="text">
        <p class="labelCCConfirmareParola">Confirmare parola</p>
        <input v-model="parola2CC" type="text">
        <button @click=" verificareDateCreareCont() == true ? dbUtilizatori.creareCont(numeCC,prenumeCC,emailCC,telefonCC,parola1CC) : mesajCreareCont = verificareDateCreareCont()" type="submit">Creare cont</button>
      </div>
      <p> {{ mesajCreareCont }}</p>
    </div>
  </div>
</template>

<script setup>
  import { useUtilizatori } from '@/stores/utilizatori.ts'
  import { ref } from 'vue'

  const dbUtilizatori = useUtilizatori()
  const logare = ref(true)
  const emailLogare = ref("")
  const parolaLogare = ref("")
  const incercat = ref(false)
  const logareReusita = ref(false)
  const numeCC = ref("")
  const prenumeCC = ref("")
  const emailCC = ref("")
  const telefonCC = ref("")
  const parola1CC = ref("")
  const parola2CC = ref("")
  const creareContReusit = ref(false)
  const mesajCreareCont = ref("")


  function incercareLogare(){
    logareReusita.value = dbUtilizatori.verificareDateLogare(emailLogare.value, parolaLogare.value)
    incercat.value = true
  }

  function verificareDateCreareCont(){
    if(parola1CC.value != parola2CC.value)
      return "Parolele nu corespund"
    if(!dbUtilizatori.verificaEmailDisponibil(emailCC.value))
      return "Emailul este luat"
    if(numeCC.value.length < 4 || prenumeCC.value.length < 4 || parola1CC.value.length < 4)
      return "Datele introduse nu respecta restrictiile mentionate"
    if(numeCC.value == "" || prenumeCC.value == "" || emailCC.value == "" || telefonCC.value == "" || parola1CC.value == "" || parola2CC.value == "")
    return "Nu s-au completat toate campurile"
    return true
  } 

</script>

<style>
  @import '@/css/ModalCont.css';
</style>