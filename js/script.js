const time = 25

if (time < 0 || time > 24) {
   console.log('Wrong Value of Time')
} else if (time <= 11) {
   console.log('Good Morning')
} else if (time > 23) {
   console.log('Good Night')
} else if (time > 15) {
   console.log('Good Evening')
} else {
   console.log('Good Afternoon')
}

// тернарний оператор

time > 12 ? console.log('condition is true') : console.log('condition is false')

let greeting = time > 12 ? 'Good afternoon' : 'Good morning'
console.log(greeting + ` ${greeting} 12`)

// DRY
let userName = 'John'
sayHi()
function sayHi(userName) {
   console.log(`${userName}, ${greeting}`)
}
function sayBy(userName) {
   console.log(`By, ${userName}`)
   return userName
}
console.log('__________________________')

function doSome(sfun) {
   nanes = 'Dark'
   nabes = 'Light'
   let some = sfun(nanes)
   console.log(some)
   sfun(nabes)
   console.log(some)
}

doSome(sayHi)
doSome(sayBy); // без єтой точки с запятой самовіізвающаяся функция відает ошибку

// ===========IIFE Самовізівающаяся (анонимная) функция=========  из ES 5
(function dirty() {
   console.log('data')
})();

const say2Hi = (names2) => {
   console.log(`Hi, ${names2}, JS`)
}
say2Hi('vfhr')

const say3Hi = (a) => a * 2
const parametr = say3Hi(12)
console.log(parametr)

console.log(say3Hi(7))

const summ = (a, b) => a + b;
console.log(summ(10, 20))

//=====================7. Arrays ==================

const arr1 = ['Audi', 'BMW', 'Porsche'];
console.log(arr1)
console.log(arr1.length)

arr1.push('Nissan')
console.log(arr1)

// arr1.splice(1, 2)
// console.log(arr1)

//==================Loops========================
//     for

console.log('Start')
for (let i = 0; i < 10; i++) { console.log(i) }
console.log('Finish')

for (let i = 0; i < arr1.length; i++) {
   console.log(arr1[i])
}

//      for   of
console.log('------------------------------')
for (let item of arr1) console.log(item)

//    11.      forEach

arr1.forEach(function (item, index) {
   console.log(`${index} ${item}`)
})

arr1.forEach((brand, i, arr2) => console.log(`${i} ${brand}     from [${arr2}]`));

// 12. Обїекти======================

const user = {
   userName: 'Mark',
   age: 30,
   isMarried: false,
   profession: 'designer'
}
console.log(user)

console.log(user.userName)
console.log(user['age'])

user.city = 'New York';
console.log(user);
delete user.age;
console.log(user);

// 13.Медоти обїектов===============
const person = {
   userName: 'Mark',
   age: 32,
   isMarried: true,
   sayNo: function () {
      console.log('No!');
   }
};
person.sayNo()

//==  14. this==================

person.sayHello = function (ima) {
   console.log(`Hello, ${ima}! My mane is ${this.userName}.`);
}

person.sayHello('Jon')
console.log(person)

//== 15.  for     in    (для objects)  обходит неитерируеміе обїекті и созвращает ключи
console.log(15);
for (let key in person) {
   console.log(key);
};

// ===17. Класси. Конструктори обїектов=================

class Person {
   constructor(userName, age, isMarried) {
      this.userName = userName;
      this.age = age;
      this.isMarried = isMarried;
   }
   sayHi(name) {
      console.log(`Привет, ${name}! Меня зовут ${this.userName}.`);
   }
}
const person1 = new Person('Eisa', 31, false);
const person2 = new Person('Ahmet', 34, true);

console.log(person1)
console.log(person2)

person2.sayHi('Кен')