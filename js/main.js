//const header = document.querySelector('h1')
//console.log(header)
document.querySelector('h1').classList.add('red')

const header = document.querySelector('h1')
console.log(header);

const headers = document.querySelectorAll('h2');
console.log(headers);
// headers.classList.add('green');
for (let headier of headers) {
   console.log(headier);
   headier.classList.add('green')

}
const liList = document.querySelector('li');
liList.classList.add('brown')

// также есть следующие методи OLD from ES5

document.getElementsClassName()  // вібор коллекции по css классу
document.getElementsByTagName()  // вібор коллекции по Тегу
document.getElementById()  // вібор одного єлемента по ID