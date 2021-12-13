function filteredArray(arr, elem) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != elem) {
      arr2.push(arr[i]);
    }
  }
  console.log(let a = arr2.indexOf(elem));
  let newArr = delete a

  return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
