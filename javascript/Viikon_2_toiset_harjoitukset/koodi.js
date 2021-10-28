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
    case '1':
      return document.getElementById('pä').innerHTML = 'Maanantai';
      break;
    case '2':
      return document.getElementById('pä').innerHTML = 'Tiistai';
      break;
    case '3':
      return document.getElementById('pä').innerHTML = 'Keskiviikko';
      break;
    case '4':
      return document.getElementById('pä').innerHTML = 'Torstai';
      break;
    case '5':
      return document.getElementById('pä').innerHTML = 'Perjantai';
      break;
    case '6':
      return document.getElementById('pä').innerHTML = 'Lauantai';
      break;
    default:
      return document.getElementById('pä').innerHTML = 'Sunnuntai';
      }
}

function vuosiluku() {
  var vuLuku = 0
  var vuLuku = document.getElementById('vuosi').value;
  //if (vulu / 4;
}

function operaatio() {
  var lu1 = document.getElementById('luku1').value;
  var lu2 = document.getElementById('luku2').value;
  var lu3 = document.getElementById('luku3').value;
  var lu4 = document.getElementById('luku4').value;
  var lu5 = document.getElementById('luku5').value;
  console.log(lu1,lu2,lu3,lu4,lu5);
  let keskiarvo;
  let summa;
  const integer = (nu1,nu2,nu3,nu4,nu5) => parse.Int(nu1,nu2,nu3,nu4,nu5);
  integer(lu1,lu2,lu3,lu4,lu5)
   summa = integer;
  console.log(summa);
}
