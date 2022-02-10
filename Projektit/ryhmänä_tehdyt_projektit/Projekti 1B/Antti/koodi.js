function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function tIka() {
  let lo = document.forms["kyselylomake"]["ikasyotto"].value;
  var ika = parseInt(lo);
  console.log(ika);
}

var pakettiHinnat = new Array();
pakettiHinnat[79] = 79;
pakettiHinnat[150] = 150;
pakettiHinnat[200] = 200;

var rValio = new Array();
rValio["normaali"] = "normaali";
rValio["laktoositon"] = "laktoositon";
rValio["gluteeniton"] = "gluteeniton";
rValio["pesco_lakto_ovo_vegetaristi"] = "pesco_lakto_ovo_vegetaristi";
rValio["lakto_ovo_vegetaristi"] =  "lakto_ovo_vegetaristi";
rValio["vegaani"] =  "vegaani";
rValio["allergia"] = "allergia";
rValio["muu"] = "muu";

var aNi = new Array();
aNi[""] = "Valikaa yksi";
aNi["tyossa"] = "Työssä";
aNi["tyoton"] = "Työtön";
aNi["opiskelija"] = "Opiskelija";
aNi["yrittaja"] = "Yrittäjä";

function pvalikko() {
  let lo = document.forms["kyselylomake"];
  let mu = lo.elements["ammattinimike"];
  console.log(mu);
  var ammattinimike = aNi[mu.value];
  return ammattinimike;
}

function pakettiHinta(){
  var hinta = 0;
  let lomake = document.forms["kyselylomake"];
  console.log(lomake);
  var pa = lomake.elements["paketti"];
  console.log(pa);
  for (let i = 0; i < pa.length; i++) {
    if (pa[i].checked) {
      hinta = pakettiHinnat[pa[i].value];
      break;
    }
  }
  console.log(hinta);
  return hinta;
}

function myF() {
  let lomake = document.forms["kyselylomake"];
  console.log(lomake);
  let mu = lomake.elements["ruokavalio"];
  console.log(mu);
  for (let i = 0; i < mu.length; i++) {
    if (mu[i].checked == true){
      var valio = rValio[mu[i].value];
      console.log(valio);
    } else {
        ;
      }
    }
    return valio;
}

function textA() {
    let lo = document.forms["kyselylomake"];
    let te = lo.elements["lisatiedot"];
    var tes = 0;
    if (te.value == ""){
       tes = 1;
    } else {
      tes;
    }
    console.log(tes, typeof tes);
    return tes;
}

function tiedot() {
  let a = document.forms["kyselylomake"]["nimisyotto"].value;
  let b = document.forms["kyselylomake"]["ikasyotto"].value;
  let c = document.forms["kyselylomake"]["emailsyotto"].value;
  let tiedot = "Olet täyttänyt lomakkeeseen seuraavat tiedot: "+a+" "+b+" "+c+" "+ pvalikko()+ " " + pakettiHinta() + " " + myF();
  alert(tiedot);
}
function ikaEiNum(ikasyotto) {
  return /\d/.test(ikasyotto);
}

function validateForm() {
  let a = document.forms["kyselylomake"]["nimisyotto"].value;
  console.log(a);
  let b = document.forms["kyselylomake"]["ikasyotto"].value;
  let b2 = tIka();
  let c = document.forms["kyselylomake"]["emailsyotto"].value;
  let d = document.forms["kyselylomake"]["ammattinimike"].value;
  let e = pakettiHinta();
  let f = myF();
  let g = textA();
  console.log(f, g);
  console.log(typeof g);
  if ( a == "" || ikaEiNum(a) == true) {
    alert("Syötä nimesi!");
    lo.nimisyotto.focus();
    return (false);
  } else if (isNaN(b) || b < 1 || b > 100) {
      alert("syötä ikäsi");
      lo.ikasyotto.focus();
      return (false);
  } else if (c == "" || emailIsValid(c) == false) {
       alert("Anna oikea sähköpostiosoitteesi!");
       kyselylomake.emailsyotto.focus();
       return (false);
  } else if (d == "") {
    alert("Valitse ammattinimike!");
    lo.ammattinimike.focus();
    return (false);
  } else if (e == 0) {
    alert("Valitse pakettinne!");
    document.getElementById("pak").focus();
    return (false);
  } else if (f == undefined) {
    alert("Valitse ruokavalio!");
    document.getElementById("val").focus()
    return (false);
  } else if (f == "allergia" && g == 1) {
      alert("Lisää tekstikenttään kuvaus!");
      lo.lisatiedot.focus();
      return (false);
  } else if (f == "muu" && g == 1) {
      alert("Lisää tekstikenttään kuvaus!");
      lo.lisatiedot.focus();
      return (false);
  }
}
