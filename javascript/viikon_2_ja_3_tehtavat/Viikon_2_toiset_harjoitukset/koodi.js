function tarkasta() {
  let lu = document.getElementById('luku').value;
  if (lu >= 0) {
    return document.getElementById('tu').innerHTML = 'Luku on positiivinen';
  }
  else {
    return document.getElementById('tu').innerHTML = 'Luku on negatiivinen';
    }
}

function viikonpäivä() {
  let lu = document.getElementById('numero').value;
  console.log(lu);
  switch (lu) {
    case "1":
      return document.getElementById('pä').innerHTML = 'Maanantai';
      break;
    case "2":
      return document.getElementById('pä').innerHTML = 'Tiistai';
      break;
    case "3":
      return document.getElementById('pä').innerHTML = 'Keskiviikko';
      break;
    case "4":
      return document.getElementById('pä').innerHTML = 'Torstai';
      break;
    case "5":
      return document.getElementById('pä').innerHTML = 'Perjantai';
      break;
    case "6":
      return document.getElementById('pä').innerHTML = 'Lauantai';
      break;
    case "7":
      return document.getElementById('pä').innerHTML = 'Sunnuntai';
      break;
    default:
      return document.getElementById('pä').innerHTML = "Ei ole viikonpäivän luku";
      break;
      }
}

function vuosiluku() {
  let vuLuku = document.getElementById('vuosi').value;
  if (Number.isSafeInteger(vuLuku / 4) == true & Number.isSafeInteger(vuLuku / 100) == false) {
    if (true) {
      return document.getElementById("vulu").innerHTML = "Vuosi on karkausvuosi";
    }
  } else if (Number.isSafeInteger(vuLuku / 400) == true) {
    return document.getElementById("vulu").innerHTML = "Vuosi on karkausvuosi";
  } else {
    return document.getElementById("vulu").innerHTML = "Vuosi ei ole karkausvuosi";
  }
}

function operaatio() {
  let lu1 = document.getElementById('luku1').value;
  let lu2 = document.getElementById('luku2').value;
  let lu3 = document.getElementById('luku3').value;
  let lu4 = document.getElementById('luku4').value;
  let lu5 = document.getElementById('luku5').value;
  let lu1b = parseInt(lu1);
  let lu2b = parseInt(lu2);
  let lu3b = parseInt(lu3);
  let lu4b = parseInt(lu4);
  let lu5b = parseInt(lu5);
  let summa = lu1b + lu2b + lu3b + lu4b + lu5b;
  let keskiarvo = summa / 5;
  return document.getElementById("luSu").innerHTML = "Lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;
}

function lause() {
  let luku = document.getElementById("luk").value;
  let lause = luku;
  lause += luku + "x 1 = " + luku * 1;
  console.log(lause);
  lause += luku + "x 2 = " + luku * 2;
  console.log(lause);
  lause += luku + "x 3 = " + luku * 3;
  console.log(lause);
  lause += luku + "x 4 = " + luku * 4;
  console.log(lause);
  lause += luku + "x 5 = " + luku * 5;
  console.log(lause);
  lause += luku + "x 6 = " + luku * 6;
  console.log(lause);
  lause += luku + "x 7 = " + luku * 7;
  console.log(lause);
  lause += luku + "x 8 = " + luku * 8;
  console.log(lause);
  lause += luku + "x 9 = " + luku * 9;
  console.log(lause);
  lause += luku + "x 10 = " + luku * 10;
  return document.getElementById("t5Lause").innerHTML = lause;
}
