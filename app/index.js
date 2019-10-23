"use strict";

/* Преобразование типов 2.6
"" + 1 + 0 //string 10
"" - 1 + 0 //-1 num
true + false //1 num
6 / "3" //2 num
"2" * "3"//6 num
4 + 5 + "px" //9px string
"$" + 4 + 5//$45 string
"4" - 2//2 num
"4px" - 2//NaN
7 / 0 //Infinity
"  -9  " + 5 //" -9 5"
"  -9  " - 5 // -14 num
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2
*/

//2.9
/**
Создайте страницу, которая спрашивает имя у пользователя и выводит его.
 */

function printName() {
  const name = prompt('What is your name?', '');
  alert('Your name is ' + name);
  return name;
}

//2.10
/**
 *Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
 */

function askJSQuestion() {
  const officialName = prompt('What is official name of JavaScript?', '');

  if (officialName.toLowerCase() === 'ecmascript') {
    alert('Correctly!')
  } else {
    alert('You don\'t know? It\'s "ECMAScript"!');
  }
}

/**
 * Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
 */

function printNumberSing() {
  const num = +prompt('Enter the number: ', '');
  if (num > 0) {
    alert(1);
  } else if (num === 0) {
    alert(0);
  } else {
    alert(-1);
  }
}

/**
 * Перепишите if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
 */

function isItEnough(a, b) {
  const result = (a + b < 4) ? 'Few!' : 'Many!';;
  return result;
}

/**
 * Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
 */

function printHello(login) {
  let message;

  (login === 'Worker') ? message = 'Hello':
    (login === 'Boss') ? message = 'How do you do?' :
    (login === '') ? message = 'No login' :
    message = '';

  return message;
}

//2.11
/**
 * Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90.
 */

function isItInRange(number, firstInRange = 14, lastInRange = 90) {
  let isInRange = false;
  if (number >= firstInRange && number <= lastInRange) {
    isInRange = true;
  }
  return isInRange;
}

/**
 * Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
 */

function isItNotInRange(number, firstInRange = 14, lastInRange = 90) {
  let isInRange = false;
  if (!(number >= firstInRange && number <= lastInRange)) {
    isInRange = true;
  }
  return isInRange;
}

/**
 * Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
 */

function autorization() {
  const login = prompt('Who\'s there?', '');

  if (login === null) {
    return 'Cancelled';
  } else if (login === 'admin') {
    const password = prompt('Enter password: ', '');

    if (password === null) {
      return 'Cancelled';
    } else if (password === 'iamtheboss') {
      alert('Hello!');
    } else {
      alert('Wrong password!');
    }
  } else {
    alert('I don\'t know you');
  }

}


//2.12
/**
 * При помощи цикла for выведите чётные числа от 2 до 10.
 */

function printEvenNumbersFor() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

/**
 * Перепишите код, заменив цикл for на while, без изменения поведения цикла.
 */

function printEvenNumbersWhile() {
  let i = 2;
  while (i <= 10) {
    if (i % 2 == 0) {
      console.log(i);
    }
    i++;
  }
}

/**
 * Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
 */

function doWhileBiggerThan100() {
  let num;
  do {
    num = +prompt('Enter number bigger than 100:', '');
  } while (num <= 100 && num !== null);
}

/**
 * Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.
 */

function printPrimeNumbers(firstInterval, secondInterval) {
  for (let i = firstInterval; i <= secondInterval; i++) {
    if (!isDivide(i)) {
      console.log(i);
    }
  }
}

function isDivide(num) {
  if (num = 1) return true;
  for (let divider = num - 1; divider > 1; divider--){
    if (num == divider) continue;
    if (num % divider == 0) return true;
  }
  return false;
}
