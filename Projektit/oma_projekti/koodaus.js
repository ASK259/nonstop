window.onload = function() {
  document.getElementById("laskuri").onsubmit = tuoTie;
  document.getElementById("laske").onclick = tarkistaKen;
  document.getElementById("laTu").onclick = valTu;
  document.getElementById("poista").onclick = poTu;
}

function tuoTie(ko) {
  let mer = document.getElementById("merkki").value;
  let mal = document.getElementById("malli").value;
  let tun = document.getElementById("tunnus").value;
  let rpmV = document.getElementById("rpmC").value;
  let ge = document.getElementById("gear").value;
  let ak1 = document.getElementById("aks1").value;
  let ak2 = document.getElementById("aks2").value;
  let pin = document.getElementById("pinion").value;
  let crW = document.getElementById("crownW").value;
}

function valTu() {

}

function poTu() {

}

function tarkistaKen() {

}
