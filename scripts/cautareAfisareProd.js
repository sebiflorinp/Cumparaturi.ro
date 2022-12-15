const sqlite3 = require('sqlite3').verbose();

alert("merge");

let db = new sqlite3.Database('../dataBase.db',sqlite3.OPEN_READWRITE,(err)=>{
    if(err){
        console.error(err.message);
    }
    console.log("s-a conectat baza de date");
})
alert("merge");
let sql = 'select * from produse inner join pozeProdus on produse.idProdus = pozeProdus.idProdus where vandut = ? order by dataPublicare';

let calePoza;
let numeProdus;
let pretProdus;

window.onload = function(){
    alert("merge");
    let container = document.getElementsByClassName("containerProduse")[0];
    db.each(sql, ['nu'],(err,row)=>{
        if(err){
            console.error(err.message);
        }
        calePoza = row.calePoza;
        numeProdus = row.nume;
        pretProdus = row.pret;
        alert(calePoza);
        alert(numeProdus);
        alert(pretProdus);
        let containerProdus = document.createElement("div");
        containerProdus.classList.add("produs");
        let imgProdus = document.createElement("img");
        imgProdus.src=calePoza;
        imgProdus.classList.add("pozaProdus");
        containerProdus.appendChild(imgProdus);
        let pNumeProdus = document.createElement("p");
        pNumeProdus.textContent=numeProdus;
        pNumeProdus.classList.add("titluProdus");
        containerProdus.appendChild(pNumeProdus);
        let pPretProdus = document.createElement("p");
        pPretProdus.textContent=pretProdus;
        pPretProdus.classList.add("pretProdus");
        containerProdus.appendChild(pPretProdus);
        container.appendChild(containerProdus);
    })
};
