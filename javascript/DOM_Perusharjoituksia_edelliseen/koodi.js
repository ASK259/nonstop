function t1() {
  let bo = document.getElementsByTagName("body")[0];
  let te = bo.getElementsByTagName("p");
  let tes = te[0];
  tes.style.fontFamily = "Arial";
  tes.style.fontSize = "2.5vw";
  tes.style.color = "yellow";
}

function tieto() {
  let ti = document.getElementById("lom1");
  let en = ti.elements["enimi"].value;
  let sn = ti.elements["snimi"].value;
  for (let i = 0; i < en.length; i++) {
      console.log(en[i]);
    }
    for (let j = 0; j < sn.length; j++) {
      console.log(sn[j]);
    }
}

function tVari() {
  let bo = document.getElementsByTagName("body") [0];
  let boEl = bo.getElementsByTagName("p");
  let ta1 = boEl[1];
  ta1.style.background = "blue";
  ta2 = boEl[2];
  ta2.style.background = "yellow";
}

function liRi() {
  let alk  = document.getElementById("sTa");
  let tbl = document.createElement("table");
  let tBo = document.createElement("tbody");
  for (let i = 0; i < 1; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      let cll = document.createElement("td");
      let clTe = document.createTextNode("row" + i +",cell"+ j);
      cll.appendChild(clTe);
      row.appendChild(cll);
    }
    alk.appendChild(row);
  }

}
function vSi() {
  let alk = document.getElementsByTagName("body")[0];
  let ta = alk.getElementsByTagName("table")[1];
  let tds = ta.getElementsByTagName("td");
  console.log(tds);
  for (let i = 0; i < tds.length; i++) {
    tds[i].textContent = "uusi teksti";
  }
}

function luoTAP() {
  let al = document.forms[2];
  let rM = al.elements["rows_q"].value;
  let cM = al.elements["cols_q"].value;
  let body = document.getElementsByTagName("body")[0];
  let boEl = body.getElementsByTagName("table")[2];
  let tbo = document.createElement("tbody");
  for (let i = 0; i < rM; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < cM; j++) {
      let cll = document.createElement("td");
      let clTe = document.createTextNode("row" + i +",cell"+ j);
      cll.appendChild(clTe);
      row.appendChild(cll);
    }
    tbo.appendChild(row);
  }
  boEl.appendChild(tbo);
  console.log(boEl);
}

function removeC() {
  let alk = document.getElementsByTagName("select")[0];
  let seu = alk.getElementsByTagName("option");
  let co = 1;
  for (let node of alk.childNodes) {
    console.log(co++, node.nodeValue);
  }
  console.log(alk.textContent);
  window.confirm(alk.textContent);
  for (let i = alk.length; i > 0; i--) {
    if (i%2 == 0) {
      console.log( alk[i-1].textContent, alk.length );
      alk[i-1].remove();
    } else {
      alk.remove();
    }
  }
}

function lNa() {
  let lo = document.getElementById("varivalikko2");
  let ma = lo.getElementsByTagName("option");
  let tu = ma.length;
  console.log(tu);
  window.confirm(lo.textContent + " " + tu);
}

function laskeV() {
  let al = document.getElementsByTagName("fieldset")[0];
  let ra = al.elements["radius"].value;
  console.log(ra);
  let su = 4 * 3.142 * Math.pow(ra, 3);
  let vo = (4/3) * 3.142 * Math.pow(su, 3);
  al.elements["volume"].value = vo;
  console.log(su);
  console.log(vo);
}

function korosta() {
  let bo = document.getElementsByTagName("body")[0];
  let al = bo.getElementsByTagName("strong");
  console.log(al);
  for (let i = 0; i < al.length; i++) {
  al[i].style.background = "yellow";
  }
}

function normaali() {
  let bo = document.getElementsByTagName("body")[0];
  let al = bo.getElementsByTagName("strong");
  console.log(al);
  for (let i = 0; i < al.length; i++) {
  al[i].style.background = "transparent";
  }
}

function respo() {

  let wi = VisualViewport.width;
  let he = VisualViewport.height;
  console.log(wi, he);
  VisualViewport.onresize = function() {
};
}
