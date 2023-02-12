//Обчислити значення виразу 

let a = parseFloat(prompt('Введіть число а:', 0))
let b = parseFloat(prompt('Введіть число b:', 0))
let c = parseFloat(prompt('Введіть число c:', 0))

let s1 = a + 12 + b
let s2 = Math.sqrt((a + b) / (2 * a))
let s3 = Math.cbrt((a + b) * c)
let s4 = Math.sin(a / (-b))







document.write(`S&#8321;=${s1}`)
document.write(`<br>S&#8322;=${s2}`)
document.write(`<br>S&#8323;;=${s3}`)
document.write(`<br>S&#8324;;=${s4}`)