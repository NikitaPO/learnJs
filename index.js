/* eslint-disable no-func-assign */
"use strict";
// // import { isArray } from "util";

// // module.exports.pow = pow;
// // module.exports.min = min;

// // console.clear();
// // /* Преобразование типов 2.6
// // "" + 1 + 0 //string 10
// // "" - 1 + 0 //-1 num
// // true + false //1 num
// // 6 / "3" //2 num
// // "2" * "3"//6 num
// // 4 + 5 + "px" //9px string
// // "$" + 4 + 5//$45 string
// // "4" - 2//2 num
// // "4px" - 2//NaN
// // 7 / 0 //Infinity
// // "  -9  " + 5 //" -9 5"
// // "  -9  " - 5 // -14 num
// // null + 1 // 1
// // undefined + 1 // NaN
// // " \t \n" - 2 // -2
// // */

// //2.9
// /**
// Создайте страницу, которая спрашивает имя у пользователя и выводит его.
//  */

// function printName() {
//   const name = prompt('What is your name?', '');
//   alert('Your name is ' + name);
//   return name;
// }

// //2.10
// /**
//  *Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
//  */

// function askJSQuestion() {
//   const officialName = prompt('What is official name of JavaScript?', '');

//   if (officialName.toLowerCase() === 'ecmascript') {
//     alert('Correctly!')
//   } else {
//     alert('You don\'t know? It\'s "ECMAScript"!');
//   }
// }

// /**
//  * Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.
//  */

// function printNumberSing() {
//   const num = +prompt('Enter the number: ', '');
//   if (num > 0) {
//     alert(1);
//   } else if (num === 0) {
//     alert(0);
//   } else {
//     alert(-1);
//   }
// }

// /**
//  * Перепишите if с использованием условного оператора '?':

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
//  */

// function isItEnough(a, b) {
//   const result = (a + b < 4) ? 'Few!' : 'Many!';
//   return result;
// }

// /**
//  * Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
//  */

// function printHello(login) {
//   let message;

//   (login === 'Worker') ? message = 'Hello':
//     (login === 'Boss') ? message = 'How do you do?' :
//     (login === '') ? message = 'No login' :
//     message = '';

//   return message;
// }

// //2.11
// /**
//  * Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
//  */

// function isItInRange(number, firstInRange = 14, lastInRange = 90) {
//   let isInRange = false;
//   if (number >= firstInRange && number <= lastInRange) {
//     isInRange = true;
//   }
//   return isInRange;
// }

// /**
//  * Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
//  */

// function isItNotInRange(number, firstInRange = 14, lastInRange = 90) {
//   let isInRange = false;
//   if (!(number >= firstInRange && number <= lastInRange)) {
//     isInRange = true;
//   }
//   return isInRange;
// }

// /**
//  * Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
//  */

// function autorization() {
//   const login = prompt('Who\'s there?', '');

//   if (login === null) {
//     return 'Cancelled';
//   } else if (login === 'admin') {
//     const password = prompt('Enter password: ', '');

//     if (password === null) {
//       return 'Cancelled';
//     } else if (password === 'iamtheboss') {
//       alert('Hello!');
//     } else {
//       alert('Wrong password!');
//     }
//   } else {
//     alert('I don\'t know you');
//   }

// }

// //2.12
// /**
//  * При помощи цикла for выведите чётные числа от 2 до 10.
//  */

// function printEvenNumbersFor() {
//   for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }

// /**
//  * Перепишите код, заменив цикл for на while, без изменения поведения цикла.
//  */

// function printEvenNumbersWhile() {
//   let i = 2;
//   while (i <= 10) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//     i++;
//   }
// }

// /**
//  * Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
//  */

// function doWhileBiggerThan100() {
//   let num;
//   do {
//     num = +prompt('Enter number bigger than 100:', '');
//   } while (num <= 100 && num !== null);
// }

// /**
//  * Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.
//  */

// function printPrimeNumbers(firstInterval, secondInterval) {
//   for (let i = firstInterval; i <= secondInterval; i++) {
//     if (!isDivide(i)) {
//       console.log(i);
//     }
//   }
// }

// function isDivide(num) {
//   if (num == 1) return true;
//   for (let divider = num - 1; divider > 1; divider--) {
//     if (num == divider) continue;
//     if (num % divider == 0) return true;
//   }
//   return false;
// }

// //2.13
// /**
//  * Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
//  */

// function chooseBrowser() {
//   const browser = prompt('Which browser do you use?', '');

//   if (browser === 'Edge') {
//     console.log('You\'ve got the Edge!');
//   } else if (
//     browser === 'Chrome' ||
//     browser === 'Firefox' ||
//     browser === 'Safari' ||
//     browser === 'Opera'
//   ) {
//     console.log('Okay we support these browsers too');
//   } else {
//     console.log('We hope that this page looks ok!');
//   }
// }

// /**
//  * Перепишите код с использованием одной конструкции switch:

//  const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
//  */

// function chooseNumber() {
//   const number = +prompt('Enter a number between 0 and 3', '');

//   switch (number) {
//     case 0:
//       console.log('You entered 0');
//       break;

//     case 1:
//       console.log('You entered 1');
//       break;

//     case 2:
//     case 3:
//       console.log('You entered 2, or 3');
//       break;
//   }

// }

// /**
//  * Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||
//  */

// function checkAge1(age) {
//   return (age > 18) ? true : confirm('Did your parents let you?');
// }

// function checkAge2(age) {
//   return (age > 18) || confirm('Did your parents let you?');
// }

// /**
//  * Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
//  */

// function min(a, b) {
//   return (a < b) ? +a : +b;
// }

// /**
//  * Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
//  */

// function powSomething(x, n) {
//   if (n < 1 || n % 1 != 0) {
//     return false;
//   }

//   let sum = x;

//   for (let i = 1; i < n; i++) {
//     sum *= x;
//   }

//   return sum;
// }

// /**
//  * function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );
//  */

// let askSomething = (question, yes, no) => {
//   (confirm(question)) ? yes(): no();
// }

// // askSomething(
// //   'Do you agree?',
// //   () => { console.log('You agreed'); },
// //   () => { console.log('You disagreed'); }
// // );

