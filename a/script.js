// function a(a) {
//   let b = a.split("");

//   let newArr = [];
//   for (let i = 0; i < b.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (b[i].includes(b[j])) {
//         newArr.push(b[i]);
//       }
//     }
//   }
//   console.log(newArr);
//   let g = new Set(newArr);
// }

// a("thequickbrownfoxjumpsoverthelazydog");

// console.log(
//   Array.from(new Set("thequickbrownfoxjumpsoverthelazydog".split(""))).join("")
// );

// 1 2 3
// 12 23
// 123

// const x = "abc";

// function substrings(str) {
//   const result = [];

//   function search_combination(start, curr) {
//     if (curr.length > 0) {
//       result.push(curr);
//     }
//     for (let i = start; i < str.length; i++) {
//       search_combination(i + 1, curr + str[i]);
//     }
//   }
//   search_combination(0, "");
//   return result;
// }


