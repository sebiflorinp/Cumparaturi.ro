import { defineStore } from "pinia"
import { useData } from "./date"

export const useProduse = defineStore("produse", {
  state: () => {
    const date = useData()
    return { date }
  },

  getters: {

    returneazaProdusDupaId(){
      return (id:number) => {
        return this.date.$state.produse.find( (produs:any) => produs.idProdus == id)
      }
    },

    returneazaPozeProdusDupaId(){
      return (id:number) => {
        return this.date.$state.pozeProduse.filter( (poza:any) => poza.idProdus == id)
      }
    },

    returneazaAnunturiPromovate(){
      return () => {
        return this.date.$state.produse.filter( (produs:any) => produs.promovat == true).reverse()
      }
    },

    returneazaAnunturiRecente(){
      return () => {
        return this.date.$state.produse.slice().reverse()
      }
    },

    returneazaIdUtilizatorDupaProdus(){
      return (idProdus:number) => {
        return this.date.$state.produse.find( (produs:any) => produs.idProdus == idProdus)?.idUtilizator
      }
    }

  }
})