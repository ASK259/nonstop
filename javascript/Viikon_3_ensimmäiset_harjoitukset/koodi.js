function parilliset() {
  let lu1 = document.getElementById("te1").value;
  let tau1 = [];
  for (let i = 2; i <= lu1; i += 2) {
    tau1.push(i);
  }
  let tu = tau1.toString().replaceAll(",", " ");
  return document.getElementById("te1T").innerHTML = tu;
}

function salasana() {
  let sana = document.getElementById("te2").value;
  let tau = Array.from(sana);
  tau = tau.map(function(i) {return i + "Ö"});
  return document.getElementById("te2T").innerText = tau.toString().replaceAll(",", "");
}

function onko() {
  let sana = document.getElementById("te3").value;
  let tau3 = Array.from(sana);
  let onk = tau3.some(mFu2);
  function mFu2(value, index, array) {
    return value == "ö" || value == "Ö";
  }
  console.log(onk);
  if (onk == true) {
    return document.getElementById("te3T").innerHTML = "on";
  } else {
    return document.getElementById("te3T").innerHTML = "ei";
  }

}

function kertoma() {
  let lu2 = document.getElementById("te4").value;
  let tau4 = [];
  let va = lu2;
  console.log(va);
  for (let i = va; i > 0; --i) {
    tau4.push(i);
  }
  tau4.shift();
  let ker = tau4.reduce(mFu, lu2);
  function mFu(total, value) {
    return total * value;
  }

  return document.getElementById("te4T").innerHTML = "Luvun " + lu2 + " kertoma on " + ker;
}

function koodi() {
  let alku = 1;
  let loppu = 100;
  let tulos = [];
  for (let y = alku;y<loppu;y++) {
    if (Number.isSafeInteger(y/3) == true & Number.isSafeInteger(y/5) == true) {
      tulos.push("hipheijaa");
    } else if  (Number.isSafeInteger(y/3) == true ) {
        tulos.push("hip");
    } else if (Number.isSafeInteger(y/5) == true) {
        tulos.push("heijaa");
      } else {
        tulos.push(y);
      }
    }
    return document.getElementById("t5T").innerHTML = tulos;
}

function kymE() {
  let lu =[];
  for (let i = 0; i <= 10; i++) {
    lu.push(i);
  }
  let tu = lu.toString().replaceAll(",", " ");
  return document.getElementById("t6T").innerHTML = tu;
}

function kymY() {
  let lu = 0;
  for (let i = 0; i <=10; i++) {
    lu += i;
  }
  return document.getElementById("t7T").innerHTML = lu;
}

function pot() {
  let koLu = document.getElementById("t8E").value;
  let potsi = document.getElementById("t8To").value;
  return document.getElementById('t8T').innerHTML = Math.pow(koLu, potsi);
}

function suPi() {
  let lu1 = document.getElementById("t9E").value;
  let lu2 = document.getElementById("t9To").value;
  let lu3 = document.getElementById("t9K").value;
  let lu4 = document.getElementById("t9N").value;
  let lu5 = document.getElementById("t9V").value;
  let tau = [lu1, lu2, lu3, lu4, lu5];
  tau.sort((a, b) => a - b);
  let pi = tau[0];
  let sur = tau[tau.length -1];
  return document.getElementById("t9T").innerHTML = "Pienin luku: " + pi + " ja suurin luku: " + sur;
}

function aakTauEN(kirA, kirZ) {
  let a = [];
  let i = kirA.charCodeAt(0);
  let j = kirZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}

function salasanaToka() {
  let sana = document.getElementById("t10").value;
  let tau = Array.from(sana);
  let kirTau = Array.from(aakTauEN("a", "z"));
  console.log(kirTau);
  tau = tau.map(function(i) {return i + kirTau[Math.floor(Math.random() * 25)]});
  console.log(tau);
  return document.getElementById("t10T").innerText = tau.toString().replaceAll(",", "");
}

function paPaEr() {
  let pi = document.getElementById("t11E").value;
  let su = document.getElementById("t11To").value;
  let tau = [];
  let i = parseInt(pi);
  for (; i <= su ; i++) {
    tau.push(i);
  }
  let tau2 = [];
  let tau3 = [];
  for (let j = 0; j < tau.length; j++) {
    if (Number.isSafeInteger(tau[j]/2) == true) {
        tau2.push(tau[j]);
      } else {
        tau3.push(tau[j]);
      }
  }
  console.log(tau2, tau3);
  const summa = (lu, ko) => ko += lu;
  let pasu = tau2.reduce(summa);
  let parsu = tau3.reduce(summa);
  console.log(pasu);
  document.getElementById("t11T").innerText = "Parilliset " + tau2.toString().replaceAll(",", " ") + " ja niiden summa " + pasu;
  document.getElementById("t11T2").innerText = "Parittomat " + tau3.toString().replaceAll(",", " ") + " ja niiden summa " + parsu;
  /*let arr = [];
  let arr2 = [];
  let arr3 = [];
  let paSu;
  let parSu;
  console.log(pi, su);
  let i = pi;
  for (; i <= su ; i++) {
    arr.push(i);
  }
  console.log(arr);
  console.log(typeof arr[0], typeof arr[1], typeof arr[2]);
  let kor = arr.shift();
  console.log(arr);
  for (let j = 0; j <= arr.length; j++) {
    if (Number.isSafeInteger(arr[j]/2) == true ) {
        arr2.push(arr[j]);
        console.log(arr2);
    } else {
      arr3.push(arr[j])
      console.log(typeof arr3[0]);
    }
  }
  arr3.pop();
  console.log(arr2);
  console.log(arr3);
  for (let k = 0; k < arr2.length; k++) {
    paSu + k;
    console.log(paSu);
  }
  for (let l = 0; l < arr3.length; l++) {
    parSu + l;
    console.log(parSu);
  }
  console.log(paSu, typeof parSu);
  document.getElementById("t11T").innerHTML = "Parilliset " + arr2.toString().replaceAll(",", " ") + " ja niiden summa " + paSu.toString();
  document.getElementById("t11T2").innerHTML = "Parittomat " + arr3.toString().replaceAll(",", " ") + " ja niiden summa " + parSu.toString();*/
}
