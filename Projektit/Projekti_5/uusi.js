function foMu() { // ohjaa footerin paikkaa
  let fo = document.getElementsByTagName("footer")[0];
  fo.style.position = "relative";
}

function nollaa() { // nollaa pelin
  let po = document.getElementById("peli");
  console.log(po);
  while (po.hasChildNodes()) {
    po.removeChild(po.firstChild);
  }
  document.getElementById("peO").hidden = false;
  let fo = document.getElementsByTagName("footer")[0];
  fo.style.position = "fixed";
  pi = 0;
  clearInterval(myInterval);
  return pi;
}

function piTe() { // poistaa tekstin joka lukee pelialuella, kun tulee sivulle
  document.getElementById("peO").hidden = true;
}

//Pelin kortit objektissa
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

let koVa = []; // Valitun kortin Array muuttuja
let koTu = []; // Valitun kortin tunnus Array muuttuja
let pi = 0; // Piste muuttuja
let tarPi = 0; // Tarkistus muuttuja, jolla ohjataan kellon pys??ytyst??

function luoPeli(pi,ai) { // luo pelialueen
  pi = 0;
  ai = 0;
  let po = document.getElementById("peli"); // Muuttuja pelialueen tyhjent??miseksi
  while (po.hasChildNodes()) { // Tyhjent???? pelialueen, jos siin?? on peli, muttei nollaa kelloa eik?? pisteit??. T??m??n voisi parantaa toimivaksi.
    po.removeChild(po.firstChild);
  }
  let pAl = document.getElementById('peli'); // Muuttuja pelialueelle
  let di1 = document.createElement("div"); // Muuttuja Div - elementille
  di1.setAttribute("class", "pohja"); // Div:lle class atribuutti
  let kayKo = kaKo(); // Muuttuja joka kutsuu funktiota joka hakee ja sekoittaa kortit ja paluttaa valmiin pakan
  kayKo.forEach((arr, ind) => { // Luo, lis???? taustan, yksil??i, nime????, lis???? eventlistenerin ja kiinnitt???? kuvat Div:n
    let kuv1 = document.createElement('img');
    kuv1.src = "tummakansi.png";
    kuv1.setAttribute("data-id", kayKo[ind].nimi);
    kuv1.setAttribute("name", kayKo[ind].img);
    kuv1.addEventListener("click", kaanna);
    // kuv1.addEventListener("click", kello);
    di1.appendChild(kuv1);
  });
  pAl.appendChild(di1); // Kiinnitt???? Div:n pelialueeseen
  let aiTu = document.createElement("aside"); // Luo alueen kellolle ja pisteille
  aiTu.setAttribute("class", "tualue"); // atribuutti tulosalueelle
  let aika = document.createElement("p"); // Elementti kellolle
  aika.setAttribute("id", "aik"); // Tunniste atribuutti kellolle
  let pisteet = document.createElement("p"); // Elementti pisteille
  pisteet.setAttribute("id", "pis"); // Tunniste atribuutti pisteille
  aiTu.appendChild(aika); // Kiinnitet????n aika alueeseensa
  aiTu.appendChild(pisteet); // Kiinnitet????n pisteet alueeseensa
  pAl.appendChild(aiTu); // Kello ja pisteet pelialueeseen kiinni
}

function kaKo() { // Tekee k??ytett??v??n pakan kortit objektista
  let ko = document.getElementById("pelivalikko"); // Muuttuja pelivalikolle
  let tau = Array.from(ko.options); // tekee Array:n pelivalikosta
  let rM;
  let cM;
  for (let i = 0;i<tau.length;i++) { // Lukee valitun pelialueen koon ja ottaa siit?? tarvittavien korttien m????r??n
    if(tau[i].selected == true) {
      rM = parseInt(tau[i].value), cM = parseInt(tau[i].value.slice(-1));
    }
  }
  let ma = rM * cM; // Laskee tarvittavien korttien m????r??n
  let kayKor = kortit.slice(0, ma); // Hakee kortit objektista
  sek(kayKor); // L??hett???? kortit sekoitus funktioon
  return kayKor; // Palauttaa sekoitetun pakan luoPeli funktioon
}

