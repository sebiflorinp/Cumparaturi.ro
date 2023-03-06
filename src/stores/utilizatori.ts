import { defineStore } from "pinia"
import utilizatori from '@/data/utilizatori.json'

export const useUtilizatori = defineStore("utilizatori", {
  state: () => {
    return { utilizatori }
  },
  getters: {
    returneazaInformatiiUtilizatorDupaIdProdus(){
      return (id:number) => {
        return utilizatori.filter( (utilizator:any) => {
          return utilizator.idUtilizator == id
        })
      }
    },
    returneazaPozaProfilDupaId(){
      return (idUtilizator:number) => {
        return utilizatori.filter( (utilizator:any) => {
          return utilizator.idUtilizator == idUtilizator
        })[0].calePoza
      }
    }
  }
})