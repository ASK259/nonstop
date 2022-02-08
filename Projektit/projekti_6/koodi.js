window.onload = function() {
  document.getElementById("läh").onclick = tarkista;
  document.getElementById("henkilo_tiedot").onsubmit = tallenna;
  document.getElementById("poista").onclick = del;
  document.getElementById("hae").onclick = nouda;
}

function Luohenkilo(enim,snim,osi,posnu,pospa,puhe,sahpo) { // constructor jota käytetään henkilön luomiseen
  this.etunimi = enim;
  this.sukunimi = snim;
  this.lahiosoite = osi;
  this.postinumero = posnu;
  this.postitoimipaikka = pospa;
  this.puhelin_oma = puhe;
  this.sahkoposti_oma = sahpo;
}

function tallenna() { //Funktio jolla luetaan tiedot,kutsutaan constructor ja tallennetaan paikalliseen tiedostoon
  let eni = document.getElementById("etunimi").value; // luetaan etunimi
  let sni = document.getElementById("sukunimi").value; // luetaan sukunimi
  let os = document.getElementById("lahiosoite").value; // luetaan osoite
  let ponu = document.getElementById("postinumero").value; // luetaan postinumero
  let popa = document.getElementById("postitoimipaikka").value; // luetaan postitoimipaikka
  let puh = document.getElementById("puhelin_oma").value; // luetaan puhelin numero
  let sapo = document.getElementById("sahkoposti_oma").value; // luetaan sähköpostiosoite
  const person = new Luohenkilo(eni,sni,os,ponu,popa,puh,sapo); // luodaan objekti constructorilla
  console.log(person);
  window.localStorage.setItem(sapo,JSON.stringify(person)); // objekti JSON muotoon ja paikalliseen tiedostoon
}

function nouda() { // Hakeen tiedot paikallisesta tiedostosta ja tulostaa näytölle
  let teAl = document.getElementById("al2"); // muuttuja section-alueelle johon tulee henkilön tiedot
  let key = document.getElementById("naTie").value; // luetaan henkilön avain tietoihin
  if (localStorage.getItem(key) === null) { //
    alert("Et ole antanut tietojasi tai olet antanut väärän sähköpostiosoitteen!");
    document.getElementById("naTie").value = "";
  } else {
      let tie = window.localStorage.getItem(key); // hakee paikallisesta tiedostosta objektin muuttujaan
      const he = JSON.parse(tie); // muuttaa objektin JSON muodosta JavaScript muotoon
      const {etunimi, sukunimi, lahiosoite, postinumero, postitoimipaikka, puhelin_oma, sahkoposti_oma} = he; // ES6 tavalla tietoja objektista
      let tes = `Tietosi: ${etunimi} ${sukunimi} ${lahiosoite} ${postinumero} ${postitoimipaikka} ${puhelin_oma} ${sahkoposti_oma}.`;
      // Yllä muuttujaan Template Literals tyylillä näytölle tulostettavat tiedot
      let te = document.createElement("p"); // luodaan p-elementti
      te.setAttribute("id", "talTie"); // p-elementille id-atribuutti
      let ti = document.createTextNode(tes); // TextNode p-elementtiin
      te.appendChild(ti); // TextNode:n kiinnitys p-elementtiin
      teAl.appendChild(te); // p-elementin kiinnitys section-alueeseen
      document.getElementById("naTie").value = "";
      }
}

function del() { // poistaa tiedot paikallisesta tiedostosta
  let key = document.getElementById("poTie").value; // lukee käyttäjän avaimen
  let poTe = document.getElementById("talTie"); // muuttuja alueelle, jossa lukee näytöllä käyttäjän tiedot
  if (localStorage.getItem(key) === null) { // tarkistaa avaimen
    alert("Et ole antanut tietojasi tai olet antanut väärän sähköpostiosoitteen!")
    document.getElementById("poTie").value = "";
  } else {
      if (window.confirm("Haluatko varmasti poistaa tietosi")) {
      localStorage.removeItem(key); // poistaa tiedot paikallisesta tiedostosta
      alert("Tietosi on poistettu!"); // ilmoittaa, että tiedot on poistettu
      poTe.remove(); // poistaa näytöltä käyttäjän tiedot
      document.getElementById("poTie").value = "";
      }
    }
}

function tarkista() { // kenttien tarkistus
  let a = document.getElementById("etunimi").value;
  let b = document.getElementById("sukunimi").value;
  let c = document.getElementById("lahiosoite").value;
  let d = document.getElementById("postinumero").value;
  let e = document.getElementById("postitoimipaikka").value;
  let g = document.getElementById("sahkoposti_oma").value;
  const tark = (arv) => (arv.length == 5) ? true : false; // postinumeron pituuden tarkistus funktio
  if ( a == "" || eiNum(a) == true || keTe(a) == true) { //etunimen tarkistus
    alert("Syötä etunimesi!"); // viesti mitä pitää tehdä
    tieto_lomake.etunimi.focus(); // kohdistus kenttään
    return (false);
  } else if ( b == "" || eiNum(b) == true || keTe(a) == true) { //sukunimen tarkistus
      alert("Syötä sukunimesi!"); // viesti mitä pitää tehdä
      tieto_lomake.sukunimi.focus(); // kohdistus kenttään
      return (false);
  } else if (c == "" || c.test(/\W/ig) == true) { // osoitteen tarkistus
      alert(`Syötä osoitteesi`);  // viesti mitä pitää tehdä
      tieto_lomake.lahiosoite.focus(); // kohdistus kenttään
      return (false);
  } else if (isNaN(d) || tark(d) == false) { // postinumeron tarkistus
      alert("Syötä postinumerosi!"); // viesti mitä pitää tehdä
      tieto_lomake.postinumero.focus(); // kohdistus kenttään
      return (false);
  } else if (e == "" || eiNum(e) == true || e.length < 15 || keTe(a) == true) { // postitoimipaikan tarkistus
      alert(`Syötä postitoimipaikkasi!`); // viesti mitä pitää tehdä
      tieto_lomake.postitoimipaikka.focus(); // kohdistus kenttään
      return (false);
  } else if (g == "" || emailIsValid(g) == false) { // sähköpostiosoitteen tarkistus
       alert("Anna oikea sähköpostiosoitteesi!"); // viesti mitä pitää tehdä
       tieto_lomake.sahkoposti_oma.focus(); // kohdistus kenttään
       return (false);
  }
}

function keTe(te) {
  return /[^A-Za-z0-9_]/.test(te);
}

function emailIsValid (email) { // funktio sähköpostin tarkistukseen
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function eiNum(te) { // funktio tarkastamaan onko kentässä numeroita.
  return /\d/.test(te);
}
