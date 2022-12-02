let cautat = localStorage.getItem("cautat");

window.onload = function() {
    let ceAmCautat = document.querySelectorAll("p")[1];
    ceAmCautat.textContent= ` "${cautat}"`;
}

