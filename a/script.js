function a() {
  console.log("a");
}

const a1 = {
  a: "a",
};

const a2 = a.bind(a1);

a2();
