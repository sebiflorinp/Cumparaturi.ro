function cautare()
{
    let cautat = document.querySelectorAll("input")[0].value;
    alert(cautat);
    localStorage.setItem("cautat",cautat);
}