let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: false
  }
};

function countOnline(usersObj) {
  // Only change code below this line
  let lu = 0;
  let us1 =[];
  for(let us in usersObj) {
    us1.push(us);
  }
  for (let i = 0;i<us1.length;i++) {
    if (usersObj[us1[i]].online == true) {
    lu += 1;
    }
  }
  return lu;
  // Only change code above this line
}
console.log(countOnline(users));
