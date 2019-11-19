'use strict';

// module.exports.pow = pow;
// module.exports.min = min;

// console.clear();
// /* Преобразование типов 2.6
// "" + 1 + 0 //string 10
// "" - 1 + 0 //-1 num
// true + false //1 num
// 6 / "3" //2 num
// "2" * "3"//6 num
// 4 + 5 + "px" //9px string
// "$" + 4 + 5//$45 string
// "4" - 2//2 num
// "4px" - 2//NaN
// 7 / 0 //Infinity
// "  -9  " + 5 //" -9 5"
// "  -9  " - 5 // -14 num
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2
// */

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

function powSomething(x, n) {
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

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
  if (x == 0 && n == 0) return NaN;

  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

/**
 * Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
 */

// let user = new Object();
//
// user.name = 'John';
// user.surname = 'Smith';
// user.name = "Pete";
// delete user.name;

/**
 * Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
 */

function isEmpty(obj) {
  for (let key in obj) {
    if (key) return false;
  }

  return true;
}

let shedule = {};

/**
 * У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
 */

function propertiesSum(obj) {
  let sum = 0;

  for (let prop in obj) {
    sum += obj[prop];
  }

  return sum;
}

let salaries = {
  John: 2000,
  Mary: 1000,
  Marty: 3000
}

/**
 * Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
 */

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

//4.4
/**
 * Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
 */

let id = Symbol('id');

let calculator = {

  [id]: 0,

  read(...value) {
    for (let item in value) {
      this[this[id]] = item;
      this[id]++;
    }
  },

  sum() {
    let sum = 0;

    for (let key in this) {
      sum += this[key];
    }
  },

  mul() {
    let multiply = 1;

    for (let key in this) {
      if (typeof this[key] === 'number') {
        multiply *= this[key];
      }
    }

    return multiply;
  }
};

/**
 * Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1
Такой подход широко используется в библиотеках JavaScript.
 */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // показывает текущую ступеньку
    console.log(this.step);
    return this;
  }
};

//Symbol.toPrimitive Преобразование объектов в примитивы
let objectUser = {
  name: "John",
  age: 22,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == 'number' ? this.age : this.name;
  },

  toString() {
    return `his name is ${this.name}`
  }
}

//Функции конструкторы

function User(name) {
  if (!new.target) {
    return new User(name);
  }

  this.name = name;
  this.age = 22;
}

//4.6
/**
 * Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
 */

// function Calculator() {
//   this.read = (a, b) => {
//     this.a = +a;
//     this.b = +b;
//   };
//
//   this.sum = () => {
//     return this.a + this.b;
//   };
//
//   this.mul = () => {
//     return this.a * this.b;
//   };
// }

// let calc = new Calculator();
// calc.read(1,2);
// console.dir(calc);
// console.log(calc.sum());

/**
 * Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
 */

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = () => {
    this.value += +prompt('Enter value: ', '');
  }
}

let acc = new Accumulator(5);

//5.2
/**
 * Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

Запустить демо

P.S. Есть «подводный камень» при работе с типами.
 */

function printSum() {
  let a = +prompt('Enter first number: ', '');
  let b = +prompt('Enter second number: ', '');
  let sum = a + b;
  alert(sum.toFixed(4))
}

/**
 *
 Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

 Функция должна возвращать числовое значение.

 Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
 */

function readNumber() {
  let result;

  do {
    result = prompt('Enter number: ', '');
  } while (!isFinite(+result));

  if (result === null || result === '') return null;
  return +result;
}

/**
 * Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
 */

function random(min, max) {
  return (Math.random() * (max - min)) + min;
}

/**
 * Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
 */

function randomInteger(min, max) {
  min -= 0.5;
  max += 0.5;
  return Math.round(Math.random() * (max - min) + min);
}

//5.3
/**
 * Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
 */

function ucFirst(str) {
  if (!str) return str;

  str = str[0].toUpperCase() + str.slice(1);
  return str;
}

/**
 * Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
 */

function checkSpam(str) {
  str = str.toLowerCase();

  return str.includes('viagra') || str.includes('xxx');
}

/**
 * Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
 */

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    str = str.slice(0, maxLength - 1) + '…';
  }

  return str;
}

/**
 * Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true
 */

function extractCurrencyValue(str) {
  return +str.slice(1);
}

