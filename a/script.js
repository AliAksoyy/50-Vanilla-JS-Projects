let a = () => {
  const b = {
    firstName: "d",
    lastName: "e",
  };
  return b;
};

const g = (requestData) => {
  return `https://${requestData.firstName}${requestData.lastName}`;
};

const f = async (url) => {
  const res = await fetch(url);
  const g = await res.json();
  const joke = g.value;
  thi(joke);
};
const thi = (a) => {
  console.log(a);
};

const fs = async () => {
  const reda = a();
  const f = g(reda);
  await f
};
