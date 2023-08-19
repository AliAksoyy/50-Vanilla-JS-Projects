let arr = [1, 2, 3, 4];

Array.prototype.hesapla = function (cb) {
  let out = [];
  for (let i = 0; i < this.length; i++) {
    out.push(cb(this[i]));
  }
  return out;
};

console.log(arr.hesapla((list) => list * Math.PI));
