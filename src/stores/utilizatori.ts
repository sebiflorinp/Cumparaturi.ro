import { defineStore } from "pinia"
import { useData } from "./date"

export const useUtilizatori = defineStore("utilizatori", {
  state: () => {
    const date = useData()
    return { date }
  },

  getters: {

    returneazaInformatiiUtilizatorDupaIdProdus(){
      return (idProdus:number) => {
        const idUtilizator = this.date.$state.produse.find( (produs:any) => produs.idProdus == idProdus)?.idUtilizator
        return this.date.$state.utilizatori.find( (utilizator:any) => utilizator.idUtilizator == idUtilizator)
      }
    },

    returneazaPozaProfilDupaId(){
      return (idUtilizator:number) => {
        return this.date.$state.utilizatori.find( (utilizator:any) => utilizator.idUtilizator == idUtilizator)?.calePoza
      }
    },

    returneazaCelelalteProduseUtilizator(){
      return (idProdus:number) => {
        const idUtilizator = this.date.$state.produse.find( (produs:any) => produs.idProdus == idProdus)?.idUtilizator
        return this.date.$state.produse.filter( (produs:any) => {
          if(produs.idUtilizator == idUtilizator && produs.idProdus != idProdus) return produs 
        })
      }
    }
    
  }
})