// function pow(x, n) {
//   if (n < 0) return NaN;
//   if (Math.round(n) != n) return NaN;
//   if (x == 0 && n == 0) return NaN;

//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// /**
//  * Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
//  */

// // let user = new Object();
// //
// // user.name = 'John';
// // user.surname = 'Smith';
// // user.name = "Pete";
// // delete user.name;

// /**
//  * Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false
//  */

// function isEmpty(obj) {
//   for (let key in obj) {
//     if (key) return false;
//   }

//   return true;
// }

// let shedule = {};

// /**
//  * У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.
//  */

// function propertiesSum(obj) {
//   let sum = 0;

//   for (let prop in obj) {
//     sum += obj[prop];
//   }

//   return sum;
// }

// let salaries = {
//   John: 2000,
//   Mary: 1000,
//   Marty: 3000
// }

// /**
//  * Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.
//  */

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// //4.4
// /**
//  * Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
//  */

// let id = Symbol('id');

// let calculator = {

//   [id]: 0,

//   read(...value) {
//     for (let item in value) {
//       this[this[id]] = item;
//       this[id]++;
//     }
//   },

//   sum() {
//     let sum = 0;

//     for (let key in this) {
//       sum += this[key];
//     }
//   },

//   mul() {
//     let multiply = 1;

//     for (let key in this) {
//       if (typeof this[key] === 'number') {
//         multiply *= this[key];
//       }
//     }

//     return multiply;
//   }
// };

// /**
//  * Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.
//  */

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () { // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   }
// };

// //Symbol.toPrimitive Преобразование объектов в примитивы
// let objectUser = {
//   name: "John",
//   age: 22,

//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == 'number' ? this.age : this.name;
//   },

//   toString() {
//     return `his name is ${this.name}`
//   }
// }

// //Функции конструкторы

// function User(name) {
//   if (!new.target) {
//     return new User(name);
//   }

//   this.name = name;
//   this.age = 22;
// }

// //4.6
// /**
//  * Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
//  */

// // function Calculator() {
// //   this.read = (a, b) => {
// //     this.a = +a;
// //     this.b = +b;
// //   };
// //
// //   this.sum = () => {
// //     return this.a + this.b;
// //   };
// //
// //   this.mul = () => {
// //     return this.a * this.b;
// //   };
// // }

// // let calc = new Calculator();
// // calc.read(1,2);
// // console.dir(calc);
// // console.log(calc.sum());

// /**
//  * Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений
//  */

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = () => {
//     this.value += +prompt('Enter value: ', '');
//   }
// }

// let acc = new Accumulator(5);

// //5.2
// /**
//  * Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// Запустить демо

// P.S. Есть «подводный камень» при работе с типами.
//  */

// function printSum() {
//   let a = +prompt('Enter first number: ', '');
//   let b = +prompt('Enter second number: ', '');
//   let sum = a + b;
//   alert(sum.toFixed(4))
// }

// /**
//  *
//  Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

//  Функция должна возвращать числовое значение.

//  Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
//  */

// function readNumber() {
//   let result;

//   do {
//     result = prompt('Enter number: ', '');
//   } while (!isFinite(+result));

//   if (result === null || result === '') return null;
//   return +result;
// }

// /**
//  * Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
//  */

// function random(min, max) {
//   return (Math.random() * (max - min)) + min;
// }

// /**
//  * Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5
//  */

// function randomInteger(min, max) {
//   min -= 0.5;
//   max += 0.5;
//   return Math.round(Math.random() * (max - min) + min);
// }

// //5.3
// /**
//  * Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";
//  */

// function ucFirst(str) {
//   if (!str) return str;

//   str = str[0].toUpperCase() + str.slice(1);
//   return str;
// }

// /**
//  * Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
//  */

// function checkSpam(str) {
//   str = str.toLowerCase();

//   return str.includes('viagra') || str.includes('xxx');
// }

// /**
//  * Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"
//  */

// function truncate(str, maxLength) {
//   if (str.length > maxLength) {
//     str = str.slice(0, maxLength - 1) + '…';
//   }

//   return str;
// }

// /**
//  * Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true
//  */

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// /*
// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
// */

// // let styles = ['Джаз', 'Блюз'];
// // console.log(styles);
// //
// // styles.push('Рок-н-ролл');
// // console.log(styles);
// //
// // const indexOfCenterElement = Math.ceil(styles.length / 2) - 1;
// // styles[indexOfCenterElement] = 'Классика';
// // console.log(styles);
// //
// // console.log(styles.shift(0));
// // console.log(styles);
// //
// // styles.unshift('Рэп', 'Рэгги')
// // console.log(styles);

// /*

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0
// */

// function sumInput() {
//   let num;
//   let isNumFinite = true;
//   let arr = [];

//   do {
//     num = prompt('');

//     if (num === '' || num === null || !isFinite(num)) {
//       const fullSum = sumOfArr(arr);
//       console.log(fullSum);

//       return fullSum;
//     } else {
//       arr.push(+num);
//       console.log(arr);
//     }

//     console.log(num, isNumFinite);
//   } while (isNumFinite)
// }

// function sumOfArr(arr) {
//   return arr.reduce((a, b) => a + b)
// }

// /* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Например:
// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

// */

// // Мой *овно код
// // function getMaxSubSum(arr) {
// //   let maxSum = 0;
// //
// //   if (!isArrayPositive(arr)) return 0;
// //
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = arr.length; j > i; j--){
// //       let sumOfSubArray = sumArray(mySliceArray(arr, i, j));
// //
// //       if (sumOfSubArray > maxSum) {
// //         maxSum = sumOfSubArray;
// //         console.log(mySliceArray(arr, i, j), sumOfSubArray);
// //       }
// //     }
// //   }
// //
// //   return maxSum
// // }
// //
// // function sumArray(arr) {
// //   return arr.reduce((a, b) => a + b)
// // }
// //
// // function isArrayPositive(arr) {
// //   for (let item of arr) {
// //     if (item > 0) return true;
// //   }
// //
// //   return false;
// // }
// //
// // function mySliceArray(arr, i, j) {
// //   let newArray = [];
// //
// //   while (i < j) {
// //     newArray.push(arr[i++]);
// //   }
// //
// //   return newArray
// // }

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let particalSum = 0;

//   for (let item of arr) {
//     particalSum += item;
//     maxSum = Math.max(maxSum, particalSum);
//     if (particalSum < 0) particalSum = 0;
//   }

//   return maxSum
// }

// //sort functions
// //
// // let array = [1, -2, 15, 2, 0, 8];
// // array.sort((a, b) => a - b);
// //
// // or
// //
// // function compareNumeric(a, b) {
// //   if (a > b) return 1;
// //   if (a == b) return 0;
// //   if (a < b) return -1;
// // }
// //
// // console.log(array);

// /*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// */
// //
// // function camelize(str) {
// //   let array = str.split('');
// //   let newArray = [];
// //
// //   for ( let i = 0; i < str.length; i++ ) {
// //     if ( array[i] === '-' ) {
// //       if ( i < str.length - 1 ) newArray.push((array[++i]).toUpperCase())
// //     } else {
// //       newArray.push(array[i])
// //     }
// //   }
// //
// //   str = newArray.join('');
// //   return str;
// // }

// // function camelize(str) {
// //   return str
// //     .split('-')
// //     .map( (word, index) => {
// //       if (index > 0) {
// //         return word[0].toUpperCase() + word.slice(1);
// //       } else {
// //         return word;
// //       }
// //     })
// //     .join('');
// // }

// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }

// /*
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)
// */

// function filterRange(arr, a, b) {
//   return arr.filter(item => (item >= a && item <= b));
// }

// /*

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]
// */

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i--, 1);
//     }
//   }
// }