/*
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/

// let styles = ['Джаз', 'Блюз'];
// console.log(styles);
//
// styles.push('Рок-н-ролл');
// console.log(styles);
//
// const indexOfCenterElement = Math.ceil(styles.length / 2) - 1;
// styles[indexOfCenterElement] = 'Классика';
// console.log(styles);
//
// console.log(styles.shift(0));
// console.log(styles);
//
// styles.unshift('Рэп', 'Рэгги')
// console.log(styles);

/*


Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0
*/

function sumInput() {
  let num;
  let isNumFinite = true;
  let arr = [];

  do {
    num = prompt('');

    if (num === '' || num === null || !isFinite(num)) {
      const fullSum = sumOfArr(arr);
      console.log(fullSum);

      return fullSum;
    } else {
      arr.push(+num);
      console.log(arr);
    }

    console.log(num, isNumFinite);
  } while (isNumFinite)
}

function sumOfArr(arr) {
  return arr.reduce((a, b) => a + b)
}

/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

*/

// Мой *овно код
// function getMaxSubSum(arr) {
//   let maxSum = 0;
//
//   if (!isArrayPositive(arr)) return 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length; j > i; j--){
//       let sumOfSubArray = sumArray(mySliceArray(arr, i, j));
//
//       if (sumOfSubArray > maxSum) {
//         maxSum = sumOfSubArray;
//         console.log(mySliceArray(arr, i, j), sumOfSubArray);
//       }
//     }
//   }
//
//   return maxSum
// }
//
// function sumArray(arr) {
//   return arr.reduce((a, b) => a + b)
// }
//
// function isArrayPositive(arr) {
//   for (let item of arr) {
//     if (item > 0) return true;
//   }
//
//   return false;
// }
//
// function mySliceArray(arr, i, j) {
//   let newArray = [];
//
//   while (i < j) {
//     newArray.push(arr[i++]);
//   }
//
//   return newArray
// }

function getMaxSubSum(arr) {
  let maxSum = 0;
  let particalSum = 0;

  for (let item of arr) {
    particalSum += item;
    maxSum = Math.max(maxSum, particalSum);
    if (particalSum < 0) particalSum = 0;
  }

  return maxSum
}

//sort functions
//
// let array = [1, -2, 15, 2, 0, 8];
// array.sort((a, b) => a - b);
//
// or
//
// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
//
// console.log(array);


/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

*/
//
// function camelize(str) {
//   let array = str.split('');
//   let newArray = [];
//
//   for ( let i = 0; i < str.length; i++ ) {
//     if ( array[i] === '-' ) {
//       if ( i < str.length - 1 ) newArray.push((array[++i]).toUpperCase())
//     } else {
//       newArray.push(array[i])
//     }
//   }
//
//   str = newArray.join('');
//   return str;
// }

// function camelize(str) {
//   return str
//     .split('-')
//     .map( (word, index) => {
//       if (index > 0) {
//         return word[0].toUpperCase() + word.slice(1);
//       } else {
//         return word;
//       }
//     })
//     .join('');
// }

function camelize(str) {
  return str
    .split('-')
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
*/

function filterRange(arr, a, b) {
  return arr.filter(item => (item >= a && item <= b));
}

/*

Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
*/

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i--, 1);
    }
  }
}

/*
Сортировать в порядке по убыванию
важность: 4
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/
//
// let array = [1,3,2,2,1,4,3,4];
//
// array.sort((a, b) => b - a);
//
// console.log(array);


/*
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

function copySorted(arr) {
  return arr.slice().sort();
}

// let arr = ["HTML", "JavaScript", "CSS"];
//
// let sorted = copySorted(arr);
//
// console.log(arr, sorted);

/*
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };


  this.calculate = (str) => {
    let split = str.split(' ');
    let a = +split[0];
    let operator = split[1];
    let b = +split[2];
    let result = this.methods[operator](a, b);

    if (isNaN(a) || isNaN(b) || !result) {
      return NaN;
    }

    return result;
  };

  this.addMethod = (operator, fn) => {
    this.methods[operator] = fn;
  };
}

let myCalc = new Calculator();

myCalc.addMethod('**', (a, b) => a ** b);
myCalc.addMethod('/', (a, b) => a / b);
myCalc.addMethod('*', (a, b) => a * b);

// console.log(myCalc.calculate('6 * 2'));


/*
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:
*/
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = users.map((item) => item.name)
//
// console.log( names ); // Вася, Петя, Маша

