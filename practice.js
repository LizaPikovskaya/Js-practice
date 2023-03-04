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


// let total = 0
// let a = prompt("Enter a number"); 

//  do {

//      total += Number(a)
//      a = prompt("Enter a number");

     
// } while (a !== null);
 
// console.log(total);


/**
 *?  Записать массив, const arr = ['BEST', 'the', 'foo', 'is',  'JS' ]
 *? развернуть массив,
 *? вырезать foo,
 *? перевести его в строку разделенную пробелами
 */

//  const arr = ["BEST", "the", "foo", "is", "JS"];
//  const array = arr.slice(0).reverse()
//  array.splice(array.indexOf("foo"),1)
// const newArray = array.join(" ")
//  console.log(newArray)



/**
 *? Напишіть цикл, який пропонує ввести
 *? число більше 100 через prompt.
 *? Якщо відвідувач ввів інше число – попросити
 *? ввести ще раз і таке інше.
 *? Цикл повинен питати число, поки відвідувач не
 *? введе число більше 100 або не натисне кнопку
 *? Скасування в prompt
 */



//  let number = prompt('Введіть число')

//  while(number < 100 && number !== null){
// number = prompt("Введіть число більше 100")

//  } 


/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

//  const user = {
//     name: "John",
//     age: 20,
//     hobby: "tennis",
//     premium: true,
//   };

//   user.mood = 'happy'
//   user.hobby = 'skydiving'
//   user.premium = false


//   const keys = Object.keys(user) 
//   for (const key of keys) {
//     console.log(`${key} : ${user[key]}`);
//   }

/**
 *? У нас є об'єкт, у якому зберігаються зарплати
 *? нашої команди
 *? Напишіть код для підсумовування всіх зарплат і
 *? збережіть його результат у змінній sum.
 *? Якщо об'єкт salaries порожній, то результат має бути 0
 */

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const arrSalary = Object.values(salaries);
// const a = arrSalary.reduce((acc, elem) => 
//   acc += elem, 0)
// console.log(a);

/**
 *? Напишіть ф-цію calcTotalPrice(stones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція вважає та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

//  const stones = [
//     { name: "Изумруд", price: 1300, quantity: 4 },
//     { name: "Бриллиант", price: 2700, quantity: 6 },
//     { name: "Сапфир", price: 400, quantity: 7 },
//     { name: "Щебень", price: 150, quantity: 100 },
//   ];
//   function calcTotalPrice(stones, stonesName){
// const stoneNew = stones.find(stone => stone.name === stonesName)

// return stoneNew.price * stoneNew.quantity
//   }
  
//   console.log(calcTotalPrice(stones, "Сапфир"))