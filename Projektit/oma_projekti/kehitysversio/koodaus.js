const test = tu => console.log(tu); // funktio, jos pitää tarkastaa konsolissa, jonkin muuttujan sisältö

class LuoTieto1 { // constructor objektille
  constructor(mer,mal,tun) {
    this.merkki = mer;
    this.malli = mal;
    this.tunnus = tun;
    this.gears = [];
    this.tuNay = `Merkki: ${mer} Malli: ${mal}`;
  }
}

class LisaaVaihde { // constructor uudelle vaihteelle
  constructor(ge,nop,ak1,ak2,pin,crW,tDi) {
    this.gear = ge;
    this.nopeudet = nop;
    this.ak1 = ak1;
    this.ak2 = ak2;
    this.pinion = pin;
    this.crownW = crW;
    this.tDia = tDi;
    this.tuNay1 = `Vaihde: ${ge} Nopeudet: ${nop} 1. Akselinhammasluku ${ak1} 2. Akselinhammasluku ${ak2} pienenlautaspyöränhammasluku on ${pin}
    Isonlautaspyöränhammasluku on ${crW} renkaan halkaisia on ${tDi}mm`;
  }
}

function tuoTie() { // lukee tiedot lomakkeesta, laskee tiedot, luo objektin ja tallentaa tiedot localStorage:n
  let mer = document.getElementById("merkki").value; // luetaan merkki
  let mal = document.getElementById("malli").value; // luetaan malli
  let tun = document.getElementById("tunnus").value; // luetaan tunnus tiedoille
  let rpmC = document.getElementById("rpmC").value / 1000; // luetaan kierrosten kasvuväli
  let rpmS = document.getElementById("rpmS").value  / 1000; // luetaan kierrosten alku
  let rpmE = document.getElementById("rpmE").value  / 1000 ; // luetaan kierrosten loppu
  let ge = document.getElementById("gear").value; // luetaan vaihde
  let tDi = document.getElementById("tDia").value; // luetaan renkaanhalkaisia
  let ak1 = document.getElementById("aks1").value; // luetaan 1. akselinhammasluku
  let ak2 = document.getElementById("aks2").value; // luetaan 2. akselinhammasluku
  let pin = document.getElementById("pinion").value; // luetaan pienenlautaspyöränhammasluku
  let crW = document.getElementById("crownW").value; // luetaan isonlautaspyöränhammasluku
  let key = document.getElementById("tunnus").value; // luetaan key
  if (localStorage.getItem(key) === null) { // Katsotaan onko jo olemassa tällä tunnuksella objekti
    let vaiSuhLu = aksSuhdLu(ak1,ak2); // lasketaan vaihteensuhdeluku
    let peraSuhLu = perSuhdLu(crW,pin); // lasketaan peränsuhdeluku
    let vaihKokval = vaihKok(vaiSuhLu,peraSuhLu); // lasketaan vaihteenkonaisluku
    let tire = renkMit(tDi).toFixed(3); // lasketaan renkaanympärysmitta
    let alkNop = maAlkpNop(tire,vaihKokval); // lasketaan alkunopeus
    let nop = noKiLu(alkNop,rpmC,rpmS,rpmE); // lasketaan nopeudet eri kierrosluvuilla
    const obj = new LuoTieto1(mer,mal,tun); // luodaan objekti constructorilla
    obj.gears[ge] = (new LisaaVaihde(ge,nop,ak1,ak2,pin,crW,tDi));// Lisätään objektiin vaihde
    document.getElementById("tuSyAr").textContent = `${obj.tuNay}${obj.gears[ge].tuNay1}`; // tulostetaan näytölle objektin tiedot
    window.localStorage.setItem(tun,JSON.stringify(obj)); // lähetetään objekti localStorage:n
  } else {
    let ha = window.localStorage.getItem(key); // haetaan objekti localStorage:sta
    let ti = JSON.parse(ha); // muutetaan JavaScript muotoon
    if (ti.gears[ge] == null) { // katsotaan onko jo olemassa tiedot vaihteelle joka halutaan lisätä
      window.confirm(`Vaihteelle`);
      let vaiSuhLu = aksSuhdLu(ak1,ak2); // lasketaan vaihteensuhdeluku
      let peraSuhLu = perSuhdLu(crW,pin); // lasketaan peränsuhdeluku
      let vaihKokval = vaihKok(vaiSuhLu,peraSuhLu); // lasketaan vaihteenkonaisluku
      let tire = renkMit(tDi).toFixed(3); // lasketaan renkaanympärysmitta
      let alkNop = maAlkpNop(tire,vaihKokval); // lasketaan alkunopeus
      let nop = noKiLu(alkNop,rpmC,rpmS,rpmE); // lasketaan nopeudet eri kierrosluvuilla
      ti.gears[ge] = new LisaaVaihde(ge,nop,ak1,ak2,pin,crW,tDi); //luodaan vaihde
      document.getElementById("tuSyAr").textContent = `${ti.tuNay}${ti.gears[ge].tuNay1}`; // tulostetaan näytölle luodun vaihteen tiedot
      window.localStorage.setItem(tun,JSON.stringify(ti)); // lähetetään täydennetty objekti localStorage:n
    } else { // toiminta mikäli on olemassa vaihde
      window.confirm(`Vaihteelle ${ge} on jo olemassa tiedot! Haluatko ylikirjoittaa tiedot?`); // kysytään halutaanko korvata olemassa oleva vaihde
      let vaiSuhLu = aksSuhdLu(ak1,ak2); // lasketaan vaihteensuhdeluku
      let peraSuhLu = perSuhdLu(crW,pin); // lasketaan peränsuhdeluku
      let vaihKokval = vaihKok(vaiSuhLu,peraSuhLu); // lasketaan vaihteenkonaisluku
      let tire = renkMit(tDi).toFixed(3); // lasketaan renkaanympärysmitta
      let alkNop = maAlkpNop(tire,vaihKokval); // lasketaan alkunopeus
      let nop = noKiLu(alkNop,rpmC,rpmS,rpmE); // lasketaan nopeudet eri kierrosluvuilla
      ti.gears[ge] = new LisaaVaihde(ge,nop,ak1,ak2,pin,crW,tDi); // korvataan vaihde objektissa
      document.getElementById("tuSyAr").textContent = `${ti.tuNay}${ti.gears[ge].tuNay1}`; // tulostetaan näytölle vaihteen tiedot
      window.localStorage.setItem(tun,JSON.stringify(ti)); // lähetetään muokattu objekti localStorage:n
    }
  }
}

