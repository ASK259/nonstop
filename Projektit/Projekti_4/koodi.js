var tehtNi = document.getElementById("as"); // tehtävän nimi
var lOT = document.getElementsByTagName("li");
var eLT = document.querySelector("ul");
var liPa = document.getElementById("lis"); // Lisäys näppäin
var liEnt = document.getElementById("askare");
var list = document.getElementById("lista");
var muok = document.querySelector("li");

liPa.addEventListener("click", lisPainJalk);

function tehtPi() {
  return tehtNi.value.length;
}

function listPi() {
  return lOT.length;
}

function lisPainJalk() {
  if (tehtPi() > 0) {
    luoList();
  } else {
    alert(`Kirjoita tehtävä kenttään!`);
  }
}

function lLEJ() {
  if (event.which == 13) {
    if (tehtPi() < 1) {
      alert(`Kirjoita tehtävä kenttään!`);
    } else {
      luoList();
    }
  }
}

function luoList() {
  var lLi = document.createElement("li");
  console.log(tehtNi.value);
  var lLS = document.createTextNode(tehtNi.value);
  lLi.appendChild(lLS);
  eLT.appendChild(lLi);
  tehtNi.value = "";
  function ekaVari() {
   lLi.classList.toggle("listaTyyli2");
  }
  lLi.addEventListener("click",ekaVari);
  var poNap = document.createElement("button");
  poNap.appendChild(document.createTextNode("X"));
  poNap.setAttribute("id", "pois");
  lLi.appendChild(poNap);
  poNap.addEventListener("click", poTeh);
  function poTeh() {
     lLi.classList.add("piilota");
  }
}
