let pricePerPiece = parseFloat(prompt('Введіть ціну за одиницю товару:', 0))
let numberOfPieces = parseInt(prompt('Введіть кількість штук', 0))



let allPrice = pricePerPiece * numberOfPieces
let pdv = (allPrice / 100) * 5


document.write(`<h3>Загальна вартість становить ${allPrice} гривень</h3>`)
document.write(`<h3> ПДВ від загальної становить ${pdv} гривень </h3>`)