/*
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

Например:
*/
//
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.map(item => {
//   return {
//     fullName : item.name + ' ' + item.surname,
//     id : item.id
//   }
// });

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
//
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Вася Пупкин

/*
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:
*/
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ]
//
// sortByAge(arr);
//
// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя
//
// console.log(arr)
//
// function sortByAge(arr) {
//   arr.sort((a, b) => (a.age - b.age))
// }

/*
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

*/

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[r]] = [arr[r], arr[i]];
  }
}
//
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '312': 0,
//   '321': 0,
// }

// let count = {
//   '0': 0,
//   '1': 0,
//   '2': 0,
//   '3': 0,
//   '4': 0,
//   '5': 0,
//   '6': 0,
// }
//
// for (let i = 0; i < 10000; i++) {
//   let randomNumber = Math.ceil((Math.random() * 5) - 1);
//   count[randomNumber]++;
// }
//
// console.log(count);

/*
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let users = [ vasya, petya, masha ];

function getAverageAge(arr) {
  return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
}

/*
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:
*/

function unique(arr) {
  let newArr = [];

  for (let item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }

  return newArr
}
//
// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"];
//
// console.log( unique(strings) );

let range = {
  from: 1,
  to: 10
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return {
          done: false,
          value: this.current++
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}
//
// for (let item of range) {
//   console.log(item);
// }
// let obj = {
//   name: 'John',
//   surname: 'Smith'
// }
//
//
// let map = new Map([
//   [1, 'hello'],
//   ['1', 'goodbye']
// ]);
//
// obj = map.fromEntries();
// console.log(obj);
//
// let mapObject = new Map(obj);
// map.set(1, 'hello')
// map.set('1', 'goodbye')

// for (let item of mapObject) {
//   console.log(item);
// }

/*
Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

Например:



alert( unique(values) ); // Hare, Krishna, :-O
P.S. Здесь мы используем строки, но значения могут быть любого типа.

P.P.S. Используйте Set для хранения уникальных значений.
*/
// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

function uniqueArray(arr) {
  return Array.from(new Set(arr));
}

// console.log(uniqueArray(values));

/*
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//   let filterArr = [];
//   let newArr = [];
//
//   for (let item of arr) {
//     let filterItem = item.toLowerCase().split('').sort().join('');
//
//     if (!filterArr.includes(filterItem)) {
//       filterArr.push(filterItem);
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let value = word.toLowerCase().split('').sort().join('');
    map.set(value, word);
  }

  return Array.from(map.values())
}

// let obj = {
//   name: 'Nick',
//   age: '23'
// }

// console.log(Object.entries(obj));

/*
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/

let salaries2 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// function sumSalaries(obj) {
//   let sum = 0;
//
//   for (let prop of Object.values(obj)) {
//     sum += prop;
//   }
//
//   return sum
// }

function sumSalaries(obj) {
  return Object.values(obj).reduce((prev, next) => prev + next, 0);
}

/*

Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/

// function count(obj) {
//   return Object.keys(obj).length;
// }
//
// let options = {
//   title: "My menu",
//   items: ["Pike", "Sardine"],
//   priceList: [100, 200],
// }
//
// function showMenu({title = "Menu", width = 200, height = 300, items = [], ...other } = {}) {
//   let menuObj = {title, width, height, items, ...other};
//   console.log(menuObj);
// }
//
// let findAllCookies = {
//   level1: {
//     hello: ['not here',
//       {
//         almost: 'cookie1'
//       }
//     ]
//   },
//
//   level2: [
//     {
//       where : [
//         {},
//         {},
//         {
//           here: [
//             [
//               {
//                 itsNotCookie: 'caakie'
//               },
//               {
//                 second:
//                 {
//                   isItCookie: 'cookie2'
//                 }
//               }
//             ]
//           ]
//         }
//       ]
//     },
//   ],
// };
//
// let {level1: {hello: [, {almost: cookie1}]}} = findAllCookies;
// let {level2: [{where: [, , {here: [[, {second: {isItCookie: cookie2}}]]}]}]} = findAllCookies;
//
// console.log(cookie1);
// console.log(cookie2);
//
//
// findAllCookies = {
//   here: {
//     that: ['cookie']
//   }
// }
//
// let {here: {that: [cookie]}} = findAllCookies;
//
// console.log(cookie); //cookie

/*

At this task you need to use destructuring to find cookie strings. For example:

```javascript
let findAllCookies = {
  here: {
    that: ['cookie']
  }
}

let {here: {that: [cookie]}} = findAllCookies;

console.log(cookie); //cookie
```
*/

/*
У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

*/

// let user1 = { name: "John", years: 30 };
//
// let {name, years: age, isAdmin = false} = user1;
//
// console.log(name, age, isAdmin);

/*
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

*/

let salaries1 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(obj) {
  let maxSalary = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(obj)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName
}

// let now = new Date();
// console.log(now.getTime(), now.getHours(), now.getMinutes(), now.getDay());

/*
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.
*/

// let date = new Date('2012-02-20T00:12:00.123-03:00');
// console.log(date);
//
// let now = new Date();
// console.log(now, now.getTimezoneOffset());

/*
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );
*/

// let date = new Date(2012, 0, 3);

function showWeekDay(date) {
  let weekDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return weekDays[date.getDay()];
}

// console.log(showWeekDay(date));

/*
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
*/


// function getLocalDay(date) {
//   let weekDays = ['7', '1', '2', '3', '4', '5', '6'];
//   return weekDays[date.getDay()]
// }

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) day = 7;

  return day
}

