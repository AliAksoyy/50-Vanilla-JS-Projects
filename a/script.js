const list = [3, 4, 5];

const area = (a) => {
  return Math.trunc(Math.PI * a * a);
};

const c = (a) => {
  return 2 * Math.PI * a;
};

const hesapla = (list, arrange) => {
  let output = [];
  for (let a of list) {
    output.push(arrange(a));
  }
  return output;
};

console.log(hesapla(list, area));
console.log(hesapla(list, c));
