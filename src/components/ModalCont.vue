<template>
  <div @click.self="dbDate.accesareCont = false" class="backgroundModal">
    <div class="containerContinutModal">
      <div class="selectieLogareCreareCont">
        <div @click="logare = true" class="Logare" :class="{ activ:logare}">
          <p class="labelLogare">{{ dbDate.logat ? 'Cont' : 'Logare'  }}</p>
        </div>
        <div v-if="!dbDate.logat" @click=" logare = false" class="CreareCont" :class="{ activ:!logare}">
          <p class="labelCreareCont">Creare cont</p>
        </div>
      </div>
      <div v-if="logare && dbDate.logat" class="continut">
        <div class="containerInformatiiUtilizator">
          <div class="containerPozaProfil">
            <img :src="require('@/assets/pozeProfil/' + dbUtilizatori.returneazaPozaProfilDupaId(dbDate.idUtilizatorLogat))" alt="pozaProfil">
          </div>
          <div class="informatii">
            <p>Utilizator: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaId(dbDate.idUtilizatorLogat).nume }} {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaId(dbDate.idUtilizatorLogat).prenume }}</p>
            <p>Email: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaId(dbDate.idUtilizatorLogat).email }} </p>
            <p>Telefon: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaId(dbDate.idUtilizatorLogat).telefon }} </p>
          </div>
        </div>
        <button @click="dbDate.logat = false">Delogare</button>
      </div>
      <div v-else-if="logare" class="continut">
        <p class="labelLogareEmail">Email</p>
        <input v-model="emailLogare" type="text">
        <p class="labelLogareParola">Parola</p>
        <input v-model="parolaLogare" type="password">
        <p v-if="logareReusita == false && incercat == true" class="mesajAvertizare">Datele introduse sunt gresite</p>
        <button @click="incercareLogare()" type="submit">Logare</button>
      </div>
      <div v-else-if="creareContReusit == false" class="continut">
        <p class="labelCCNume">Nume (4-12 caractere)</p>
        <input v-model="numeCC" type="text">
        <p class="labelCCPrenume">Prenume (4-12 caractere)</p>
        <input v-model="prenumeCC" type="text">
        <p class="labelCCEmail">Email</p>
        <input v-model="emailCC" type="text">
        <p class="labelCCTelefon">Telefon</p>
        <input v-model="telefonCC" type="text">
        <p class="labelCCParola">Parola (4-12 caractere)</p>
        <input v-model="parola1CC" type="password">
        <p class="labelCCConfirmareParola">Confirmare parola</p>
        <input v-model="parola2CC" type="password">
        <p class="mesajAvertizareCreareCont"> {{ mesajCreareCont }}</p>
        <button @click=" verificareDateCreareCont() == true ? creareCont() : mesajCreareCont = verificareDateCreareCont()" type="submit">Creare cont</button>
      </div>
      <div v-else class="continut">
        <p class="mesajFelicitare">Contul a fost creat cu success</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useUtilizatori } from '@/stores/utilizatori.ts'
  import { useData } from '@/stores/date.ts'
  import { ref } from 'vue'

  const dbUtilizatori = useUtilizatori()
  const dbDate = useData()

  const logare = ref(true)
  const emailLogare = ref("")
  const parolaLogare = ref("")
  const incercat = ref(false)

  const numeCC = ref("")
  const prenumeCC = ref("")
  const emailCC = ref("")
  const telefonCC = ref("")
  const parola1CC = ref("")
  const parola2CC = ref("")
  const creareContReusit = ref(false)
  const mesajCreareCont = ref("")


  function incercareLogare(){
    dbDate.logat = dbUtilizatori.verificareDateLogare(emailLogare.value, parolaLogare.value)
    incercat.value = true
    dbDate.idUtilizatorLogat = dbUtilizatori.returneazaIdUtilizatorDupaEmail(emailLogare.value)
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

  function creareCont(){
    dbUtilizatori.creareCont(numeCC.value,prenumeCC.value,emailCC.value,telefonCC.value,parola1CC.value)
    creareContReusit.value = true
  }

</script>

<style>
  @import '@/css/ModalCont.css';
</style>