// Tehtävä 1
var taulukko = [8,5,2,6,9,4]

function pieninSuurin (ko) {
  let tu = [];
  ko.sort();
  var eka = ko[0];
  var vika = ko[ko.length - 1];
  tu.push(eka,vika);
  return tu.toString().replace(","," ");
}
console.log(pieninSuurin(taulukko));

// Tehtävä 2

function paTon(lu) {
  let tu;
  if (Number.isSafeInteger(lu/2) == true ) {
    tu = "parillinen";
  } else {
    tu = "pariton";
  }
  return tu;
}
console.log(paTon(146));

// Tehtävä 3

function kkNu(nu) {
  switch (nu) {
    case 1:
     nu ='tammikuu';
      break;
    case 2:
      nu = 'helmikuu';
      break;
    case 3:
      nu = 'maaliskuu';
      break;
    case 4:
      nu = 'huhtikuu';
      break;
    case 5:
      nu = 'toukokuu';
      break;
    case 6:
      nu = 'kesäkuu';
      break;
    case 7:
      nu = 'heinäkuu';
      break;
    case 8:
      nu = 'elokuu';
      break;
    case 9:
      nu = 'syyskuu';
      break;
    case 10:
      nu = 'lokakuu';
      break;
    case 11:
      nu = 'marraskuu';
      break;
    case 12:
      nu = 'joulukuu';
      break;
  }
  return nu;

}
kkNu(11);
console.log(kkNu(11));


// Tehtävä 4
function Henkilo(etunimi, sukunimi, osoite, postinumero, postitoimipaikka, puhelin, sähköposti) {
  this.etuNimi = etunimi;
  this.sukuNimi = sukunimi;
  this.osoite = osoite;
  this.postinumero = postinumero;
  this.postitoimipaikka = postitoimipaikka;
  this.puhelin = puhelin;
  this.sähköposti = sähköposti;
  }

  const henkilo = new Henkilo("Eka", "Snim", "Katu 7", "04533", "Jokin", "0344024901", "eww@ji.csc");
  const toinenHenkilo = new Henkilo("Toka", "Sni", "Kuja 10", "34932", "Jossain", "4955306420", "erf@erb.fi");
  const kolmasHenkilo = new Henkilo("Kolmas", "Snimi", "Tie 564", "85203", "Tuolla", "4934603475", "rsg@eb.net");

  console.log(henkilo);
// Tehtävä 5

function käänAak(aak) {
  let aak2 = Array.from(aak);
  aak2.sort();
  let aak3 = aak2.join('');
  return aak3;
}

käänAak('codeking');
console.log(käänAak('codeking'));

// Tehtävä 6

function arvosana(he, pi) {
  if (pi < 50) {
    return he + ' Hylätty';
  } else if (pi < 60) {
    return he + ' T1';
  } else if (pi < 70) {
    return he + ' T2';
  } else if (pi < 80) {
    return he + ' H3';
  } else if (pi < 90) {
    return he + ' H4';
  } else if (pi < 100) {
    return he + ' K5';
  }
}

console.log(arvosana('Daniel',80));
console.log(arvosana('Viivi',77));
console.log(arvosana('Tiina',88));
console.log(arvosana('Ismael',95));
console.log(arvosana('Tuomas',68));
