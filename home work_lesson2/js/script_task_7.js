let min1 = 1
let max1 = 12

let min2 = 0
let max2 = 6

let random1 = min1 + Math.floor(Math.random() * (max1 - min1 + 1))
let random2 = min2 + Math.floor(Math.random() * (max2 - min2 + 1))

console.log(random1);
console.log(random2);

let sum = random1 + random2

document.write(`Сума ваших довільних чисел ${random1} та ${random2} становить: ${sum}`)