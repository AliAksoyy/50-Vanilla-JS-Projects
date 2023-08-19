const users = [
  { firstName: "Ali", lastName: "Aksoy", age: 33 },
  { firstName: "Beyda", lastName: "Aksoy", age: 4 },
  { firstName: "Feyza", lastName: "Aksoy", age: 30 },
  { firstName: "Mustafa", lastName: "Aksoy", age: 30 },
  { firstName: "AhmetIsa", lastName: "Aksoy", age: 33 },
];

const se = users.reduce((acc, cur) => {
  console.log("acc", acc);
  console.log("cur", cur);
  const newAcc = acc;
  const { age } = cur;
  console.log(age);
  if (!acc[age]) {
    console.log(acc[age]);
    return { ...newAcc, [age]: 1 };
  } else {
    console.log("object");

    return { ...newAcc, [age]: ++newAcc[age] };
  }
}, {});

console.log("se", se);
