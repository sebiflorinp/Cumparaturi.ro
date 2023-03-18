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
    },

    verificareDateLogare(){
      return (email:string, parola:string) => {
        return this.date.$state.utilizatori.find( (utilizator:any) => utilizator.email == email && utilizator.parola == parola) ? true : false
      }
    },
    verificaEmailDisponibil(){
      return (email:string) => {
        return this.date.$state.utilizatori.find( (utilizator:any) => utilizator.email == email) ? false : true
      }
    }
  },

  actions: {
    creareCont(nume:string, prenume:string, email:string, telefon:string, parola:string){  
        interface utilizator {
          idUtilizator: number
          nume: string
          prenume: string
          calePoza: string
          email: string
          telefon:string
          parola:string
        }
        const utilizatorNou = {} as utilizator
        console.log("fdgfd")
        utilizatorNou.idUtilizator = 3
        utilizatorNou.nume = nume
        utilizatorNou.prenume = prenume
        utilizatorNou.email = email
        utilizatorNou.telefon = telefon
        utilizatorNou.parola = parola
        utilizatorNou.calePoza = "fdsfsd"
        this.date.utilizatori.push(utilizatorNou)
      }
    }
  }
)