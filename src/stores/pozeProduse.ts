import { defineStore } from "pinia"
import pozeProduse from '@/data/pozeProduse.json'

export const usePozeProduse = defineStore("pozeProduse", {
  state: () => {
    return { pozeProduse }
  },
  getters: {
    returneazaObiectPozeProdusDupaId(){
      return (id:number) => {
        console.log(pozeProduse.filter( (poza:any) => { return poza.idProdus == id }))
        return pozeProduse.filter( (poza:any) => { return poza.idProdus == id })
      }
    },
    returneazaCalaImagineDupaId(){
      return (id:number, img:number) => {
        return pozeProduse.filter( (poza:any) => { return poza.idProdus == id })[img].cale
      }
    }
  }
})