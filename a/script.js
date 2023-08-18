function outer() {
  let username = "ss";
  let a = {
    a: 2,
    c: function () {
      console.log("cddfsdfsd");
    },
  };

  function inner() {
    let secret = "sdff";
    console.log(username);

    function inner2() {
      a.c();
      console.log(secret);
    }

    inner2();
  }
  inner();
}

outer();
// console.log("object", username);
