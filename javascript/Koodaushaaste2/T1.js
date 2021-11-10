// Tehtävä 1
function laskeYhteen(lu1, lu2) {
  return console.log(lu1 + lu2);
}

laskeYhteen(2, 3);

// Tehtävä 2

const taulukko = [34,566,71,89];

function ekaMuuttuja(arr) {
  return console.log(arr[0]);
}
ekaMuuttuja(taulukko);

// Tehtävä 3

function summa(su1,su2) {
  var su3 = su1 + su2;
    if (su3 < 100) {
      return console.log('Lukujen summa on alle 100');
    } else {
      return console.log('Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!');
    }
}

summa(50,40);
summa(60,60);

// Tehtävä 4

function samat(sa1,sa2) {
  if (sa1 === sa2) {
    return console.log('Samat');
  } else {
    return console.log('Eri luvut');
  }

}
samat(2,3);
samat(2,2);

// Tehtävä 5

function sekunneiksi(se1,se2,se3) {
  se1 = se1 * 3600;
  se2 = se2 * 60;
  let se4 = se1 + se2 + se3;
  return console.log(se4);

}

sekunneiksi(10,10,10);
sekunneiksi(48,30,24);

// Tehtävä 6
function ikaPaivina(pp, kk, vu) {
  const d = new Date();
  let vuNyt = d.getFullYear();
  let kkNyt = d.getMonth() + 1;
  let ppNyt = d.getDate();
  let ika = vuNyt - vu - 1;
  let vup = ika * 365.25;
  let kkp = 0;
  switch (kk) {
    case 1:
      kkp = 31;
      break;
    case 2:
      kkp = 59;
      break;
    case 3:
      kkp = 90;
      break;
    case 4:
      kkp = 120;
      break;
    case 5:
      kkp = 151;
      break;
    case 6:
      kkp = 181;
      break;
    case 7:
      kkp = 212;
      break;
    case 8:
      kkp = 243;
      break;
    case 9:
      kkp = 273;
      break;
    case 10:
      kkp = 304;
      break;
    case 11:
      kkp = 334;
      break;
    case 12:
      kkp = 365;
      break;
  }
 let pvKk = 0;
 switch (kk) {
   case 6:
   case 9:
   case 11:
   case 4:
   pvKk = 30;
   break;
   case 1:
   case 3:
   case 5:
   case 7:
   case 8:
   case 10:
   case 12:
   pvKk = 31;
   break;
   default:
   pvKk = 28;
 }
 let iNP = pvKk - pp;
 let iKP = vup + kkp + iNP;
 return console.log(iKP);
}
// syötä muodossa: päivät, kuukaudet, vuodet
ikaPaivina(20, 11, 1995);
