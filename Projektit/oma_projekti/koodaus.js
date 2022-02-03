const test = tu => console.log(tu);

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
      2. Akselinhammasluku ${ak2} pienenlautaspyöränhammasluku on ${pin} Isonlautaspyöränhammasluku on ${crW} renkaan halkaisia on ${tDi}mm`
  }
}

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
  let key = document.getElementById("tunnus").value;
  let vaiSuhLu = aksSuhdLu(ak1,ak2);
  let peraSuhLu = perSuhdLu(crW,pin);
  let vaihKokval = vaihKok(vaiSuhLu,peraSuhLu);
  let tire = renkMit(tDi).toFixed(3);
  let alkNop = maAlkpNop(tire,vaihKokval);
  let nop = noKiLu(alkNop,rpmC,rpmS,rpmE);
  const obj = new LuoTieto1(mer,mal,tun,ge,nop,ak1,ak2,pin,crW,tDi);
  console.log(obj);
  document.getElementById("tuSyAr").textContent = obj.kirTie;
  window.localStorage.setItem(tun,JSON.stringify(obj));
}

const noKiLu = (alN,rpmC,rpmS,rpmE) => {
  let nop = [];
  for (var i = rpmS; i <= rpmE; i+= rpmC) {
    nop.push(`Kierrosluvulla: ${i * 1000} nopeus on ${alN.toFixed(2) * i} km\h `);
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
  if (localStorage.getItem(key) === null) {
    alert("Ei löydy tietoja. Tarkista tunnus.");
    document.getElementById("haTie").value = "";
  } else {
    let ha = window.localStorage.getItem(key);
    let ti = JSON.parse(ha);
    document.getElementById("haTu").textContent = ti.kirTie;
    document.getElementById("haTie").value = "";
  }
}

function poTu() {
  let key = document.getElementById("poTie").value;
  let poTe = document.getElementById("haTu");
  window.confirm("Haluatko varmasti poistaa tietosi");
  localStorage.removeItem(key);
  poTe.textContent = "";
  document.getElementById("poTie").value = "";
  document.getElementById("tuSyAr").textContent = "";
  alert("Tietosi on poistettu!");
}

function Pona() {
  document.getElementById("tuSyAr").textContent = "";
}

function validateForm() {
  let mer = document.getElementById("merkki").value;
  let mal = document.getElementById("malli").value;
  let tun = document.getElementById("tunnus").value;
  let rpmC = document.getElementById("rpmC").value;
  let rpmS = document.getElementById("rpmS").value;
  let rpmE = document.getElementById("rpmE").value;
  let ge = document.getElementById("gear").value;
  let tDi = document.getElementById("tDia").value;
  let ak1 = document.getElementById("aks1").value;
  let ak2 = document.getElementById("aks2").value;
  let pin = document.getElementById("pinion").value;
  let crW = document.getElementById("crownW").value;
  const tark = (arv) => (arv.length == 4) ? true : false; // kierrosluvun pituuden tarkistus funktio
  if (mer.length > 20 || /\d/ig.test(mer) == true || mer.length == 0 || /\W/g.test(mer) == true ) {
    alert(`Syötä merkki!`);
    laskuri.merkki.focus();
    return (false);
  } else if (mal.length > 20 || mal.length == 0) {
    alert(`Syötä malli!`);
    laskuri.malli.focus();
    return (false);
  } else if (tun.length > 15 || tun.length == 0) {
    alert(`Syötä tunnus!`);
    laskuri.tunnus.focus();
    return (false);
  } else if (rpmC <= 4 || /\D/ig.test(rpmC) == true) {
    alert(`Syötä kierrosluvun nousuväli!`);
    laskuri.rpmC.focus();
    return (false);
  } else if (tark(rpmS) == false || /\D/ig.test(rpmS) == true) {
    alert(`Syötä aloitus kierrosluku!`);
    laskuri.rpmS.focus();
    return (false);
  } else if (tark(rpmE) == false || /\D/ig.test(rpmE) == true) {
    alert(`Syötä kierrosluvun päättymispiste!`);
    laskuri.rpmE.focus();
    return (false);
  } else if (ge.length != 1 || isNaN(ge)) {
    alert(`Syötä vaihde!`);
    laskuri.gear.focus();
    return (false);
  } else if (tDi.length > 4 || tDi.length == 0 || /\D/ig.test(tDi) == true) {
    alert(`Syötä renkaanhalkaisia!`);
    laskuri.tDia.focus();
    return (false);
  } else if (ak1.length > 3 || ak1.length == 0 || /\D/ig.test(ak1) == true){
    alert(`Syötä 1. akselinhammasluku!`);
    laskuri.aks1.focus();
    return (false);
  } else if (ak2.length > 3 || ak2.length == 0 || /\D/ig.test(ak2) == true) {
    alert(`Syötä 2. akselinhammasluku!`);
    laskuri.aks2.focus();
    return (false);
  } else if (pin.length > 2 || pin.length == 0 || /\D/ig.test(pin) == true) {
    alert(`Syötä pienenlautaspyöränhammasluku!`);
    laskuri.pinion.focus();
    return (false);
  } else if (crW.length > 3 || crW.length == 0 || /\D/ig.test(crW) == true) {
    alert(`Syötä isonlautaspyöränhammasluku!`);
    laskuri.crownW.focus();
    return (false);
  }
}