// /*
// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10
// */
// //
// // let array = [1,3,2,2,1,4,3,4];
// //
// // array.sort((a, b) => b - a);
// //
// // console.log(array);

// /*
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)
// */

// function copySorted(arr) {
//   return arr.slice().sort();
// }

// // let arr = ["HTML", "JavaScript", "CSS"];
// //
// // let sorted = copySorted(arr);
// //
// // console.log(arr, sorted);

// /*
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.
// */

// function Calculator() {
//   this.methods = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//   };

//   this.calculate = (str) => {
//     let split = str.split(' ');
//     let a = +split[0];
//     let operator = split[1];
//     let b = +split[2];
//     let result = this.methods[operator](a, b);

//     if (isNaN(a) || isNaN(b) || !result) {
//       return NaN;
//     }

//     return result;
//   };

//   this.addMethod = (operator, fn) => {
//     this.methods[operator] = fn;
//   };
// }

// let myCalc = new Calculator();

// myCalc.addMethod('**', (a, b) => a ** b);
// myCalc.addMethod('/', (a, b) => a / b);
// myCalc.addMethod('*', (a, b) => a * b);

// // console.log(myCalc.calculate('6 * 2'));

// /*
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:
// */
// //
// // let vasya = { name: "Вася", age: 25 };
// // let petya = { name: "Петя", age: 30 };
// // let masha = { name: "Маша", age: 28 };
// //
// // let users = [ vasya, petya, masha ];
// //
// // let names = users.map((item) => item.name)
// //
// // console.log( names ); // Вася, Петя, Маша

// /*
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:
// */
// //
// // let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// // let petya = { name: "Петя", surname: "Иванов", id: 2 };
// // let masha = { name: "Маша", surname: "Петрова", id: 3 };
// //
// // let users = [ vasya, petya, masha ];
// //
// // let usersMapped = users.map(item => {
// //   return {
// //     fullName : item.name + ' ' + item.surname,
// //     id : item.id
// //   }
// // });

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
// //
// // console.log( usersMapped[0].id ) // 1
// // console.log( usersMapped[0].fullName ) // Вася Пупкин

// /*
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:
// */
// // let vasya = { name: "Вася", age: 25 };
// // let petya = { name: "Петя", age: 30 };
// // let masha = { name: "Маша", age: 28 };
// //
// // let arr = [ vasya, petya, masha ]
// //
// // sortByAge(arr);
// //
// // // теперь: [vasya, masha, petya]
// // console.log(arr[0].name); // Вася
// // console.log(arr[1].name); // Маша
// // console.log(arr[2].name); // Петя
// //
// // console.log(arr)
// //
// // function sortByAge(arr) {
// //   arr.sort((a, b) => (a.age - b.age))
// // }

// /*
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

// */

// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let r = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[r]] = [arr[r], arr[i]];
//   }
// }
// //
// // let count = {
// //   '123': 0,
// //   '132': 0,
// //   '213': 0,
// //   '231': 0,
// //   '312': 0,
// //   '321': 0,
// // }

// // let count = {
// //   '0': 0,
// //   '1': 0,
// //   '2': 0,
// //   '3': 0,
// //   '4': 0,
// //   '5': 0,
// //   '6': 0,
// // }
// //
// // for (let i = 0; i < 10000; i++) {
// //   let randomNumber = Math.ceil((Math.random() * 5) - 1);
// //   count[randomNumber]++;
// // }
// //
// // console.log(count);

// /*
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// */

// // let vasya = { name: "Вася", age: 25 };
// // let petya = { name: "Петя", age: 30 };
// // let masha = { name: "Маша", age: 29 };
// // let users = [ vasya, petya, masha ];

// function getAverageAge(arr) {
//   return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
// }

// /*
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:
// */

// function unique(arr) {
//   let newArr = [];

//   for (let item of arr) {
//     if (!newArr.includes(item)) {
//       newArr.push(item);
//     }
//   }

//   return newArr
// }
// //
// // let strings = ["кришна", "кришна", "харе", "харе",
// //   "харе", "харе", "кришна", "кришна", ":-O"];
// //
// // console.log( unique(strings) );

