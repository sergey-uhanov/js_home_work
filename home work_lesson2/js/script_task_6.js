let productQuantity1 = parseInt(prompt('Введіть кількість товару №1', 0))
let productPrice1 = parseInt(prompt('Введіть ціну товару №1', 0))

let productQuantity2 = parseInt(prompt('Введіть кількість товару №2', 0))
let productPrice2 = parseInt(prompt('Введіть ціну товару №2', 0))

let productQuantity3 = parseInt(prompt('Введіть кількість товару №3', 0))
let productPrice3 = parseInt(prompt('Введіть ціну товару №3', 0))
document.getElementById("productQuantity1").innerHTML = productQuantity1
document.getElementById("productQuantity2").innerHTML = productQuantity2
document.getElementById("productQuantity3").innerHTML = productQuantity3

document.getElementById("productPrice1").innerHTML = productPrice1
document.getElementById("productPrice2").innerHTML = productPrice2
document.getElementById("productPrice3").innerHTML = productPrice3

let sumProduct1 = productQuantity1 * productPrice1
let sumProduct2 = productQuantity2 * productPrice2
let sumProduct3 = productQuantity3 * productPrice3

document.getElementById("sumProduct1").innerHTML = sumProduct1
document.getElementById("sumProduct2").innerHTML = sumProduct2
document.getElementById("sumProduct3").innerHTML = sumProduct3

let allPrice = sumProduct1 + sumProduct2 + sumProduct3

document.getElementById("allPrice").innerHTML = allPrice

