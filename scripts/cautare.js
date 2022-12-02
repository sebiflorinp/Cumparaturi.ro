let cautat = localStorage.getItem("cautat");
let ordonarePretApasat = 0;

window.onload = function() {
    let ceAmCautat = document.querySelectorAll("p")[1];
    ceAmCautat.textContent= ` "${cautat}"`;
}

function arataOptiuniPret()
{
    let container = document.getElementsByClassName("containerSortare")[0];
    let listaSortare = container.querySelectorAll("ul")[0];
    let listaPret = listaSortare.querySelectorAll("ul")[0];
    if(ordonarePretApasat == 0)
    {
        let liCrescator = document.createElement("li");
        liCrescator.classList.add("formaButon");
        liCrescator.textContent="Crescator";
        listaPret.appendChild(liCrescator);
        let liDescrescator = document.createElement("li");
        liDescrescator.classList.add("formaButon");
        liDescrescator.textContent="Descrescator";
        listaPret.appendChild(liDescrescator);
        ordonarePretApasat = 1;
    }
    else
    {
        let deEliminat = listaPret.querySelectorAll("li")[1];
        deEliminat.remove();
        deEliminat = listaPret.querySelectorAll("li")[1];
        deEliminat.remove();
        ordonarePretApasat = 0;
    }
}