const noKiLu = (alN,rpmC,rpmS,rpmE) => { // funktio laskee nopeuden kierrosluvuille
  let nop = [];
  let rpm;
  let kmh;
  for (var i = rpmS; i <= rpmE; i+= rpmC) {
    rpm = i * 1000;
    kmh = alN * i;
    nop.push(`Kierrosluvulla: ${rpm.toFixed()} nopeus on ${kmh.toFixed(3)} km\h `); // luo tekstin tuloksilla varustettuna
  }
  return nop; // palauttaa lasketut tiedot
}

const aksSuhdLu = (ak1,ak2) => ak2 / ak1; // laskee vaihteensuhdeluvun

const perSuhdLu = (crW,pin) => crW / pin; // laskee peränsuhdeluvun

const vaihKok = (vaih,per) => vaih * per; // laskee vaihteen kokonaisvälityksen

const renkMit = tDi => tDi * Math.PI / 1000; // laskee renkaanympärysmitan

const maAlkpNop = (ti,ra) => ti / ra * 60; // laskee nopeuden kierrosluvulla 1000rpm

function valTu() { // hakee tiedot localStorage:sta
  let key = document.getElementById("haTie").value; // luetaan key
  if (localStorage.getItem(key) === null) { // tarkastetaan key
    alert("Ei löydy tietoja. Tarkista tunnus.");
    document.getElementById("haTie").value = "";
  } else {
    let ha = window.localStorage.getItem(key); // haetaan objekti localStorage:sta
    let ti = JSON.parse(ha); // muutetaan JavaScript muotoon
    let te = ti.gears.slice();
    let tu = [];
    console.log(te);
    console.log(tu);
    if (ti.gears.length > 1) {
      let ge = window.prompt(`Valitse seuraavista vaihteista ${te} se minkä tiedot haluat katsoa`, `kirjoita vaihteen numero`);
      console.log(ti.gears[ge]);
      document.getElementById("haTu").textContent = `${ti.tuNay}${ti.gears[ge].tuNay1}`;
    }
    //document.getElementById("haTu").textContent = ti.kirTie; // tulostetaan tiedot näytölle
    //document.getElementById("haTie").value = ""; // tyhjennetään key:n kenttä
  }
}

function poTu() { // poistaa tiedot localStorage:sta
  let key = document.getElementById("poTie").value; // luetaan key
  let poTe = document.getElementById("haTu"); // muutuja tekstialueelle
  //window.confirm("Haluatko varmasti poistaa tietosi"); // varmistus tietojen poistosta
  localStorage.removeItem(key); // poisto localStorage:sta
  poTe.textContent = ""; // mikäli on näutöllä haettuna tietoja, ne poistetaan
  //document.getElementById("poTie").value = ""; // tyhjennetään key:n kenttä
  document.getElementById("tuSyAr").textContent = ""; // tyhjennetään laskettujen arvojen tekstialue
  //alert("Tietosi on poistettu!"); // ilmoitus, että tiedot on poistettu
}

function Pona() { // poistaa lasketut tiedot näytöltä
  document.getElementById("tuSyAr").textContent = "";
}

