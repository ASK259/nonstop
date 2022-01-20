window.onload = function() {
  //document.getElementById("henkilo_tiedot").onsubmit = tallenna;
  document.getElementById("poista").onclick = del;
  document.getElementById("hae").onclick = nouda;
}

function Luohenkilo(enim,snim,osi,posnu,pospa,puhe,sahpo) {
  this.etunimi = enim;
  this.sukunimi = snim;
  this.lahiosoite = osi;
  this.postinumero = posnu;
  this.postitoimipaikka = pospa;
  this.puhelin_oma = puhe;
  this.sahkoposti_oma = sahpo;
}

function tallenna() {
  //let key = document.getElementById("key1").value;
  let eni = document.getElementById("etunimi").value;
  let sni = document.getElementById("sukunimi").value;
  let os = document.getElementById("lahiosoite").value;
  let ponu = document.getElementById("postinumero").value;
  let popa = document.getElementById("postitoimipaikka").value;
  let puh = document.getElementById("puhelin_oma").value;
  let sapo = document.getElementById("sahkoposti_oma").value;
  //console.log(key);
  const person = new Luohenkilo(eni,sni,os,ponu,popa,puh,sapo);
  console.log(person);

  window.localStorage.setItem(sapo,JSON.stringify(person));
}

function nouda() {
  let teAl = document.getElementById("al2");
  let key = document.getElementById("naTie").value;
  let tie = window.localStorage.getItem(key);
  let te = document.createElement("p");
  let ti = document.createTextNode(tie);
  te.appendChild(ti);
  teAl.appendChild(te);
}

function del() {
  let key = document.getElementById("poTie").value;
  localStorage.removeItem(key);
  alert("Tietosi on poistettu!")
}

/*function Luohenkilo(enim,snim,osi,posnu,pospa,puhe,sahpo) {
  this.etunimi = enim;
  this.sukunimi = snim;
  this.lahiosoite = osi;
  this.postinumero = posnu;
  this.postitoimipaikka = pospa;
  this.puhelin_oma = puhe;
  this.sahkoposti_oma = sahpo;
}

const person = new Luohenkilo('en','sN','os1','ponu1','popa1','puh1','sapo1');

console.log(person);*/
