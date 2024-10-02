"use strict"

// Зробити конвертер валют (курси валют – константи у скрипті)

const EURO_RATE = 45.73
const USD_RATE = 41.49
function convert() {
  const userGrn = parseFloat(document.getElementById('grn').value)
  const euro = userGrn / EURO_RATE
  document.getElementById('euro').value = euro.toFixed(0)
  const usd = userGrn / USD_RATE
  document.getElementById('usd').value = usd.toFixed(0)
}

window.onload = function () {
  document.getElementById('convert').onclick = convert
}
