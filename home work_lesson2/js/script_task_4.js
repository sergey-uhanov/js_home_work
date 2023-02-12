let userLength = parseFloat(prompt('Ведіть довшину у сантиметрах', 0))

let userLengthMeter = userLength / 100
let userLengthKilometer = userLength / 1000




document.write(`<h3>Ваша довжина у метрах становить ${userLengthMeter} метрів</h3>`)
document.write(`<h3>Ваша довжина у кілометрах становить ${userLengthKilometer} кілометрів</h3>`)