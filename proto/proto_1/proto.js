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

class LuoTieto1 { // constructor objektille
  constructor(mer,mal,tun,ge,nop,ak1,ak2,pin,crW,tDi) {
    this.merkki = mer;
    this.malli = mal;
    this.tunnus = tun;
    this.gear = [ge];
    this.nopeudet = nop;
    this.ak1 = ak1;
    this.ak2 = ak2;
    this.pinion = pin;
    this.crownW = crW;
    this.tDia = tDi;
    this.kirTie = `Merkki ${mer} Malli ${mal} Vaihde ${ge} Nopeudet kierrosluvuilla: ${nop} 1. Akselinhammasluku ${ak1}
      2. Akselinhammasluku ${ak2} pienenlautaspyöränhammasluku on ${pin} Isonlautaspyöränhammasluku on ${crW} renkaan halkaisia on ${tDi}mm`
      // yllä näytölle tulostuva teksti
  }
}

class LisaaVaihde {
  constructor(ge,nop,ak1,ak2,pin,crW,tDi) {
    this.gear = ge;
    this.nopeudet = nop;
    this.ak1 = ak1;
    this.ak2 = ak2;
    this.pinion = pin;
    this.crownW = crW;
    this.tDia = tDi;
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
  if (localStorage.getItem(key) === null) {
    let vaiSuhLu = aksSuhdLu(ak1,ak2); // lasketaan vaihteensuhdeluku
    let peraSuhLu = perSuhdLu(crW,pin); // lasketaan peränsuhdeluku
    let vaihKokval = vaihKok(vaiSuhLu,peraSuhLu); // lasketaan vaihteenkonaisluku
    let tire = renkMit(tDi).toFixed(3); // lasketaan renkaanympärysmitta
    let alkNop = maAlkpNop(tire,vaihKokval); // lasketaan alkunopeus
    let nop = noKiLu(alkNop,rpmC,rpmS,rpmE); // lasketaan nopeudet eri kierrosluvuilla
    const obj = new LuoTieto1(mer,mal,tun,ge,nop,ak1,ak2,pin,crW,tDi); // luodaan objekti constructorilla
    console.log(obj);
    document.getElementById("tuSyAr").textContent = obj.kirTie; // tulostetaan näytölle objektin tiedot
    window.localStorage.setItem(tun,JSON.stringify(obj)); // lähetetään objekti localStorage:n
  } else {
    let ha = window.localStorage.getItem(key); // haetaan objekti localStorage:sta
    let ti = JSON.parse(ha); // muutetaan JavaScript muotoon
    //let tarVaih = ti.gear.filter(obj => );
    console.log(ti.gear.includes(ge));
    if (ti.gear.includes(ge) == false) {
      let vaiSuhLu = aksSuhdLu(ak1,ak2); // lasketaan vaihteensuhdeluku
      let peraSuhLu = perSuhdLu(crW,pin); // lasketaan peränsuhdeluku
      let vaihKokval = vaihKok(vaiSuhLu,peraSuhLu); // lasketaan vaihteenkonaisluku
      let tire = renkMit(tDi).toFixed(3); // lasketaan renkaanympärysmitta
      let alkNop = maAlkpNop(tire,vaihKokval); // lasketaan alkunopeus
      let nop = noKiLu(alkNop,rpmC,rpmS,rpmE); // lasketaan nopeudet eri kierrosluvuilla
      ti.gear.push(ge);
      ti.gear[ge] = new LisaaVaihde(ge,nop,ak1,ak2,pin,crW,tDi);
      //window.localStorage.setItem(tun,JSON.stringify(ti));
    } else {
      window.confirm(`Vaihteelle ${ge} on jo olemassa tiedot! Haluatko ylikirjoittaa tiedot?`);
      let vaiSuhLu = aksSuhdLu(ak1,ak2); // lasketaan vaihteensuhdeluku
      let peraSuhLu = perSuhdLu(crW,pin); // lasketaan peränsuhdeluku
      let vaihKokval = vaihKok(vaiSuhLu,peraSuhLu); // lasketaan vaihteenkonaisluku
      let tire = renkMit(tDi).toFixed(3); // lasketaan renkaanympärysmitta
      let alkNop = maAlkpNop(tire,vaihKokval); // lasketaan alkunopeus
      let nop = noKiLu(alkNop,rpmC,rpmS,rpmE); // lasketaan nopeudet eri kierrosluvuilla
      ti.gear[ge] = new LisaaVaihde(ge,nop,ak1,ak2,pin,crW,tDi);
    }
  }
}
