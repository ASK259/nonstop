let kortit = [
  {nimi: "pa1", img: "1.1.png"},
  {nimi: "pa1", img: "1.2.png"},
  {nimi: "pa2", img: "2.1.png"},
  {nimi: "pa2", img: "2.2.png"},
  {nimi: "pa3", img: "3.1.png"},
  {nimi: "pa3", img: "3.2.png"},
  {nimi: "pa4", img: "4.1.png"},
  {nimi: "pa4", img: "4.2.png"},
  {nimi: "pa5", img: "5.1.png"},
  {nimi: "pa5", img: "5.2.png"},
  {nimi: "pa6", img: "6.1.png"},
  {nimi: "pa6", img: "6.2.png"},
  {nimi: "pa7", img: "7.1.png"},
  {nimi: "pa7", img: "7.2.png"},
  {nimi: "pa8", img: "8.1.png"},
  {nimi: "pa8", img: "8.2.png"},
  {nimi: "pa9", img: "9.1.png"},
  {nimi: "pa9", img: "9.2.png"},
  {nimi: "pa10", img: "10.1.png"},
  {nimi: "pa10", img: "10.2.png"},
  {nimi: "pa11", img: "11.1.png"},
  {nimi: "pa11", img: "11.2.png"},
  {nimi: "pa12", img: "12.1.png"},
  {nimi: "pa12", img: "12.2.png"},
  {nimi: "pa13", img: "13.1.png"},
  {nimi: "pa13", img: "13.2.png"},
  {nimi: "pa14", img: "14.1.png"},
  {nimi: "pa14", img: "14.2.png"},
  {nimi: "pa15", img: "15.1.png"},
  {nimi: "pa15", img: "15.2.png"},
  {nimi: "pa16", img: "16.1.png"},
  {nimi: "pa16", img: "16.2.png"},
  {nimi: "pa17", img: "17.1.png"},
  {nimi: "pa17", img: "17.2.png"},
  {nimi: "pa18", img: "18.1.png"},
  {nimi: "pa18", img: "18.2.png"},
];

function respo() {
  let ti = window.innerWidth;
  let tu = document.getElementById("vika");
  tu.textContent = ti;
}

let cardId = [];
let cardS = [];
let cli = 0;

