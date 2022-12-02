let cautat = localStorage.getItem("cautat");

window.onload = function() {
    let ceAmCautat = document.querySelectorAll("p")[1];
    ceAmCautat.textContent= ` "${cautat}"`;
}

let ordonarePretApasat = 0;
let ordonarePret = "ASC";

function arataOptiuniPret()
{
    let container = document.getElementsByClassName("containerSortare")[0];
    let listaSortare = container.querySelectorAll("ul")[0];
    let listaPret = listaSortare.querySelectorAll("ul")[0];
    let liPret = listaPret.querySelectorAll("li")[0];
    if(ordonarePretApasat == 0)
    {
        liPret.style.backgroundColor="#DFDFDF";
        let liCrescator = document.createElement("li");
        liCrescator.onclick = () => {
            liCrescator.style.backgroundColor = "#DFDFDF";
            liDescrescator.remove();
            ordonarePret = "ASC";
        }
        liCrescator.classList.add("formaButon");
        liCrescator.textContent="Crescator";
        listaPret.appendChild(liCrescator);
        let liDescrescator = document.createElement("li");
        liDescrescator.onclick = () => {
            liDescrescator.style.backgroundColor = "#DFDFDF";
            liCrescator.remove();
            ordonarePret = "DESC";
        }
        liDescrescator.classList.add("formaButon");
        liDescrescator.textContent="Descrescator";
        listaPret.appendChild(liDescrescator);
        ordonarePretApasat = 1;
    }
    else
    {
        liPret.style.backgroundColor="#f3f3f3";
        let deEliminat = listaPret.querySelectorAll("li")[1];
        if(deEliminat != null || deEliminat !=undefined)
        deEliminat.remove();
        deEliminat = listaPret.querySelectorAll("li")[1];
        if(deEliminat != null || deEliminat !=undefined)
        deEliminat.remove();
        ordonarePretApasat = 0;
        ordonarePret = "ASC";
    }
}

let ordonareDataApasat = 0;
let ordonareData = "ASC";

function arataOptiuniData()
{
    let container = document.getElementsByClassName("containerSortare")[0];
    let listaSortare = container.querySelectorAll("ul")[0];
    let listaData = listaSortare.querySelectorAll("ul")[1];
    let liData = listaData.querySelectorAll("li")[0];
    if(ordonareDataApasat == 0)
    {
        liData.style.backgroundColor="#DFDFDF";
        let liCrescator = document.createElement("li");
        liCrescator.onclick = () => {
            liCrescator.style.backgroundColor = "#DFDFDF";
            liDescrescator.remove();
            ordonareData = "ASC";
        }
        liCrescator.classList.add("formaButon");
        liCrescator.textContent="Crescator";
        listaData.appendChild(liCrescator);
        let liDescrescator = document.createElement("li");
        liDescrescator.onclick = () => {
            liDescrescator.style.backgroundColor = "#DFDFDF";
            liCrescator.remove();
            ordonarePret = "DESC";
        }
        liDescrescator.classList.add("formaButon");
        liDescrescator.textContent="Descrescator";
        listaData.appendChild(liDescrescator);
        ordonareDataApasat = 1;
    }
    else
    {
        liData.style.backgroundColor="#f3f3f3";
        let deEliminat = listaData.querySelectorAll("li")[1];
        if(deEliminat != null || deEliminat !=undefined)
        deEliminat.remove();
        deEliminat = listaData.querySelectorAll("li")[1];
        if(deEliminat != null || deEliminat !=undefined)
        deEliminat.remove();
        ordonareDataApasat = 0;
        ordonareData = "ASC";
    }
}