// let range = {
//   from: 1,
//   to: 10
// };

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if (this.current <= this.last) {
//         return {
//           done: false,
//           value: this.current++
//         }
//       } else {
//         return {
//           done: true
//         }
//       }
//     }
//   }
// }
// //
// // for (let item of range) {
// //   console.log(item);
// // }
// // let obj = {
// //   name: 'John',
// //   surname: 'Smith'
// // }
// //
// //
// // let map = new Map([
// //   [1, 'hello'],
// //   ['1', 'goodbye']
// // ]);
// //
// // obj = map.fromEntries();
// // console.log(obj);
// //
// // let mapObject = new Map(obj);
// // map.set(1, 'hello')
// // map.set('1', 'goodbye')

// // for (let item of mapObject) {
// //   console.log(item);
// // }

// /*
// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// Например:

// alert( unique(values) ); // Hare, Krishna, :-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.

// P.P.S. Используйте Set для хранения уникальных значений.
// */
// // let values = ["Hare", "Krishna", "Hare", "Krishna",
// // "Krishna", "Krishna", "Hare", "Hare", ":-O"
// // ];

// function uniqueArray(arr) {
//   return Array.from(new Set(arr));
// }

// // console.log(uniqueArray(values));

// /*
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
// */

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// // function aclean(arr) {
// //   let filterArr = [];
// //   let newArr = [];
// //
// //   for (let item of arr) {
// //     let filterItem = item.toLowerCase().split('').sort().join('');
// //
// //     if (!filterArr.includes(filterItem)) {
// //       filterArr.push(filterItem);
// //       newArr.push(item);
// //     }
// //   }
// //   return newArr;
// // }

// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     let value = word.toLowerCase().split('').sort().join('');
//     map.set(value, word);
//   }

//   return Array.from(map.values())
// }

// // let obj = {
// //   name: 'Nick',
// //   age: '23'
// // }

// // console.log(Object.entries(obj));

// /*
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650
// */

// let salaries2 = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// // function sumSalaries(obj) {
// //   let sum = 0;
// //
// //   for (let prop of Object.values(obj)) {
// //     sum += prop;
// //   }
// //
// //   return sum
// // }

// function sumSalaries(obj) {
//   return Object.values(obj).reduce((prev, next) => prev + next, 0);
// }

// /*

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
// */

// // function count(obj) {
// //   return Object.keys(obj).length;
// // }
// //
// // let options = {
// //   title: "My menu",
// //   items: ["Pike", "Sardine"],
// //   priceList: [100, 200],
// // }
// //
// // function showMenu({title = "Menu", width = 200, height = 300, items = [], ...other } = {}) {
// //   let menuObj = {title, width, height, items, ...other};
// //   console.log(menuObj);
// // }
// //
// // let findAllCookies = {
// //   level1: {
// //     hello: ['not here',
// //       {
// //         almost: 'cookie1'
// //       }
// //     ]
// //   },
// //
// //   level2: [
// //     {
// //       where : [
// //         {},
// //         {},
// //         {
// //           here: [
// //             [
// //               {
// //                 itsNotCookie: 'caakie'
// //               },
// //               {
// //                 second:
// //                 {
// //                   isItCookie: 'cookie2'
// //                 }
// //               }
// //             ]
// //           ]
// //         }
// //       ]
// //     },
// //   ],
// // };
// //
// // let {level1: {hello: [, {almost: cookie1}]}} = findAllCookies;
// // let {level2: [{where: [, , {here: [[, {second: {isItCookie: cookie2}}]]}]}]} = findAllCookies;
// //
// // console.log(cookie1);
// // console.log(cookie2);
// //
// //
// // findAllCookies = {
// //   here: {
// //     that: ['cookie']
// //   }
// // }
// //
// // let {here: {that: [cookie]}} = findAllCookies;
// //
// // console.log(cookie); //cookie

// /*

// At this task you need to use destructuring to find cookie strings. For example:

// ```javascript
// let findAllCookies = {
//   here: {
//     that: ['cookie']
//   }
// }

// let {here: {that: [cookie]}} = findAllCookies;

// console.log(cookie); //cookie
// ```
// */

// /*
// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// // ... = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// */

// // let user1 = { name: "John", years: 30 };
// //
// // let {name, years: age, isAdmin = false} = user1;
// //
// // console.log(name, age, isAdmin);

// /*
// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// */

// let salaries1 = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function topSalary(obj) {
//   let maxSalary = 0;
//   let maxName = null;

//   for (let [name, salary] of Object.entries(obj)) {
//     if (maxSalary < salary) {
//       maxSalary = salary;
//       maxName = name;
//     }
//   }

//   return maxName
// }

// // let now = new Date();
// // console.log(now.getTime(), now.getHours(), now.getMinutes(), now.getDay());

// /*
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.
// */

// // let date = new Date('2012-02-20T00:12:00.123-03:00');
// // console.log(date);
// //
// // let now = new Date();
// // console.log(now, now.getTimezoneOffset());

// /*
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );
// */

// // let date = new Date(2012, 0, 3);

// function showWeekDay(date) {
//   let weekDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

//   return weekDays[date.getDay()];
// }

// // console.log(showWeekDay(date));

// /*
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2
// */

// // function getLocalDay(date) {
// //   let weekDays = ['7', '1', '2', '3', '4', '5', '6'];
// //   return weekDays[date.getDay()]
// // }

// function getLocalDay(date) {
//   let day = date.getDay();

//   if (day == 0) day = 7;

//   return day
// }

// // console.log(getLocalDay(date));

// /*
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.
// */

// // let date = new Date(2016, 0, 22);

// function getDateAgo(date, day) {
//   let dateAgo = date;
//   dateAgo.setDate(dateAgo.getDate() - day);

//   return dateAgo
// }

// // console.log(getDateAgo(date, 2));

// /*
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
// */

// // год: при вводе в Date() = getFullYear идентичны
// // месяц:
// // при вводе в Date() 1 - январь, 0 - декабрь
// // при получении из getMonth() 0 - январь и т.д.
// // день:
// // При вводе в Date() 2 - первое число текущего месяца, 1 - предыдущее
// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month, 0);
//   return date.getDate()
// }

// // console.log(getLastDayOfMonth(2019, 1));

// /*
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// */

// function getSecondsToday() {
//   let now = new Date();
//   let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

//   return (now.getTime() - startOfDay.getTime()) / 1000
// }
// // console.log(getSecondsToday());

// /*
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
// */

