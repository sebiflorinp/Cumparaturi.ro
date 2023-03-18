import { defineStore } from "pinia"


export const useData = defineStore("data", {
  state: () => {
    return {
      logat: false,
      categorii: [
        {"idCategorie": 1, "nume": "Electronice", "cale": "1.jpg", "activ":false},
        {"idCategorie": 2, "nume": "Haine", "cale": "2.jpg", "activ":false},
        {"idCategorie": 3, "nume": "Masini", "cale": "3.webp", "activ":true},
        {"idCategorie": 4, "nume": "Jucarii", "cale": "4.jpg", "activ":false},
        {"idCategorie": 5, "nume": "Carti", "cale": "5.jpg", "activ":true},
        {"idCategorie": 6, "nume": "Imobiliare", "cale": "6.jpg", "activ":false},
        {"idCategorie": 7, "nume": "Animale", "cale": "7.jpg", "activ":false},
        {"idCategorie": 8, "nume": "Diverse", "cale": "8.jpg", "activ":false}
      ],
      judete: [
        { "idJudet": 1, "nume": "Bucureşti", "activ":false},
        { "idJudet": 2, "nume":"Alba", "activ":false},
        { "idJudet": 3, "nume":"Arad", "activ":false},
        { "idJudet": 4, "nume":"Arges", "activ":false},
        { "idJudet": 5, "nume":"Bacău", "activ":false},
        { "idJudet": 6, "nume":"Bihor", "activ":false},
        { "idJudet": 7, "nume":"Bistriţa-Năsăud", "activ":false},
        { "idJudet": 8, "nume":"Botoşani", "activ":false},
        { "idJudet": 9, "nume":"Braşov", "activ":false},
        { "idJudet": 10, "nume":"Brăila", "activ":false},
        { "idJudet": 11, "nume":"Buzău", "activ":false},
        { "idJudet": 12, "nume":"Caraş-Severin", "activ":false},
        { "idJudet": 13, "nume":"Călăraşi", "activ":false},
        { "idJudet": 14, "nume":"Cluj", "activ":false},
        { "idJudet": 15, "nume":"Constanţa", "activ":false},
        { "idJudet": 16, "nume":"Covasna", "activ":false},
        { "idJudet": 17, "nume":"Dâmboviţa", "activ":false},
        { "idJudet": 18, "nume":"Dolj", "activ":false},
        { "idJudet": 19, "nume":"Galaţi", "activ":false},
        { "idJudet": 20, "nume":"Giurgiu", "activ":false},
        { "idJudet": 21, "nume":"Gorj", "activ":false},
        { "idJudet": 22, "nume":"Harghita", "activ":false},
        { "idJudet": 23, "nume":"Hunedoara", "activ":false},
        { "idJudet": 24, "nume":"Ialomiţa", "activ":false},
        { "idJudet": 25, "nume":"Iaşi", "activ":false},
        { "idJudet": 26, "nume":"Ilfov", "activ":false},
        { "idJudet": 27, "nume":"Maramureş", "activ":false},
        { "idJudet": 28, "nume":"Mehedinţi", "activ":false},
        { "idJudet": 29, "nume":"Mureş", "activ":false},
        { "idJudet": 30, "nume":"Neamţ", "activ":false},
        { "idJudet": 31, "nume":"Olt", "activ":false},
        { "idJudet": 32, "nume":"Prahova", "activ":false},
        { "idJudet": 33, "nume":"Satu Mare", "activ":false},
        { "idJudet": 34, "nume":"Sălaj", "activ":false},
        { "idJudet": 35, "nume":"Sibiu", "activ":false},
        { "idJudet": 36, "nume":"Suceava", "activ":false},
        { "idJudet": 37, "nume":"Teleorman", "activ":false},
        { "idJudet": 38, "nume":"Timiş", "activ":false},
        { "idJudet": 39, "nume":"Tulcea", "activ":false},
        { "idJudet": 40, "nume":"Vâlcea", "activ":false},
        { "idJudet": 41, "nume":"Vaslui", "activ":false},
        { "idJudet": 42, "nume":"Vrancea", "activ":false}
      ],
      pozeProduse: [
        {"idProdus": 1, "cale":"1.webp", "idPoza": 1},
        {"idProdus": 2, "cale":"2.webp", "idPoza": 2},
        {"idProdus": 3, "cale":"3.jpg", "idPoza": 3},
        {"idProdus": 4, "cale":"4.jpg", "idPoza": 4},
        {"idProdus": 5, "cale":"5.jpg", "idPoza": 5},
        {"idProdus": 6, "cale":"6.jpg", "idPoza": 6},
        {"idProdus": 7, "cale":"7.jpg", "idPoza": 7},
        {"idProdus": 8, "cale":"8.webp", "idPoza": 8},
        {"idProdus": 9, "cale":"9.jpg", "idPoza": 9},
        {"idProdus": 10, "cale":"10.jpg", "idPoza": 10},
        {"idProdus": 11, "cale":"11.jpg", "idPoza": 11},
        {"idProdus": 12, "cale":"12.jpg", "idPoza": 12},
        {"idProdus": 5, "cale":"13.jpg", "idPoza": 13},
        {"idProdus": 13, "cale":"14.webp", "idPoza": 14},
        {"idProdus": 14, "cale":"15.jpg", "idPoza": 15},
        {"idProdus": 15, "cale":"16.jpg", "idPoza": 16}
      ],
      produse: [
        {"idProdus": 1, "nume": "Pc", "cale":"1.webp", "promovat": true, "idCategorie": 1, "pret": 1000, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 2, "nume": "Masina de spalat", "cale":"2.webp", "promovat": false, "idCategorie": 1, "pret": 2000, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 3, "nume": "Tricou", "cale":"3.jpg", "promovat": false, "idCategorie": 2, "pret": 20, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 4, "nume": "Pisica", "cale":"4.jpg", "promovat": true, "idCategorie": 7, "pret": 100, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 5, "nume": "GTX 1650", "cale":"5.jpg", "promovat": true, "idCategorie": 1, "pret": 1600, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 6, "nume": "Catel", "cale":"6.jpg", "promovat": false, "idCategorie": 7, "pret": 120, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 7, "nume": "RX 5500 XT", "cale":"7.jpg", "promovat": true, "idCategorie": 1, "pret": 2000, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 8, "nume": "Blugi", "cale":"8.webp", "promovat": true, "idCategorie": 2, "pret": 30, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 9, "nume": "Dacia", "cale":"9.jpg", "promovat": false, "idCategorie": 3, "pret": 200000, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 10, "nume": "Bloc", "cale":"10.jpg", "promovat": false, "idCategorie": 6, "pret": 100000000, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 11, "nume": "Sarpe", "cale":"11.jpg", "promovat": false, "idCategorie": 7, "pret": 1600, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 12, "nume": "Morometii", "cale":"12.jpg", "promovat": false, "idCategorie": 5, "pret": 10, "idUtilizator": 1, "idStare": 1, "idJudet":36, "descriere":"Acesta este descrierea unui produs"},
        {"idProdus": 13, "nume": "Laptop", "cale":"13.webp", "promovat": true, "idCategorie": 1, "pret": 2000, "idUtilizator": 2, "idStare": 2, "idJudet":16, "descriere":"Un laptop fain. Nu stiu cat de bun ii, dar merge"},
        {"idProdus": 14, "nume": "Chitara", "cale":"14.jpg", "promovat": false, "idCategorie": 8, "pret": 300, "idUtilizator": 2, "idStare": 2, "idJudet":16, "descriere":"O chitara faina"},
        {"idProdus": 15, "nume": "Vioara", "cale":"15.jpg", "promovat": true, "idCategorie": 8, "pret": 1000, "idUtilizator": 2, "idStare": 1, "idJudet":16, "descriere":"O vioara faina"}
      ],
      stari: [
        {"idStare": 1, "stare":"Nou", "activ":false},
        {"idStare": 2, "stare":"Foarte Buna", "activ":false},
        {"idStare": 3, "stare":"Buna", "activ":false},
        {"idStare": 4, "stare":"Acceptabil", "activ":false},
        {"idStare": 5, "stare":"Vechi", "activ":false},
        {"idStare": 6, "stare":"Rea", "activ":false}
      ],
      utilizatori: [  
        { "idUtilizator":1, "nume": "Pahomi", "prenume": "Sebastian", "calePoza":"1.jpg", "email":"sebiflorinpp@gmail.com", "telefon":"0711111111", "parola":"parola"},
        { "idUtilizator":2, "nume": "Georgescu", "prenume": "George", "calePoza":"2.png", "email":"george@georgescu.com", "telefon":"0712345678", "parola":"parolaparola"}
      ]     
    }
  },
  persist: true
})