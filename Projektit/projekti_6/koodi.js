window.onload = function() {
  document.getElementById("henkilo_tiedot").onsubmit = tallenna;
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
  let eni = document.getElementById("etunimi").value;
  let sni = document.getElementById("sukunimi").value;
  let os = document.getElementById("lahiosoite").value;
  let ponu = document.getElementById("postinumero").value;
  let popa = document.getElementById("postitoimipaikka").value;
  let puh = document.getElementById("puhelin_oma").value;
  let sapo = document.getElementById("sahkoposti_oma").value;
  const person = new Luohenkilo(eni,sni,os,ponu,popa,puh,sapo);
  window.localStorage.setItem(sapo,JSON.stringify(person));
}

function nouda() {
  let teAl = document.getElementById("al2");
  let key = document.getElementById("naTie").value;
  if (localStorage.getItem(key) === null) {
    alert("Et ole antanut tietojasi tai olet antanut väärän sähköpostiosoitteen!")
  } else {
      let tie = window.localStorage.getItem(key);
      const he = JSON.parse(tie);
      console.log(he);
      let te = document.createElement("p");
      te.setAttribute("id", "talTie");
      let ti = document.createTextNode(tie);
      te.appendChild(ti);
      teAl.appendChild(te);
      }
}

function del() {
  let key = document.getElementById("poTie").value;
  let poTe = document.getElementById("talTie");
  if (localStorage.getItem(key) === null) {
    alert("Et ole antanut tietojasi tai olet antanut väärän sähköpostiosoitteen!")
  } else {
      poTe.remove();
      localStorage.removeItem(key);
      alert("Tietosi on poistettu!");
    }
}
