//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const btnEl = document.querySelector("#alertButton");
// const inputEl = document.querySelector("#alertInput");

// btnEl.addEventListener('click', onClickBtn)
// function onClickBtn () {
// alert(inputEl.value);
// }

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const btnRef = document.querySelector('#swapButton')
// const firstInputRef = document.querySelector("#leftSwapInput");
// const secondInputRef = document.querySelector("#rightSwapInput");

// btnRef.addEventListener("click", onClick)

// function onClick() {
//     let firstValue = secondInputRef.value
//     let secondValue = firstInputRef.value

//     firstInputRef.value = firstValue;
//     secondInputRef.value = secondValue;

// }

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const passwordInputEl = document.querySelector('#passwordInput');
// const passwordButtonEl = document.querySelector('#passwordButton');

// passwordButtonEl.addEventListener('click', onClick);

// function onClick() {
//     if (passwordButtonEl.textContent === "Приховати") {
//         passwordInputEl.setAttribute("type", "password");
//         passwordButtonEl.textContent = "Розкрити";
//     } else {
//         passwordInputEl.type = 'text';
//         passwordButtonEl.textContent = "Приховати"
//     }
// }

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

// const increaseBtnEl = document.querySelector('#increase');
// const decreaseBtnEl = document.querySelector("#decrease");
// const boxEl = document.querySelector('#box');

// increaseBtnEl.addEventListener('click', increase);
// decreaseBtnEl.addEventListener("click", decrease);

// function increase() {
//     let sizeBox = parseInt(getComputedStyle(boxEl).width)
//     boxEl.style.width = `${sizeBox + 10}px`;
//     boxEl.style.height = `${sizeBox + 10}px`;
// }
// function decrease() {
//      let sizeBox = parseInt(getComputedStyle(boxEl).width);
//      boxEl.style.width = `${sizeBox - 10}px`;
//      boxEl.style.height = `${sizeBox - 10}px`;
//  }

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

const div = document.querySelector("#place");

window.addEventListener("click", onWindowClick);

function onWindowClick(event) {
  console.log(event.target === div ? true : false);
}

// { if (event.target === div) {
//     console.log(true);
//     return;
//   }
//   console.log(false);
// }

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

const btnDoubleEl = document.querySelector("#double");
const listItemsEl = document.querySelectorAll(".listItem");

btnDoubleEl.addEventListener('click', onDoubleBtnClick)
function onDoubleBtnClick (event) {
listItemsEl.forEach(item => {
    item.textContent = BigInt(item.textContent) ** 2n;
})
}


//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
