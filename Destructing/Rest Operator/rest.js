const arr = [3,5,7,9,1,2,4,6]
let [a, , , ...rest] = arr;
console.log(a, rest)