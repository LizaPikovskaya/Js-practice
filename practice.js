/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */



//  const officialName = prompt("Яка офіційна назва JavaScript?")

//  if(officialName === "ECMAScript") {
//     alert('Вірно')
//  } else {
//     alert("Не знаєте? ECMAScript!")

//  }

 
/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *? 70 === 01:10
 */
// function takeTime(number) {
    

//     const hour = String(Math.floor(number / 60)).padStart(2,0);
//     const min = String(number % 60).padStart(2,0);
    
//     console.log(`${hour}:${min}`);

// }

// const askMinutes = prompt("pls enter minutes");

// takeTime(askMinutes);



/**
 *? Напишіть цикл, який виводить у консоль
 *? числа від max до min за спаданням.
 *? Виведіть у консоль усі парні числа від min до max
 */


// function numberDecrease(min, max) {
//     for (let i = max; i >= min; i -= 1) { console.log(i) }
//     for (let i = min; i <= max; i += 1) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }
// numberDecrease(1, 10)
    

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */


let total = 0
let a = prompt("Enter a number"); 

 do {

     total += Number(a)
     a = prompt("Enter a number");

     
} while (a !== null);
 
console.log(total);


