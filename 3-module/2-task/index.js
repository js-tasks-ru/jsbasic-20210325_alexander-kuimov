function filterRange(arr, a, b) {
  let res = [];

  for (let item of arr) {
   
    if (item >= a && item <= b) {
      res.push(item);
    }

  }

  return res;
}
