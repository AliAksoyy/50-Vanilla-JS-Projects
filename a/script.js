const arr = [1, 2, 3, 4, 5];

const area = (list) => {
  return list * Math.PI;
};

Array.prototype.hesapla = function (area) {
  const out = [];
  for (let i = 0; i < this.length; i++) {
    out.push(area(this[i]));
  }
  return out;
};

// console.log(Array.prototype.hesapla(arr, area));
console.log(
  arr.hesapla((list) => {
    return list * Math.PI;
  })
);
