"use strict"

/*
	Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)

	1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
   2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
   3)Сформувати список з тих цін, які більші за попереднє значення
   4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
   5)Підрахувати кількість змін цін
   6)Визначити, чи є ціна, що менше 1000
   7)Визначати, чи усі ціни більше за 1000
   8)Підрахувати кількість цін, що більше за 1000
   9)Підрахувати суму цін, що більше за 1000
   10)Знайти першу ціну, що більше за 1000
   11)Знайти індекс першої ціни, що більше за 1000
   12)Знайти останню ціну, що більше за 1000
   13)Знайти індекс останньої ціни, що більше за 1000

*/

if (confirm("Почати тестування?")) {

   let prices = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10000) + 1)

   // 1) Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
   let filteredPrices = prices.filter(price => price > 1000)

   // 2) Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

   let indicesFilteredPrices = prices.reduce((price, el, index) => {
      if (el > 1000) price.push(index)  
      return price
   }, [])

   // 3) Сформувати список з тих цін, які більші за попереднє значення
   let pricesGreaterThanPrevious = prices.filter((price, index, arr) => index > 0 && price > arr[index - 1])

   // 4) Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
   let maxPrice = Math.max(...prices);
   let percentageOfMax = prices.map(price => (price / maxPrice) * 100)
   let percentOfMaximumFixed = percentageOfMax.map((el) => el.toFixed(1) + `%`)

   // 5) Підрахувати кількість змін цін
   let priceChangesCount = prices.reduce((count, price, index, arr) => {
      if (index > 0 && price !== arr[index - 1]) 
         count += 1
         return count
   }, 0)
   
   // 6) Визначити, чи є ціна, що менше 1000
   let anyPriceBelow1000 = prices.some(price => price < 1000)

   // 7) Визначати, чи усі ціни більше за 1000
   let allPricesAbove1000 = prices.every(price => price > 1000)

   // 8) Підрахувати кількість цін, що більше за 1000
   let countPricesAbove1000 = filteredPrices.length

   // 9) Підрахувати суму цін, що більше за 1000
   let sumPricesAbove1000 = filteredPrices.reduce((sum, price) => sum + price, 0)

   // 10) Знайти першу ціну, що більше за 1000
   let firstPriceAbove1000 = prices.find((el) => el > 1000)
  
   // 11) Знайти індекс першої ціни, що більше за 1000
   let firstIndexOverThousandPrice = prices.findIndex((el) => el > 1000)

   // 12) Знайти останню ціну, що більше за 1000
   let lastPriceAbove1000 = prices.findLast((el) => el > 1000)

   // 13) Знайти індекс останньої ціни, що більше за 1000
   let lastIndexOverThousandPrice = prices.findLastIndex((el) => el > 1000)

   document.write(`
      <div>
         ${filteredPrices} <br>
         ${indicesFilteredPrices} <br>
         ${pricesGreaterThanPrevious} <br>
         ${percentOfMaximumFixed} <br>
         ${priceChangesCount} <br>
         ${anyPriceBelow1000} <br>
         ${allPricesAbove1000} <br>
         ${countPricesAbove1000} <br>
         ${sumPricesAbove1000} <br>
         ${firstPriceAbove1000} <br>
         ${firstIndexOverThousandPrice} <br>
         ${lastPriceAbove1000} <br>
         ${lastIndexOverThousandPrice} <br>
      </div>
   `)
}