// // function getSecondsToTomorrow() {
// //   let now = new Date();
// //   return 86400 - ( now.getHours() * 3600
// //   + now.getMinutes() * 60
// //   + now.getSeconds() )
// // }

// // console.log(getSecondsToTomorrow());

// /*
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );
// */

// // let date = new Date(2019, 11, 18, 0, 14);

// function formatDate(date) {
//   let difference = Date.now() - date.getTime();
//   let mounth = date.getMonth() + 1;

//   if (difference < 0) {
//     difference = 500000;
//   }

//   if (difference < 1000) {
//     return 'прямо сейчас';
//   } else if (difference < 30000) {
//     return `${Math.round(difference / 1000)} сек. назад`;
//   } else if (difference < 300000) {
//     return `${Math.round(difference / 60000)} мин. назад`;
//   } else {
//     return date.getDate() + '.' + mounth + '.' +
//       String(date.getFullYear()).slice(-2) + ' ' +
//       String(date.getHours()).padStart(2, '0') + ':' +
//       String(date.getMinutes()).padStart(2, '0')
//   }
// }
// let users = {
//   0: {
//     name: 'Nikita',
//     age: 22
//   },
//   1: {
//     name: 'Nastya',
//     age: 20
//   }
// }

// // let dateJSON = String(JSON.stringify(date)).slice(1, -1);
// // console.log(dateJSON == "2019-12-17T21:14:00.000Z");
// //
// // date = new Date(dateJSON);
// // console.log(date);

// // let room = {
// //   number: 23
// // };
// //
// // let meetup = {
// //   title: "Conference",
// //   participants: [{name: "John"}, {name: "Alice"}],
// //   place: room // meetup ссылается на room
// // };
// //
// // room.occupiedBy = meetup; // room ссылается на meetup
// //
// // console.log( JSON.stringify(meetup, function replacer(key, value) {
// //   console.log(`${key}: ${value}`);
// //   return (key == 'occupiedBy') ? undefined : value;
// // }));

// // let user = {
// //   name: 'John',
// //   age: 23,
// //   roles: {
// //     isAdmin: true,
// //     isEditor: true
// //   },
// //   dog: {
// //     name: 'Frank',
// //     age: 2,
// //     nickname: 'Bunny',
// //     sex: 'Male'
// //   }
// // }

// // console.log(JSON.stringify(user, null, 2));
// // console.log(Date.UTC(2019, 11, 12));

// /*
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// */

// // let user = {
// //   name: "Василий Иванович",
// //   age: 35
// // };
// //
// // let JSONuser = JSON.parse(JSON.stringify(user, null, 2));
// //
// // console.log(JSONuser);

// /*
// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

// в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
// */

// // let room = {
// //   number: 23
// // };
// //
// // let meetup = {
// //   title: "Совещание",
// //   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
// //   place: room
// // };
// //
// // // цикличные ссылки
// // room.occupiedBy = meetup;
// // meetup.self = meetup;
// //
// // console.log( JSON.stringify(meetup, function replacer(key, value) {
// //   // console.log(`${key}: ${value}`);
// //   if (key != '' && value == meetup) {
// //     return undefined
// //   } else {
// //     return value
// //   }
// // }));

// function powRecursion(x, n) {
//   return (n == 1) ? x : x * pow(x, n - 1)
// }

// function powIteration(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// function benchmark(fn, ...args) {
//   let result = 0;

//   for (let i = 0; i < 100000; i++) {
//     let start = Date.now();
//     fn(...args);
//     let end = Date.now();
//     result += end - start;
//   }

//   return result
// }

// function test(fn, ...args) {
//   let result = 0;

//   for (let i = 0; i <= 100; i++) {
//     result += benchmark(fn, ...args);
//   }

//   return `${result / 100}ms`
// }

// /*
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) { }

// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
// */

// function sumToIter(n) {
//   let sum = n;

//   while (n > 1) {
//     sum += --n;
//   }

//   return sum
// }

// function sumToRec(n) {
//   if (n == 1) {
//     return 1
//   } else {
//     return n + sumToRec(n - 1)
//   }
// }

// function sumToRecTern(n) {
//   return (n == 1) ? 1 : n + sumToRecTern(n - 1)
// }

// function sumToFormula(n) {
//   return n * (n + 1) / 2
// }

// // let a = 5;
// //
// // console.log(test(sumToIter, a));
// // console.log(test(sumToRec, a));
// // console.log(test(sumToRecTern,a));
// // console.log(test(sumToFormula, a));

// /*
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// Определение факториала можно записать как:

// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
// */

// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1
// }

// /*
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:

// function fib(n) { }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.
// */

// function fib(n) {
//   let sum;

//   for (let a = 1, b = 1, i = 2; i < n; i++) {
//     sum = a + b;
//     a = b;
//     b = sum;
//   }

//   return sum
// }

// // function fib(n) {
// //   return (n < 3) ? 1 : fib(n - 1) + fib(n - 2)
// // }

// // function fib(n) {
// //   //самый быстрый, но не точный метод
// //   const gSec = +((1 + Math.sqrt(5)) / 2).toFixed(15);
// //   console.log(gSec);
// //   return (+Math.pow(gSec, n).toFixed(15) - +Math.pow(-gSec, -n).toFixed(15)) / (2 * gSec - 1)
// // }

// // let fibArr = [];
// //
// // for(let i = 1; i <= 10; i++) {
// //   fibArr.push(fib(i));
// // }
// //
// // console.log(fibArr);

// // console.log(fib(5));
// // console.log(fib(77), test(fib, 77));

// /*
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?
// */

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   console.log(list.value);

//   if (list.next) {
//     printList(list.next);
//   }
// }
// //
// // function printList(list) {
// //   let temp = list;
// //
// //   while (temp) {
// //     console.log(temp.value);
// //     temp = temp.next;
// //   }
// // }

// // printList(list);
// /*
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.
// */
// //
// // function printListReverse(list) {
// //   if (list.next) {
// //     printListReverse(list.next);
// //   }
// //
// //   console.log(list.value);
// // }

// function printListReverse(list) {
//   let temp = list;
//   let arr = [];

