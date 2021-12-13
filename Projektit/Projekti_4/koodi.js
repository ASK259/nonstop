var teh = document.getElementById("as");
let lOT = document.getElementsByTagName("li");
let eLT = document.querySelector("li");
let liPa = document.getElementById("lisaa");
let liEnt = document.getElementById("askare");
console.log(teh);

function aPi() {
  return teh.value.length;
}


function aPituus() {

}

function luoLi() {
  let lLi = document.createElement("li");
  lLS.appendChild(document.createTextNode(teh.value));
  lLi.appendChild(lLS);
  teh.value = "";
}

function lLPJ() {
  if (aPi()>0) {
    luoLi();
  }
}

function lLEJ() {
  if (aPi()>0 && event.which == 13) {
    luoLi();
  }
}
liPa.document.getElementById("lisaa").addEventListener("click", lLPJ());
