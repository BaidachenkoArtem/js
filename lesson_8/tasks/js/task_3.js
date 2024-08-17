"use strict"

// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

let userNameStudents = ["Андрій", "Іван", "Марія", "Петро", "Олена", "Іван"];

function countIvan(userNameStudents) {
   let count = 0;
   for (let i = 0; i < userNameStudents.length; i++) {
      if (userNameStudents[i].toLowerCase() === "іван") {
         count++;
      }
   }
   return count;
}

let numberOfIvans = countIvan(userNameStudents);
document.write(`Ім'я Іван зустрічається ${numberOfIvans} рази.`);