function luoPeli() {
  // muuttuja ja funktio nollaavat pelin
  let po = document.getElementById("peli");
  while (po.hasChildNodes()) {
    po.removeChild(po.firstChild);
  }
  // tähän tulisi kortit
  let ko = document.getElementById("pelivalikko"); //hakee pudotusvalikon valinnan
  let tau = Array.from(ko.options); //luo taulukon pudotusvalikon tiedoista
  let rM; //rivien määrä muuttuja
  let cM; //solujen määrä muuttuja
  let kL = 0; // pelin toiminta
  let ver = -1; // pelin toiminta
  let vaL; // pelin toiminta
  let seis;
  let pist = 0;
  // Määrittää pelialueen koon
  for (let i = 0;i<tau.length;i++) {
    if(tau[i].selected == true) {
      rM = parseInt(tau[i].value), cM = parseInt(tau[i].value.slice(-1));
    }
  }
  let ma = rM * cM;
  let kayKo = kortit.slice(0, ma);
  function kello() {
    var sek = 0;
    var min = 0;
    let val = setInterval(function() {
      var aik = sek +" " + min;
      sek++;
      if(sek == 60) {
        min++;
        sek = 0;
      }
    },1000);
  }
  function sek() {
    kayKo.sort(() => 0.5 - Math.random());
  }
  sek(kayKo); // pelin toiminta
  let alk  = document.getElementById("peli"); // hakee pelialueen
  let tbl = document.createElement("table"); // lou tablen
  let tBo = document.createElement("tbody"); // luodaan elementti
  let tu = document.createElement("aside"); // luo alueen johon tulee aika ja pisteet
  let tuTe = document.createTextNode(`Aika: ${kello()}
  Pisteet: ${pist}`); //aika & pisteet tekstialueen luonti
  tu.appendChild(tuTe); //aika & pisteet alueeseen liitetään aika & pisteet tekstialue
  alk.appendChild(tu); // pelialueeseen liitetään aika & pisteet alue
  //alla rakennetaan taulukko ja samaalla muokattaan sen muotoiluita
  for (let i = 0; i < rM; i++) {
    let row = document.createElement("tr"); // rivi
    for (let j = 0; j < cM; j++) {
      let cll = document.createElement("td"); // solu
      if (cM == 6) {
        cll.style.width = "20vw";
        cll.style.height = "30vh";
        tbl.style.width = '80%';
        tbl.style.margin = '2% 10% 2% 10%';
        tu.style.margin = '8% 0 0 2.5%';
      } else {
        tbl.style.width = '60%';
        tbl.style.margin = '2% 20% 2% 20%';
      }
      let clTe = document.createElement("img"); // luodaan soluun kuva elementti
      clTe.src = "tummakansi.png"; // kuvaelementtiin määritetään kuva
       // kuvalle id
      clTe.setAttribute('class', "ve"); // kuvalle class
      //kuvalle EventListener ja mitä tehdään.
      clTe.addEventListener('click', function () {
        
        stop(clTe);

      })
      console.log(clTe);
      clTe.style.width = "100%"; // kuvan muotoilua
      clTe.style.height = "auto"; // kuvan muotoilua
      //console.log(clTe);
      //cll.addEventListener( 'click', function () {
        //;})
      cll.setAttribute('class', "an"); // solulle class
      //cll.setAttribute("alt", kayKo[(kl)]); // solulle alt
      //cll.setAttribute(); // solulle id
      cll.setAttribute("name", kL); // solulle name
      console.log(cll);
      cll.appendChild(clTe); // kuva liitetään soluun
      row.appendChild(cll); // solu liitetään riviin
    }
    tBo.appendChild(row); // rivi liitetään tbodyyn
  }
  console.log(cardId);
  tbl.appendChild(tBo); // tbody liitetään tableen
  alk.appendChild(tbl); // table liitetään sectioniin
  tbl.setAttribute("border", "2"); // tablen muotoilua
}

//piilottaa "Valitse peli ja se tulostuu tähän" - tekstin, kun valitaan peli
function piTe() {
  document.getElementById("peO").hidden = true;
}

// Tyhjennä painikkeen toiminnot
function nollaa() {
  let po = document.getElementById("peli");
  console.log(po);
  while (po.hasChildNodes()) {
    po.removeChild(po.firstChild);
  }
  document.getElementById("peO").hidden = false;
  let fo = document.getElementsByTagName("footer")[0];
  fo.style.position = "fixed";
}

//Footerin sijainnin ohjaus
function foMu() {
  let fo = document.getElementsByTagName("footer")[0];
  fo.style.position = "relative";
}

//pelin toiminta (kesken)
function pis() {
  let pi = 0;
  pi++;
}
//pelin toiminta (kesken)
function nay(numero,ver) {
  let tun = document.getElementById("cll"+numero);
  let alT = document.getAttribute("alt");
  if (ver != -1) {
    vaL = ver.getAttribute("alt");
  } else {
    vaL = ver;
  }
  tun.innerHTML = "testing" + alT;
  if (alT == vaL) {
    alT = tun.getAttribute("alt");
  }
}

//kuvan palautus käännetystä takaisin
function stop(st) {
  setTimeout(function(){
  st.src = "tummakansi.png";
}, 1000);
}

//Alla olevat ovat animoituun kuvankääntöön, mikä ei toimi eikä ole käytössä
function kaan() {
  let ku = document.querySelector('.an');
  //return ku.classList.toggle('hover');
  return ku.addEventListener( 'click', function () {
    ku.classList.toggle('hover');
  })
}

function kaan2() {
  let ku = document.querySelector('.ve');
  ku.addEventListener( 'click', function () {
    ku.classList.toggle('hov');
  })
  console.log(ku);
  return ku.classList.toggle('hov');
}