// console.log(getLocalDay(date));

/*
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.
*/

// let date = new Date(2016, 0, 22);

function getDateAgo(date, day) {
  let dateAgo = date;
  dateAgo.setDate(dateAgo.getDate() - day);

  return dateAgo
}

// console.log(getDateAgo(date, 2));

/*
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

// год: при вводе в Date() = getFullYear идентичны
// месяц:
// при вводе в Date() 1 - январь, 0 - декабрь
// при получении из getMonth() 0 - январь и т.д.
// день:
// При вводе в Date() 2 - первое число текущего месяца, 1 - предыдущее
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month, 0);
  return date.getDate()
}

// console.log(getLastDayOfMonth(2019, 1));

/*
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

*/



function getSecondsToday() {
  let now = new Date();
  let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

  return (now.getTime() - startOfDay.getTime()) / 1000
}
// console.log(getSecondsToday());

/*
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

// function getSecondsToTomorrow() {
//   let now = new Date();
//   return 86400 - ( now.getHours() * 3600
//   + now.getMinutes() * 60
//   + now.getSeconds() )
// }

// console.log(getSecondsToTomorrow());

/*
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/

// let date = new Date(2019, 11, 18, 0, 14);

function formatDate(date) {
  let difference = Date.now() - date.getTime();
  let mounth = date.getMonth() + 1;

  if (difference < 0) {
    difference = 500000;
  }

  if (difference < 1000) {
    return 'прямо сейчас';
  } else if (difference < 30000) {
    return `${Math.round(difference / 1000)} сек. назад`;
  } else if (difference < 300000) {
    return `${Math.round(difference / 60000)} мин. назад`;
  } else {
    return date.getDate() + '.' + mounth + '.' +
      String(date.getFullYear()).slice(-2) + ' ' +
      String(date.getHours()).padStart(2, '0') + ':' +
      String(date.getMinutes()).padStart(2, '0')
  }
}
let users = {
  0: {
    name: 'Nikita',
    age: 22
  },
  1: {
    name: 'Nastya',
    age: 20
  }
}

// let dateJSON = String(JSON.stringify(date)).slice(1, -1);
// console.log(dateJSON == "2019-12-17T21:14:00.000Z");
//
// date = new Date(dateJSON);
// console.log(date);

// let room = {
//   number: 23
// };
//
// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };
//
// room.occupiedBy = meetup; // room ссылается на meetup
//
// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   console.log(`${key}: ${value}`);
//   return (key == 'occupiedBy') ? undefined : value;
// }));

// let user = {
//   name: 'John',
//   age: 23,
//   roles: {
//     isAdmin: true,
//     isEditor: true
//   },
//   dog: {
//     name: 'Frank',
//     age: 2,
//     nickname: 'Bunny',
//     sex: 'Male'
//   }
// }

// console.log(JSON.stringify(user, null, 2));
// console.log(Date.UTC(2019, 11, 12));

/*
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

*/

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };
//
// let JSONuser = JSON.parse(JSON.stringify(user, null, 2));
//
// console.log(JSONuser);

/*
В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:


в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

// let room = {
//   number: 23
// };
//
// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };
//
// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
//
// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   // console.log(`${key}: ${value}`);
//   if (key != '' && value == meetup) {
//     return undefined
//   } else {
//     return value
//   }
// }));

