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
  const result = (a + b < 4) ? 'Few!' : 'Many!';
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
  if (num == 1) return true;
  for (let divider = num - 1; divider > 1; divider--) {
    if (num == divider) continue;
    if (num % divider == 0) return true;
  }
  return false;
}

//2.13
/**
 * Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
 */

function chooseBrowser() {
  const browser = prompt('Which browser do you use?', '');

  if (browser === 'Edge') {
    console.log('You\'ve got the Edge!');
  } else if (
    browser === 'Chrome' ||
    browser === 'Firefox' ||
    browser === 'Safari' ||
    browser === 'Opera'
  ) {
    console.log('Okay we support these browsers too');
  } else {
    console.log('We hope that this page looks ok!');
  }
}

/**
 * Перепишите код с использованием одной конструкции switch:

 const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
 */

function chooseNumber() {
  const number = +prompt('Enter a number between 0 and 3', '');

  switch (number) {
    case 0:
      console.log('You entered 0');
      break;

    case 1:
      console.log('You entered 1');
      break;

    case 2:
    case 3:
      console.log('You entered 2, or 3');
      break;
  }

}

/**
 * Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор ||
 */

function checkAge1(age) {
  return (age > 18) ? true : confirm('Did your parents let you?');
}

function checkAge2(age) {
  return (age > 18) || confirm('Did your parents let you?');
}

/**
 * Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
 */

function min(a, b) {
  return (a < b) ? +a : +b;
}

/**
 * Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
 */

function pow(x, n) {
  if (n < 1 || n % 1 != 0) {
    return false;
  }

  let sum = x;

  for (let i = 1; i < n; i++) {
    sum *= x;
  }

  return sum;
}

/**
 * function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
 */

let askSomething = (question, yes, no) => {
  (confirm(question)) ? yes(): no();
}

// askSomething(
//   'Do you agree?',
//   () => { console.log('You agreed'); },
//   () => { console.log('You disagreed'); }
// );
