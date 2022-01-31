window.onload = function() {
  document.getElementById("laskuri").onsubmit = tuoTie;
  document.getElementById("laske").onclick = tarkistaKen;
  document.getElementById("laTu").onclick = valTu;
  document.getElementById("poista").onclick = poTu;
}

function LuoTieto(mer,mal,tun,ge,nop,ak1,ak2,pin,crW,tDi) {
  this.merkki = mer;
  this.malli = mal;
  this.tunnus = tun;
  this.gear = ge;
  this.nopeudet = nop;
  this.ak1 = ak1;
  this.ak2 = ak2;
  this.pinion = pin;
  this.crownW = crW;
  this.tDia = tDi;
  this.kirTie = `Merkki ${mer} Malli ${mal} Vaihde ${ge} Nopeudet kierrosluvuilla: ${nop} 1. Akselinhammasluku ${ak1}
    2. Akselinhammasluku ${ak2} Pienilautaspyörä ${pin} Isolautaspyörä ${crW} renkaanhalkaisia ${tDi}`
}

class LuoTieto1 {
  constructor(mer,mal,tun,ge,nop,ak1,ak2,pin,crW,tDi) {
    this.merkki = mer;
    this.malli = mal;
    this.tunnus = tun;
    this.gear = ge;
    this.nopeudet = nop;
    this.ak1 = ak1;
    this.ak2 = ak2;
    this.pinion = pin;
    this.crownW = crW;
    this.tDia = tDi;
    this.kirTie = `Merkki ${mer} Malli ${mal} Vaihde ${ge} Nopeudet kierrosluvuilla: ${nop} 1. Akselinhammasluku ${ak1}
      2. Akselinhammasluku ${ak2} Pienilautaspyörä ${pin} Isolautaspyörä ${crW} renkaanhalkaisia ${tDi}`
  }
}
/*LuoTieto.prototype.kirTie = function() {return `Merkki ${this.merkki} Malli ${this.malli} Vaihde ${this.gear} Nopeudet kierrosluvuilla: ${this.nopeudet} 1. Akselinhammasluku ${this.ak1}
  2. Akselinhammasluku ${this.ak2} Pienilautaspyörä ${this.pinion} Isolautaspyörä ${this.crownW} renkaanhalkaisia ${this.tDia}`;}*/

function tuoTie() {
  let mer = document.getElementById("merkki").value;
  let mal = document.getElementById("malli").value;
  let tun = document.getElementById("tunnus").value;
  let rpmC = document.getElementById("rpmC").value / 1000;
  let rpmS = document.getElementById("rpmS").value  / 1000;
  let rpmE = document.getElementById("rpmE").value  / 1000 ;
  let ge = document.getElementById("gear").value;
  let tDi = document.getElementById("tDia").value;
  let ak1 = document.getElementById("aks1").value;
  let ak2 = document.getElementById("aks2").value;
  let pin = document.getElementById("pinion").value;
  let crW = document.getElementById("crownW").value;
  let vaiSuhLu = aksSuhdLu(ak1,ak2);
  let peraSuhLu = perSuhdLu(crW,pin);
  let vaihKokval = vaihKok(vaiSuhLu,peraSuhLu);
  let tire = renkMit(tDi).toFixed(3);
  let alkNop = maAlkpNop(tire,vaihKokval);
  let nop = noKiLu(alkNop,rpmC,rpmS,rpmE);
  const obj = new LuoTieto(mer,mal,tun,ge,nop,ak1,ak2,pin,crW,tDi)
  let key = document.getElementById("tunnus").value;
  window.localStorage.setItem(tun,JSON.stringify(obj));
}

const noKiLu = (alN,rpmC,rpmS,rpmE) => {
  let nop = [];
  for (var i = rpmS; i <= rpmE; i+= rpmC) {
    nop.push(`Kierrosluvulla ${i * 1000} nopeus on ${alN.toFixed(2) * i} km\h. `);
  }
  return nop;
}

const aksSuhdLu = (ak1,ak2) => ak2 / ak1;

const perSuhdLu = (crW,pin) => crW / pin;

const vaihKok = (vaih,per) => vaih * per;

const renkMit = tDi => tDi * Math.PI / 1000;

const maAlkpNop = (ti,ra) => ti / ra * 60;

function valTu() {
  let key = document.getElementById("haTie").value;
  let ha = window.localStorage.getItem(key);
  console.log(ha);
  let ti = JSON.parse(ha)
  //console.log(Object.values(ti));
  let tu = `Test ${ti.gear}`;
  let te;
  for (const property in ti) {
    te = `${property}: ${ti[property]}`;
  }

  console.log(te);
  document.getElementById("haTu").textContent = ti.kirTie;
}

function poTu() {
  let key = document.getElementById("poTie").value;
  let poTe = document.getElementById("haTu");
  window.confirm("Haluatko varmasti poistaa tietosi");
  localStorage.removeItem(key);
  poTe.textContent = "";
  alert("Tietosi on poistettu!");
}

function tarkistaKen() {

}
