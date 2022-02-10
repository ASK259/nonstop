let lu = "";
var nu = "";

let lisaa = (lu) => {nu += lu; document.getElementById("tulos").innerText = nu;}

let laske = () => {
  if (nu.search("%") > 0) {
    lu2 = nu.split("%");
    nu = lu2[0]*lu2[1]/100;
    document.getElementById("tulos").innerText = nu;
  } else {
    nu = eval(nu);
    document.getElementById("tulos").innerText = eval(nu);
  }
}

let tyhjennys = () => {nu = ""; document.getElementById("tulos").innerText = nu;}

let kumitus = () => {nu = nu.substring(0, nu.length - 1);document.getElementById("tulos").innerText = nu;}