function tyhTu() {
  document.getElementById('haTu').textContent = '';
}
function validateForm() { // tarkastaa lomakkeen
  let mer = document.getElementById("merkki").value; // lukee merkki kentän
  let mal = document.getElementById("malli").value; // lukee malli kentän
  let tun = document.getElementById("tunnus").value; // lukee tunnus kentän
  let rpmC = document.getElementById("rpmC").value; // lukee kierrosten kasvuväli kentän
  let rpmS = document.getElementById("rpmS").value; // lukee kierrosten alku kentän
  let rpmE = document.getElementById("rpmE").value; // lukee kierrosten loppu kentän
  let ge = document.getElementById("gear").value; // lukee vaihde kentän
  let tDi = document.getElementById("tDia").value; // lukee renkaanhalkaisia kentän
  let ak1 = document.getElementById("aks1").value; // lukee 1. akselinhammasluku kentän
  let ak2 = document.getElementById("aks2").value; // lukee 2. akselinhammasluku kentän
  let pin = document.getElementById("pinion").value; // lukee pienenlautaspyöränhammasluku kentän
  let crW = document.getElementById("crownW").value; // lukee isonlautaspyöränhammasluku kentän
  const tark = (arv) => (arv.length == 4) ? true : false; // kierrosluvun pituuden tarkistus funktio
  if (mer.length > 20 || /\d/ig.test(mer) == true || mer.length == 0 || /\W/g.test(mer) == true ) { //merkki kentän tarkistus
    alert(`Syötä merkki!`); // viesti mitä pitää tehdä
    laskuri.merkki.focus(); // kohdistus kenttään
    return (false);
  } else if (mal.length > 20 || mal.length == 0) { // malli kentän tarkistus
    alert(`Syötä malli!`); // viesti mitä pitää tehdä
    laskuri.malli.focus(); // kohdistus kenttään
    return (false);
  } else if (tun.length > 15 || tun.length == 0) { // tunnus kentän tarkistus
    alert(`Syötä tunnus!`); // viesti mitä pitää tehdä
    laskuri.tunnus.focus(); // kohdistus kenttään
    return (false);
  } else if (rpmC <= 4 || /\D/ig.test(rpmC) == true) { // kierrosten kasvuväli kentän tarkistus
    alert(`Syötä kierrosluvun nousuväli!`); // viesti mitä pitää tehdä
    laskuri.rpmC.focus(); // kohdistus kenttään
    return (false);
  } else if (tark(rpmS) == false || /\D/ig.test(rpmS) == true) { // kierrosten alku kentän tarkistus
    alert(`Syötä aloitus kierrosluku!`); // viesti mitä pitää tehdä
    laskuri.rpmS.focus(); // kohdistus kenttään
    return (false);
  } else if (tark(rpmE) == false || /\D/ig.test(rpmE) == true) { // kierrosten loppu kentän tarkistus
    alert(`Syötä kierrosluvun päättymispiste!`); // viesti mitä pitää tehdä
    laskuri.rpmE.focus(); // kohdistus kenttään
    return (false);
  } else if (ge.length != 1 || isNaN(ge)) { // vaihde kentän tarkistus
    alert(`Syötä vaihde!`); // viesti mitä pitää tehdä
    laskuri.gear.focus(); // kohdistus kenttään
    return (false);
  } else if (tDi.length > 4 || tDi.length == 0 || /\D/ig.test(tDi) == true) { // renkaanhalkaisia kentän tarkistus
    alert(`Syötä renkaanhalkaisia!`); // viesti mitä pitää tehdä
    laskuri.tDia.focus(); // kohdistus kenttään
    return (false);
  } else if (ak1.length > 3 || ak1.length == 0 || /\D/ig.test(ak1) == true){ // 1. akselinhammasluku kentän tarkistus
    alert(`Syötä 1. akselinhammasluku!`); // viesti mitä pitää tehdä
    laskuri.aks1.focus(); // kohdistus kenttään
    return (false);
  } else if (ak2.length > 3 || ak2.length == 0 || /\D/ig.test(ak2) == true) { // 2. akselinhammasluku kentän tarkistus
    alert(`Syötä 2. akselinhammasluku!`); // viesti mitä pitää tehdä
    laskuri.aks2.focus(); // kohdistus kenttään
    return (false);
  } else if (pin.length > 2 || pin.length == 0 || /\D/ig.test(pin) == true) { // pienenlautaspyöränhammasluku kentän tarkistus
    alert(`Syötä pienenlautaspyöränhammasluku!`); // viesti mitä pitää tehdä
    laskuri.pinion.focus(); // kohdistus kenttään
    return (false);
  } else if (crW.length > 3 || crW.length == 0 || /\D/ig.test(crW) == true) { // isonlautaspyöränhammasluku kentän tarkistus
    alert(`Syötä isonlautaspyöränhammasluku!`); // viesti mitä pitää tehdä
    laskuri.crownW.focus(); // kohdistus kenttään
    return (false);
  }
}
