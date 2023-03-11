import { defineStore } from "pinia"
import utilizatori from '@/data/utilizatori.json'
import produse from '@/data/produse.json'

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
    },

    returneazaCelelalteProduseUtilizator(){
      return (idProdus:number) => {
        const idUtilizator = produse.find( (produs:any) => produs.idProdus == idProdus)?.idUtilizator
        return produse.filter( (produs:any) => {
          if(produs.idUtilizator == idUtilizator && produs.idProdus != idProdus) return produs 
        })
      }
    }
  }
})