//   while (temp) {
//     arr.push(temp.value);
//     temp = temp.next;
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// // printListReverse(list);

// // let array = new Array(1,2);

// // Сделайте объединение аргументов

// // function concat2(...args) {
// //   let newArr = [];

// //   for (let item of args) {
// //     if (!Array.isArray(item)) {
// //       newArr.push(item);
// //     } else {
// //       newArr.push(...item);
// //     }
// //   }
// //   return [...newArr]
// // }

// function myFlat(...args) {
//   let newArr = [];

//   function concat2(...args) {
//     for (let item of args) {
//       (!Array.isArray(item)) ? newArr.push(item): concat2(...item);
//     }

//     return [...newArr]
//   }

//   return concat2(args);
// }
// // console.log(myFlat([1, 'a', [3, 4], [[5]], [[6]], [[[7]]]]));
// // console.log(concat2([1]));

// // function makeWorker() {
// //   return function() {
// //     console.log(name);
// //   }
// // }

// // let work = makeWorker();
// // let name = 'John';

// // work();

// // let name = 'Nikita';

// // {
// //   console.log(name);
// // }(name)

// /*
// // Пути создания IIFE

// (function () {
//   alert("Скобки вокруг функции");
// })();

// (function () {
//   alert("Скобки вокруг всего");
// }());

// ! function () {
//   alert("Выражение начинается с побитового оператора NOT");
// }();

// +
// function () {
//   alert("Выражение начинается с унарного плюса");
// }();

// */

// /*
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a + b.

// Да, именно таким образом, используя двойные круглые скобки(не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4
// */

// // let sum = a => b => a + b;

// // function sum(a) {
// //   return function (b) {
// //     return a + b;
// //   }
// // }

// // console.log(sum(5)(3));

// /*
// У нас есть встроенный метод arr.filter(f) для массивов.Он фильтрует все элементы с помощью функции f.Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор« готовых к употреблению» фильтров:

//   inBetween(a, b)– между a и b(включительно).
// inArray([...])– находится в данном массиве.
// Они должны использоваться таким образом:

//   arr.filter(inBetween(3, 6))– выбирает только значения межу 3 и 6(включительно).
// arr.filter(inArray([1, 2, 3]))– выбирает только элементы, совпадающие с одним из элементов массива
// Например:

// */
// arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(minRange, maxRange) {
//   return el => (el >= minRange && el <= maxRange);
// }

// function inArray(arr) {
//   return el => arr.includes(el);
// }

// // console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// // console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// /*
// У нас есть массив объектов, который нужно отсортировать:

//   let users = [{
//       name: "John",
//       age: 20,
//       surname: "Johnson"
//     },
//     {
//       name: "Pete",
//       age: 18,
//       surname: "Peterson"
//     },
//     {
//       name: "Ann",
//       age: 19,
//       surname: "Hathaway"
//     }
//   ];
// Обычный способ был бы таким:

//   // по имени (Ann, John, Pete)
//   users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким ?

//   users.sort(byField('name'));
// users.sort(byField('age'));
// То есть, чтобы вместо функции, мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.
// */

// users = [{
//     name: "John",
//     age: 20,
//     surname: "Johnson"
//   },
//   {
//     name: "Pete",
//     age: 18,
//     surname: "Peterson"
//   },
//   {
//     name: "Ann",
//     age: 19,
//     surname: "Hathaway"
//   }
// ];

// function byField(fieldName) {
//   return (a, b) => (a[fieldName] > b[fieldName]) ? 1 : -1;
// }

// /*
// Следующий код создаёт массив из стрелков(shooters).

