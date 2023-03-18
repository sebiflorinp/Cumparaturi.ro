import { defineStore } from "pinia"
import { useData } from "./date"


export const useTaguri = defineStore("taguri", {
  state: () => {
    const date = useData()
    return { date }
  },

  getters:{

    returneazaTagCategorie(){
      return (idProdus:number) => {
        const idCategorie = this.date.$state.produse.find( (produs:any) => produs.idProdus == idProdus)?.idCategorie
        return this.date.$state.categorii.find( (categorie:any) => categorie.idCategorie == idCategorie)?.nume
      }
    },

    returneazaProdus(){
      return (idProdus:number) => {
        return this.date.$state.produse.find( (produs:any) => produs.idProdus == idProdus)
      }
    },

    returneazaStare(){
      return (idProdus:number) => {
        const idStare = this.date.$state.produse.find( (produs:any) => produs.idProdus == idProdus)?.idStare
        return this.date.$state.stari.find( (stare:any) =>  stare.idStare == idStare )?.stare
      }
    },

    returneazaJudet(){
      return (idProdus:any) => {
        const idJudet = this.date.$state.produse.find( (produs:any) => produs.idProdus == idProdus)?.idJudet
        return this.date.$state.judete.find( (judet:any) => judet.idJudet == idJudet)?.nume
      }
    }
  }
})