function lVastaukset() {
  var yh = 5;
  var pi = 0;
  var k1 = document.forms["kysymyslomake"]["ky1"].value;
  var k2 = document.forms["kysymyslomake"]["ky2"].value;
  var k3 = document.forms["kysymyslomake"]["ky3"].value;
  var k4 = document.forms["kysymyslomake"]["ky4"].value;
  var k5 = document.forms["kysymyslomake"]["ky5"].value;
  let hu;
  for (let i = 1; i <= yh; i++) {
    if (eval("k" + i) == null || eval("k" + i) == "") {
      alert("Et ole vastannut kysymykseen numero: " + i);
     hu = 1;
    } if (hu == 1) {
      return false;
    }
  }
  let va = ["a", "a", "b", "c", "c"];
  for (let j  = 1; j <= yh; j++) {
    if (eval("k" + j) == va [j-1]) {
      pi++;
    }
  }
  let tu = document.getElementById("tulokset");
  alert("Tuloksesi on " + pi + " pistettä, kun täysi pistemäärä oli " + yh);
  tulokset.innerHTML = "<h3>Sait <span>"+pi+"</span> pistettä, kun täysi pistemäärä oli </span>"+yh+"</span></h3>";
  return false;
}
