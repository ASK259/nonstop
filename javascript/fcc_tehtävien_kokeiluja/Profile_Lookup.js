const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let pr;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name == true && contacts[i].hasOwnProperty(prop) == true) {
      pr = contacts[i][prop];
      break;
    } else if (contacts[i].firstName == name == true && contacts[i].hasOwnProperty(prop) == false) {
      pr = "No such property";
      break;
  } else if (contacts[i].firstName == name == false) {
    pr = "No such contact";
  }
}
  return pr;
}
console.log(contacts.length);
console.log(lookUpProfile("Sherlock", "likes"));
/*if (contacts[i].firstName == name) {
  if (contacts[i].hasOwnProperty(prop) == true) {*/
