let userSeconds = parseInt(prompt('Введіть кількість секунд', 0))

let minuts = Math.round(userSeconds / 60)

let hours = Math.round(minuts / 60)

let residue = minuts - (hours * 60)

document.write(`<h3>Вийшло ${hours}годин ${residue} хвилин</h3>`)