// Каждая функция предназначена выводить их порядковые номера.Но что - то пошло не так…

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function () { // функция shooter
//       alert(i); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера ? Почините код, чтобы он работал как задумано.*/

// function makeArmy() {
//   let shooters = [];
//   let i = 0;

//   while (i < 10) {
//     let k = i;
//     let shooter = function () { // функция shooter
//       console.log(k); // должна выводить порядковый номер
//     };

//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// // let army = makeArmy();

// // function makeCounter() {
// //   let count = 0;

// //   return function() {
// //     return count++;
// //   }
// // }

// // let counter = makeCounter();

// // console.log(counter());
// // console.log(counter());
// // console.log(counter());

// // function reverseSeq(n) {
// //   return Array(n).fill()
// // }

// function balancedNum(number) {
//   number = String(number);

//   let middle = Math.ceil(number.length / 2) - 1;
//   if (!middle) middle = number.length;

//   const left = number.slice(0, middle).split('').reduce((sum, e) => sum += +e, 0);
//   const right = number.slice(-middle).split('').reduce((sum, e) => sum += +e, 0);

//   if (left == right) {
//     return 'Balanced'
//   } else {
//     return 'Not Balanced'
//   }
// }

//   console.log(balancedNum(7) == "Balanced")
//   console.log(balancedNum(959) == "Balanced")
//   console.log(balancedNum(13) == "Balanced")
//   console.log(balancedNum(4321) == "Not Balanced")
//   console.log(balancedNum(424) == "Balanced")

// function calculateDamage(yourType, opponentType, attack, defense) {
//   let types = {
//     electric: {
//       electric: 0.5,
//       fire: 1,
//       grass: 1,
//       water: 2,
//     },
//     fire: {
//       electric: 1,
//       fire: 0.5,
//       grass: 2,
//       water: 0.5,
//     },
//     grass: {
//       electric: 1,
//       fire: 0.5,
//       grass: 0.5,
//       water: 2,
//     },
//     water: {
//       electric: 0.5,
//       fire: 2,
//       grass: 0.5,
//       water: 0.5,
//     }
//   }

//   let effectiveness = types[yourType][opponentType];
//   return 50 * (attack / defense) * effectiveness;;
// }

// console.log(calculateDamage("fire", "water", 100, 100) == 25);
// console.log(calculateDamage("electric", "fire", 100, 100) == 50);
// console.log(calculateDamage("grass", "water", 40, 40) == 100);
// console.log(calculateDamage("grass", "water", 100, 100) == 100);
// console.log(calculateDamage("grass", "fire", 35, 5) == 175);
// console.log(calculateDamage("fire", "electric", 10, 2) == 250);
// console.log(calculateDamage("grass", "electric", 57, 19) == 150);

// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

//     counter() должен возвращать следующее значение(как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S.Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции.Или сделать два варианта решения: и так, и так.

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return ++count;
//   }

//   counter.set = value => (count = value);
//   counter.decrease = () => count--;

//   return counter;
// }

// let abc = makeCounter();

// abc.set(10);
// abc.decrease();

// console.log(abc());

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// // Используя setInterval.
// function printNumbersInterval(from, to) {
//   let current = from;

//   function print() {
//     console.log(current);

//     if (current >= to) {
//       clearInterval(timerID);
//     }

//     current++;
//   }

//   print();
//   let timerID = setInterval(print, 1000);
// }

// // Используя рекурсивный setTimeout.

// function printNumbers(from, to) {
//   setTimeout(function print() {
//     if (from <= to) {
//       console.log(from++);
//       setTimeout(print, 1000);
//     }
//   }, 1000);
// }

// printNumbersInterval(1, 5);

// function work(a, b) {
//   console.log(a + b); // произвольная функция или метод
// }

// function spy(fucn) {
//   function wrapper(...args) {
//     console.log(args);
//     wrapper.calls.push(args);
//     return fucn.apply(this, arguments);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }

// function work(a, b) {
//   console.log(a + b);
// }

// function spy(func) {
//   function wrapper(a, b) {
//     wrapper.calls.push([a, b].join());
//     return func.call(this, a, b);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }

// work = spy(work);

// work(1, 3);
// work(1, 5);

// for (let args of work.calls) {
//   console.log("Call: " + args);
// }

// function f(x) {
//   console.log(x);
// }

// function delay(func, del) {
//   return function() {
//     setTimeout(() => func.apply(this, args), del);
//   };
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

// function delay(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }

// let f1000 = delay(console.log, 1000);

// f1000("test"); // показывает "test" после 1000 мс

// function f(x) {
//   console.log(x);
// }

// function delay(func, ms) {
//   return function() {
//     setTimeout(() => func.apply(this, arguments), ms);
//   };
// }

// let f1000 = delay(f, 1000);

// f1000("hello");

// function helloFunc(i) {

//   console.log("hello " + i);
// }

// function debounce(f, ms) {
//   let start = Date.now();
//   let counter = 0;

//   return function wrapper() {
//     if (Date.now() - start - counter * ms >= 0) {
//       f.apply(this, arguments);
//       ++counter;
//     }
//   };
// }

// // function debounce(f, ms) {
// //   let isCooldown = false;

// //   return function() {
// //     if (isCooldown) return;

// //     f.apply(this, arguments);
// //     isCooldown = true;

// //     setInterval(() => (isCooldown = false), ms);
// //   };
// // }

// helloFunc = debounce(helloFunc, 1000);

// helloFunc(1); // выполняется немедленно
// helloFunc(2); // проигнорирован

// setTimeout(() => helloFunc(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => helloFunc(4), 1100); // выполняется
// setTimeout(() => helloFunc(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// function oddRow(n) {
//   return Array(n)
//     .fill(0)
//     .map((_, i) => n * n - n + 1 + i * 2);
// }

// console.log(oddRow(1));
// console.log(oddRow(2));
// console.log(oddRow(3));
// console.log(oddRow(4));
// console.log(oddRow(5));

// let animal = {
//   sleep: true
// };

// let cat = {
//   eats: true,
//   __proto__: animal
// };

// for (let prop in cat) {
//   // eslint-disable-next-line no-prototype-builtins
//   let isOwn = cat.hasOwnProperty(prop);

//   if (isOwn) {
//     console.log(prop);
//   }
// }

// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).

// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed
// };

// console.log(pockets.pen);
// console.log(bed.glasses);

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach = [food];
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// speedy.eat("burger");
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple
// function User(name) {
//   this.name = name;
// }
// User.prototype = {}; // (*)

// let user = new User("John");
// let user2 = new user.constructor('adsfas');

// console.log(user2); // undefined

// function f(a, b) {
//   console.log(a + b);
// }

// Function.prototype.defer = function(delay) {
//   let func = this;

//   return function() {
//     setTimeout(() => func.call(this, ...arguments), 1000);
//   };
// };

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// let user = {
//   name: "John",
//   age: 30
// };

// let newUser = JSON.parse(
//   JSON.stringify(
//     user,
//     function(key, value) {
//       if (typeof value === "string") {
//         return undefined;
//       }
//       return value;
//     },
//     2
//   )
// );

// console.log(newUser);

// let user = {
//   name: "adsfa",
//   age: 123,

//   show() {
//     console.log(this.name + ", " + this.age);
//   }
// };

// Object.defineProperty(user, "show", {
//   enumerable: false
// });

// console.dir(Object.getPrototypeOf(user));

// let dictionary = Object.create(null, {
//   toString: {
//     value() {
//       return Object.keys(this).join(", ");
//     }
//   }
// });

// // ваш код, который добавляет метод dictionary.toString

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for (let key in dictionary) {
//   console.log(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// console.log(dictionary.toString()); // "apple,__proto__"

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`Hi, ${this.name}`);
//   }
// }

// let userNick = new User("Nick", 22);

// userNick.sayHi();

// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }
//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let minutes = date.getMinutes();
//     if (minutes < 10) minutes = "0" + minutes;

//     let seconds = date.getSeconds();
//     if (seconds < 10) seconds = "0" + seconds;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", minutes)
//       .replace("s", seconds);

//     console.log(output);
//   }
//   stop() {
//     clearInterval(timer);
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendetClock extends Clock {
//   constructor(options) {
//     super(options);
//     let { precision = 1000 } = options;
//     this.precision = precision;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => super.render(), this.precision);
//   }
// }

// let clock = new ExtendetClock({ template: "h:m:s", precision: 20000 });
// clock.start();

// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Кроль");

// console.log(rabbit.hasOwnProperty("name")); // true

// class Animal {
//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }

//   run(speed = 0) {
//     this.speed += speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }

//   static compare(animalA, animalB) {
//     console.log("hi nikita");
//     return animalA.speed - animalB.speed;
//   }
// }

// // Наследует от Animal
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} прячется!`);
//   }
// }

// let rabbits = [new Rabbit("Белый кролик", 10), new Rabbit("Чёрный кролик", 5)];

// console.dir(Animal);
// console.dir(Rabbit);

// rabbits.sort(Rabbit.compare);

// class User {
//   constructor({ name, age }) {
//     this._name = name;
//     this._age = age;
//   }

//   get age() {
//     console.log(`${this._name}-у уже ${this._age} года`);
//     return this._age;
//   }

//   set age(value) {
//     if (value < 0) throw new Error("Отрицательное значение возраста");
//     this._age = value;
//   }

//   get name() {
//     return this._name;
//   }
// }

// let nick = new User({ name: "Nick", age: 22 });
// nick.age = 34;
// console.log(nick.name, nick.age);
// // class CoffeeMachine {
//   // ...

//   constructor(power) {
//     this._power = power;
//   }

//   get power() {
//     return this._power;
//   }
// }

// // создаём кофеварку
// let coffeeMachine = new CoffeeMachine(100);

// console.log(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
// class CoffeeMachine {
//   #waterLimit = 200;

//   #checkWater(value) {
//     if (value < 0) throw new Error("Отрицательный уровень воды");
//     if (value > this.#waterLimit) throw new Error("Слишком много воды");
//   }
// }

// let coffeeMachine = new CoffeeMachine();

// let json = '{ "age": 30, "ntme": "Misha" }';
// try {
//   console.log(JSON.parse(json));
//   let user = JSON.parse(json);
//   if (!user.name) throw new SyntaxError("Отсутствует user.name в json файле");
// } catch (err) {
//   if (err.name === "SyntaxError") {
//     console.log("JSON errow " + err.message);
//   } else {
//     throw err;
//   }
// }

// function fib(n) {
//   let c;
//   for (let a = 1, b = 1; n > 2; n--) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return c;
// }

// function time(func) {
//   return function() {
//     let start = new Date();
//     let result = func.call(this, ...arguments);
//     console.log("Время выполнения: " + (Date.now() - start).toFixed(2) + " ms");
//     return result;
//   };
// }

// fib = time(fib);

// console.log(fib(31122345));

// class FormatError extends SyntaxError {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// let err = new FormatError("ошибка форматирования");

// console.log(err.message); // ошибка форматирования
// console.log(err.name); // FormatError
// console.log(err.stack); // stack

// console.log(err instanceof FormatError); // true
// console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// class PropertyRequiredError extends ValidationError {
//   constructor(property) {
//     super("нет свойства " + property);
//   }
// }

// class ReadError extends Error {
//   constructor(message, cause) {
//     super(message);
//     this.cause = cause;
//     this.name = this.constructor.name;
//   }
// }

// function readJSON(json) {
//   let user;

//   try {
//     user = JSON.parse(json);
//   } catch (err) {
//     if (err instanceof SyntaxError) {
//       throw new ReadError("Ошибка чтения файла", err);
//     } else {
//       throw err;
//     }
//   }

//   if (!user.name) {
//     throw new PropertyRequiredError("name");
//   }

//   if (!user.age) {
//     throw new PropertyRequiredError("age");
//   }

//   return user;
// }

// try {
//   let json = readJSON('{ "name": "Nikita", "age" : "20" }');
// } catch (err) {
//   if (err instanceof PropertyRequiredError) {
//     console.log("Ошибка " + err.name + " " + err.message);
//   } else {
//     throw err;
//   }
// }

// function paint() {
//   showCircle(200, 200, 100).then(div => {
//     div.classList.add("message-ball");
//     div.append("Hello, world!");
//   });
// }

// function showCircle(cx, cy, radius) {
//   return new Promise(res => {
//     let div = document.createElement("div");
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + "px";
//     div.style.top = cy + "px";
//     div.className = "circle";
//     document.body.append(div);

//     setTimeout(() => {
//       div.style.width = radius * 2 + "px";
//       div.style.height = radius * 2 + "px";

//       div.addEventListener("transitionend", function handler() {
//         div.removeEventListener("transitionend", handler);
//         res(div);
//       });
//     }, 0);
//   });
// }

// function delay(ms) {
//   return new Promise(function(res, rej) {
//     setTimeout(res, ms);
//   });
// }

// delay(3000).then(() => console.log("выполнилось через 3 секунды"));

// let table = document.createElement("table");
// table.setAttribute("border", "2");

// document.body.appendChild(table);
// for (let i = 0; i <= 4; i++) {
//   let tr = document.createElement("tr");
//   for (let j = 0; j <= 4; j++) {
//     let td = document.createElement("td");
//     td.append(`${i + 1}:${j + 1}`);
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }

// let i = 0;
// for (let row of table.rows) {
//   row.cells[i].style.background = "red";
//   i++;
// }

//1
// console.log("=================================");
// console.log(document.getElementById("age-table"));
// console.log(document.querySelector("#age-table"));
// let table = document.querySelector("#age-table");

// //2
// console.log("=================================");
// console.log(document.querySelector("#age-table").querySelectorAll("label"));

// //3
// console.log("=================================");
// console.log(table.querySelector("td:first-child"));

// //4
// console.log("=================================");
// console.log(document.querySelector("form[name='search']"));

// //5
// console.log("=================================");
// console.log(
//   (document
//     .querySelector("form[name='search']")
//     .querySelector("input:first-child").style.background = "red")
// );
// //6
// console.log("=================================");
// console.log(
//   (document
//     .querySelector("form[name='search']")
//     .querySelector("input:last-child").style.background = "green")
// );

let list = `
  <ul id="list">
    <li>1</li>
    <li>2</li>
    <li>
      <ul>
        <li>3.1</li>
        <li>3.2</li>
        <li>3.3</li>
      </ul>
    </li>
    <li>4</li>
  </ul>
`;
document.body.innerHTML += list;

function countChildrens(elem) {}

list = document.querySelector("#list");
console.log(countChildrens(list));
