function te1() {
    let sa = document.getElementsByTagName("input")[0].value;
    let pi = 0;
    let ar = document.getElementsByTagName("article")[0];
    let li = ar.getElementsByTagName("li");
    let tau = Array.from(li);
    let te = [];
    for (let i = 0; i < tau.length; i++) {
      te.push(tau[i].innerText);
    }
    let eht1 = /A, E, I, N, S, T/ig;
    console.log(te);
    let sa2 = Array.from(sa);
    for (let i = 0; i < sa2.length; i++) {
      switch (sa2[i]) {
        case "a":
        case "e":
        case "i":
        case "n":
        case "s":
        case "t":
          pi += 1;
          break;
        case "o":
        case "ä":
        case "k":
        case "l":
          pi += 2;
          break;
        case "u":
        case "m":
          pi += 3;
          break;
        case "y":
        case "h":
        case "j":
        case "p":
        case "r":
        case "v":
          pi += 4;
          break;
        case "ö":
        case "d":
          pi += 7;
          break;
        case "b":
        case "f":
        case "g":
          pi += 8;
          break;
        case "c":
          pi += 10;
          break;
        default:
          pi += 12;
          break;
      }
    }
    console.log(pi);
    let tu =  document.createTextNode("Sanan " + sa + " pisteet ovat: " + pi);
    let tek = document.createElement("p");
    tek.appendChild(tu);
    ar.appendChild(tek);
}


function te2() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let tau = [];
  for (let i = 0; i < 7; i++) {
    tau.push(getRandomIntInclusive(1, 40));
  }

  console.log(tau.toString());
  tu = document.getElementsByTagName("p")[3];
  tu.textContent = tau;
}

function te3() {
  const arr =  [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
  let boEl = document.getElementsByTagName("article")[2];
  let tbl = document.createElement("table");
  let tBo = document.createElement("tbody");
  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < arr[i].length; j++) {
      let cll = document.createElement("td");
      let clTe = document.createTextNode(arr[i]);
      cll.appendChild(clTe);
      row.appendChild(cll);
    }
    tBo.appendChild(row);
  }
  tbl.appendChild(tBo);
  boEl.appendChild(tbl);
  tbl.setAttribute("border", "1");
}

function te4() {
  function sat(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let maat =  ["♥", "♦", "♣", "♠"];
  console.log(maat);
  let bo = document.getElementsByTagName("article"[3]);
  let numerot = [];
  function luvut(alk, lop) {
    return Array(lop - alk + 1).fill().map((_, idx) => alk + idx);
  }
  numerot = luvut(1, 14);
  /*const vaih = lu => (lu == 11 || lu == 12 || lu == 13 || lu == 14) => lu = "J" : lu = "Q" : 13 = "K" : 14 = "A";*/
  console.log(numerot);
  let ko = [];
  for (let i = 1; i < numerot.length; i++) {
    for (let j = 0; j < 4; j++) {
      ko.push(numerot[i] + maat[j]);
    }
  }
  console.log(ko);
  let tau = [];
  let tu = []
  for (let i = 0; i < 5; i++) {
    tau.push(ko[sat(0, 51)]);
  }

  console.log(tau);
  document.getElementById("t4T").innerText = tau;
}
