function testi() {
  let te = document.getElementById("lista");
  let value = te.value;
  console.log(value);
  let te2 = document.getElementById("lista")
  let teksti = te2.options[te2.selectedIndex].text;
  console.log(teksti);
  return document.getElementById("listat").innerHTML = teksti;
} /* Toimiva koodi pudotusvalikkoon DOM:ssa*/

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function testCheckbox(oCheckbox)
{
    var checkbox_val = oCheckbox.value;
    if (oCheckbox.checked == true)
    {
        alert("Checkbox with name = " + oCheckbox.name + " and value =" +
                checkbox_val + " is checked");
    }
    else
    {
        alert("Checkbox with name = " + oCheckbox.name + " and value =" +
              checkbox_val + " is not checked");
    }
}

oCheckBox1 = oForm.elements["email_alerts"];
oCheckBox2 = oForm.elements["recruiter_contact"];

testCheckbox(oCheckBox1);
testCheckbox(oCheckBox2);


const retailCompanies = companies.filter(company => category.category === "Retail");
