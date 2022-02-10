function foMu() {
  let fo = document.getElementsByTagName("footer")[0];
  fo.style.position = "relative";
}

function nollaa() {
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

function piTe() {
  document.getElementById("peO").hidden = true;
}

/*function kello() {
 let i = 0;
 let timer = setInterval(function(){i++},1000);
 document.getElementById("aik").textContent = timer;
}*/

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

let koVa = [];
let koTu = [];
let pi = 0;
let tarPi = 0;

function luoPeli(pi,ai) {
  pi = 0;
  ai = 0;
  let po = document.getElementById("peli");
  while (po.hasChildNodes()) {
    po.removeChild(po.firstChild);
  }
  //clearInterval(myInterval);
  let pAl = document.getElementById('peli');
  let di1 = document.createElement("div");
  di1.setAttribute("class", "pohja");
  let kayKo = kaKo();
  kayKo.forEach((arr, ind) => {
    let kuv1 = document.createElement('img');
    kuv1.src = "tummakansi.png";
    kuv1.setAttribute("data-id", kayKo[ind].nimi);
    kuv1.setAttribute("name", kayKo[ind].img);
    kuv1.addEventListener("click", kaanna);
    //kuv1.addEventListener("click", kello);
    di1.appendChild(kuv1);
  });
  pAl.appendChild(di1);
  let aiTu = document.createElement("aside");
  aiTu.setAttribute("class", "tualue");
  /*let tuTe = document.createTextNode(`Aika: ${ai}
  Pisteet: ${pi}`);
  aiTu.appendChild(tuTe);*/
  let aika = document.createElement("p");
  aika.setAttribute("id", "aik");
  let pisteet = document.createElement("p");
  pisteet.setAttribute("id", "pis");
  aiTu.appendChild(aika);
  aiTu.appendChild(pisteet);
  pAl.appendChild(aiTu);
}

function kaKo() {
  let ko = document.getElementById("pelivalikko");
  let tau = Array.from(ko.options);
  let rM;
  let cM;
  for (let i = 0;i<tau.length;i++) {
    if(tau[i].selected == true) {
      rM = parseInt(tau[i].value), cM = parseInt(tau[i].value.slice(-1));
    }
  }
  let ma = rM * cM;
  let kayKor = kortit.slice(0, ma);
  sek(kayKor);
  return kayKor;
}

let ni = document.querySelector("img").name;
//let tu = document.querySelector("img").class;


function kaanna(ni) {
  if (pi == 0) {
    kello();
  }
  let kokPi = document.getElementById("pis");
  //console.log(typeof ni);
  pi++;
  kokPi.textContent = `${pi} pistettä `
  console.log(ni);
  let nim = ni.target;
  let tokaKu;
  console.log(nim);
  let kuTi  = Array.from(nim.attributes);
  //console.log(kuTi);
  let apu;
  let apu1;
  apu = kuTi.slice(2);
  apu1 = kuTi.slice(1);
  let tie = apu[0];
  let tie1 = apu1[0]
  //console.log(tie);
  //console.log(typeof tie);
  let kuNi = tie.nodeValue;
  let kuTu = tie1.nodeValue;
  //console.log(kuNi);
  //console.log(kuTu);
  koVa.push(kuNi);
  koTu.push(kuTu);
  nim.classList.add("flip");
  let koKu = kortit.filter(obj => obj.img == ni);
  this.setAttribute("src", kuNi);
  if (koVa.length == 2) {
    setTimeout(function(){
      tar(koVa,koTu,ni);
    }, 2000);
  } else {
    setTimeout(function() {
      tarEka(koVa,koTu,ni);
      /*nim = document.querySelector("img");
      nim.classList.add("flip2");
      nim.setAttribute("src", "tummakansi.png");*/
    }, 2000);
  }
  console.log(koVa);
  console.log(pi);
  return pi;
}

function tarEka() {
  let kuv = document.querySelectorAll("img");
  console.log(kuv);
  let kuTi = Array.from(kuv);
  console.log(kuTi);
  console.log(kuv);
  //console.log(kuv[koVa[0]]);
  let ekaNa = kuTi.filter(obj => obj.name == koVa[0]);
  let ekaKu = ekaNa[0];
  ekaKu.classList.add("flip2");
  ekaKu.setAttribute("src", "tummakansi.png");
 //koVa[0].classList.add("flip2");
 //koVa[0].setAttribute("src", "tummakansi.png");
}

function tar(ni) {
  console.log(ni);
  let kuv = document.querySelectorAll("img");
  console.log(kuv);
  let kuTi = Array.from(kuv);
  console.log(kuTi);
  console.log(kuv);
  //console.log(kuv[koVa[0]]);
  let ekaNa = kuTi.filter(obj => obj.name == koVa[0]);
  console.log(ekaNa);
  let ekaKu = ekaNa[0];
  let tokaNa = kuTi.filter(obj => obj.name == koVa[1]);
  let tokaKu = tokaNa[0];
  console.log(tokaKu);
  let ekaTu = koTu[0];
  console.log(ekaTu);
  let tokaTu = koTu[1];
  console.log(tokaTu);
  if (ekaTu == tokaTu && ekaKu != tokaKu){
    ekaKu.setAttribute("src", ni[0]);
    tarPi++;
    koVa = [];
    koTu = [];

  } else {
    tokaKu.classList.add("flip2");
    tokaKu.setAttribute("src", "tummakansi.png");
    koVa = [];
    koTu = [];
    console.log(tokaKu);
  }
  console.log(tarPi);
  return ni,koVa,koTu,tarPi;
}

function sek(kor) {
  kor.sort(() => 0.5 - Math.random());
}

function kello() {
  var kokSek = 0;
  myInterval = setInterval(aiLa, 1000);
  function aiLa() {
    let tu = document.getElementById("aik");
    ++kokSek;
    let ko = document.getElementById("pelivalikko");
    let tau = Array.from(ko.options);
    let rM;
    let cM;
    for (let i = 0;i<tau.length;i++) {
      if(tau[i].selected == true) {
        rM = parseInt(tau[i].value), cM = parseInt(tau[i].value.slice(-1));
      }
    }
    let ma = rM * cM / 2;
    console.log(ma);
    if (tarPi == ma) {
      tu.textContent = `${pad(parseInt(kokSek/60))} min ${pad(kokSek % 60)} sek`;
      clearInterval(myInterval);
    }

    return tu.textContent = `${pad(parseInt(kokSek/60))} min ${pad(kokSek % 60)} sek`;
  }

  function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
    return "0" + valString;
    } else {
      return valString;
      }
    }
}

function respo() {
  let ti = window.innerWidth;
  let tu = document.getElementById("vika");
  tu.textContent = ti;
}
