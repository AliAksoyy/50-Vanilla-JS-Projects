const a = [
  { name: "beyda", brand: "b" },
  { name: "ali", brand: "b1" },
  { name: "feyza", brand: "b" },
];

let group = "brand";

let g = a.reduce((acc, cur) => {
  let key = cur[group];
  console.log(key);
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(cur);
  return acc
}, {});
console.log(g)
