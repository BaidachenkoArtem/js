"use strict"

// Морський бій.
// Випадковим чином на двовимірному полі розміром 6 * 6 розташовується 5 кораблів. Користувач стріляє вказуючи координати.
// Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.


if (confirm("Почати тестування?")) {

    const battleField = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]

    function getRandomNumber(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1))
    }

    function pushShipsRandom(battleField, rows = 6, columns = 6, ships = 5) {
        for (let num = 0; num < ships;) {
            let rowIndex = getRandomNumber(0, rows - 1)
            let colIndex = getRandomNumber(0, columns - 1)
            if (battleField[rowIndex][colIndex] === 0) { 
                battleField[rowIndex][colIndex] = 1
                num++
            }
        }
        return battleField
    }

    pushShipsRandom(battleField)

    let userShots = 10
    let ships = 5

    while (userShots > 0 && ships > 0) {
        let userShotRow = parseInt(prompt('Введіть номер рядка для пострілу від 0 до 5:'))
        let userShotColumn = parseInt(prompt('Введіть номер колонки для пострілу від 0 до 5:'))

        if (isNaN(userShotRow) || isNaN(userShotColumn) || userShotRow < 0 || userShotRow > 5 || userShotColumn < 0 || userShotColumn > 5) {
            alert('Некоректне введення! Введіть числа від 0 до 5.')
            continue
        }

        userShots--

        if (battleField[userShotRow][userShotColumn] === 1) {
            ships--
            alert(`Ви влучили! Кораблів залишилось: ${ships}`)
            battleField[userShotRow][userShotColumn] = -1 
        } else if (battleField[userShotRow][userShotColumn] === 0) {
            alert(`Ви не влучили! Спробуйте ще раз. Пострілів залишилось: ${userShots}`)
        } else {
            alert('Ви вже стріляли в цю клітинку!')
        }
    }

    if (ships === 0) {
        alert('Ви виграли! Ви знищили всі кораблі!')
    } else if (userShots === 0) {
        alert('Гра закінчена! У вас закінчилися постріли.')
    }
}