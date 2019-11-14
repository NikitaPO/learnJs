'use strict';
console.clear();

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

let user = new Object();

user.name = 'John';
user.surname = 'Smith';
user.name = "Pete";
delete user.name;

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

function multiplyNumeric(obj){
  for(let key in obj) {
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

     for(let key in this) {
       sum += this[key];
     }
   },

   mul() {
     let multiply = 1;

     for(let key in this) {
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
   showStep: function() { // показывает текущую ступеньку
     console.log( this.step );
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

 function Calculator() {
   this.read = (a, b) => {
     this.a = +a;
     this.b = +b;
   };

   this.sum = () => {
     return this.a + this.b;
   };

   this.mul = () => {
     return this.a * this.b;
   };
 }

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
   let a = +prompt('Enter first number: ','');
   let b = +prompt('Enter second number: ','');
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
     str = str.slice(0, maxLength-1) + '…';
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

let styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

const indexOfCenterElement = Math.ceil(styles.length / 2) - 1;
styles[indexOfCenterElement] = 'Классика';
console.log(styles);

console.log(styles.shift(0));
console.log(styles);

styles.unshift('Рэп', 'Рэгги')
console.log(styles);
