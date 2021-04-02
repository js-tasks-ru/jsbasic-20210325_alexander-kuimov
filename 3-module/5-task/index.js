function getMinMax(str) {
  let val = str.replace(/[\,%]/g, ' ');
  let arr = val.split(' ');

  arr = arr.map(Number);
  arr = arr.filter(item => typeof item === "number" && !isNaN(item));

  let res = {
    min: Math.min.apply(null, arr),
    max: Math.max.apply(null, arr),
  };

  return res;
}