let ni = document.querySelector("img").name; // Luetaan klikatun kuvan kaikki mahdolliset tiedot

function kaanna(ni) { // K????nt???? kortin
  //console.log(ni);
  if (pi == 0) { // K??ynnist???? kellon
    kello();
  }
  let kokPi = document.getElementById("pis"); // Muuttuja pistealueelle
  //console.log(typeof ni);
  pi++;
  kokPi.textContent = `${pi} pistett?? ` // Pistealueen teksti
  //console.log(ni.target);
  let nim = ni.target; // Klikatun kuvan tietojen haku ja tyyppimuunnos
  let tokaKu; // ?
  //console.log(nim);
  let kuTi  = Array.from(nim.attributes); // Kuvan atribuutit Array muuttujaan
  //console.log(kuTi);
  let apu;
  let apu1;
  apu = kuTi.slice(2); // kuvan nimi talteen muuttujaan
  apu1 = kuTi.slice(1); // kuvan tunnus talteen muuttujaan
  let tie = apu[0]; // kuvan nimi pois Array:sta
  let tie1 = apu1[0]; // kuvan tunnus pois Array:sta
  //console.log(tie);
  //console.log(typeof tie);
  let kuNi = tie.nodeValue; // Kuvan nimi k??ytt??kelpoiseen tietomuotoon
  let kuTu = tie1.nodeValue; // Kuvan tunnus k??ytt??kelpoiseen tietomuotoon
  //console.log(kuNi);
  //console.log(kuTu);
  koVa.push(kuNi); // kuvan nimi Array muuttujaan
  koTu.push(kuTu); // kuvan tunnus Array muuttujaan
  nim.classList.add("flip"); // klikattuun kuvaan k????nt??ominaisuudenlis??ys
  //let koKu = kortit.filter(obj => obj.img == ni); // Ollut ilmeisesti jossain vaiheessa k??yt??ss??, mutta j????nyt tarpeettomaksi?
  this.setAttribute("src", kuNi); // Kuvan nimell?? kuva n??kyviin.
  if (koVa.length == 2) { // Katsotaan onko valittuna kaksi kuvaa
    setTimeout(function(){ // Pys??ytys 2 sek.
      tar(koVa,koTu,ni); // Tarkistus funktion kutsuminen
    }, 2000);
  } else { // toiminta parittomalla kuvam????r??ll??
    setTimeout(function() { // Pys??ytys 2 sek.
      tarEka(koVa,koTu,ni); // parittoman kuvan k????nt?? ja tarkistus
      /*nim = document.querySelector("img");
      nim.classList.add("flip2");
      nim.setAttribute("src", "tummakansi.png");*/
    }, 2000);
  }
  //console.log(koVa);
  //console.log(pi);
  return pi;
}

function tarEka() { //parittoman kuvan identifiointi ja k????nt??
  let kuv = document.querySelectorAll("img"); // Hakee kuvat pelialueelta
  //console.log(kuv);
  let kuTi = Array.from(kuv); // Tekee kuviata Array:n
  //console.log(kuTi);
  //console.log(kuv);
  //console.log(kuv[koVa[0]]);
  let ekaNa = kuTi.filter(obj => obj.name == koVa[0]); // Kuvan haku Objektista
  let ekaKu = ekaNa[0]; // Kuva pois Array:sta
  ekaKu.classList.add("flip2"); // Kuvaan K????nt??
  ekaKu.setAttribute("src", "tummakansi.png"); // Kuvaan selk??puoli takaisin
 //koVa[0].classList.add("flip2");
 //koVa[0].setAttribute("src", "tummakansi.png");
}

function tar(ni) { // parin tarkistus ja k????nt??
  //console.log(ni);
  let kuv = document.querySelectorAll("img"); // Kuvien haku pelialueelta
  //console.log(kuv);
  let kuTi = Array.from(kuv); // Array kuvista
  //console.log(kuTi);
  //console.log(kuv);
  //console.log(kuv[koVa[0]]);
  let ekaNa = kuTi.filter(obj => obj.name == koVa[0]); // 1. kuva tietoineen Array:ssa
  //console.log(ekaNa);
  let ekaKu = ekaNa[0]; // 1. kuva Array:sta muuttujaan
  //console.log(ekaKu);
  let tokaNa = kuTi.filter(obj => obj.name == koVa[1]); // 2. kuva tietoineen Array:ssa
  let tokaKu = tokaNa[0]; // 1. kuva Array:sta muuttujaan
  //console.log(tokaKu);
  let ekaTu = koTu[0]; // 1. kuvan tunniste Array:sta muuttujaan
  //console.log(ekaTu);
  let tokaTu = koTu[1]; // 2. kuvan tunniste Array:sta muuttujaan
  //console.log(tokaTu);
  if (ekaTu == tokaTu && ekaKu != tokaKu){ // Kuvatunnisteiden toteaminen samaksi ja nimien perusteella erottelu yksil??iksi.
    //console.log(ni[0]);
    //console.log(ni[1]);
    ekaKu.setAttribute("src", ni[0]); // 1.kuvan tietopuolen haku
    tarPi++; // Kellon ohjauspisteiden kasvatus
    koVa = []; // Valitun kortin tunnus Array muuttujan nollaus
    koTu = []; // Valitun kortin tunnus Array muuttujan nollaus

  } else { // Toiminta silloin, kun kuvat ovat eri paria
    tokaKu.classList.add("flip2"); // K????nt?? 2. kuvaan
    tokaKu.setAttribute("src", "tummakansi.png"); // 2. kuvalle selk??puoli
    koVa = []; // Valitun kortin Array muuttujan nollaus
    koTu = []; // Valitun kortin tunnus Array muuttujan nollaus
    //console.log(tokaKu);
  }
  //console.log(tarPi);
  return ni,koVa,koTu,tarPi; // Muuttujien palautus
}

function sek(kor) { // Sekoittaa k??ytett??v??n pakan
  kor.sort(() => 0.5 - Math.random());
}

function kello() { // Laskee kuluvan ajan
  var kokSek = 0;
  myInterval = setInterval(aiLa, 1000); // Muuttuja jotta voi pys??ytt???? ja nollata kellon
  function aiLa() { // Varsinainen kellon koodi
    let tu = document.getElementById("aik"); // Muuttuja kellon alueelle
    ++kokSek;
    let ko = document.getElementById("pelivalikko"); // Pys??ytykseen vaadittavien tietojen keruun alku
    let tau = Array.from(ko.options);
    let rM;
    let cM;
    for (let i = 0;i<tau.length;i++) {
      if(tau[i].selected == true) {
        rM = parseInt(tau[i].value), cM = parseInt(tau[i].value.slice(-1));
      }
    }
    let ma = rM * cM / 2; // Pys??ytys tietojen keruun loppu. Taidot eiv??t riit?? viel?? hy??dynt??m????n n??it?? suoraan aiemmasta kohteesta luoPeli()
    //console.log(ma);
    if (tarPi == ma) { // Pys??ytyksen ohjaus
      tu.textContent = `${pad(parseInt(kokSek/60))} min ${pad(kokSek % 60)} sek`; // N??ytt????n pys??htyv?? aika
      clearInterval(myInterval); // Kellon pys??ytys
    }

    return tu.textContent = `${pad(parseInt(kokSek/60))} min ${pad(kokSek % 60)} sek`; // N??yt??ss?? juokseva aika. Return turha?
  }

  function pad(val) { // Kellon toimintaan liittyv?? funktio
    let valString = val + "";
    if (valString.length < 2) {
    return "0" + valString;
    } else {
      return valString;
      }
    }
}

function respo() { // Ikkuna koon ilmoittaja, kun s????det????n sivuston responsiivisuuutta ei n??y loppuk??ytt??j??lle, mutta on olemassa kehityst?? varten
  let ti = window.innerWidth;
  let tu = document.getElementById("vika").hidden = true;
  tu.textContent = ti;
}
