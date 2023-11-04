//========= work with CSS classes ====================
/*
element.classList.add()-----
.add()---------------------добавляет css класс
.remove()------------------удаляет css класс
.toggle()------------------переключает (добавляет, если не біло и убирает, если біл)
.contains()----------------возвращает true или false в зависимости от того есть ли такой класс у тега
*/


const heading = document.querySelector('h2');
heading.classList.add('green');
heading.classList.toggle('green');

res = heading.classList.contains('red');

if (res) {
   console.log('true')
} else {
   console.log('false')
}
//============= работа с атрибутами ======================

// методи, которие помогают работать с атрибутами
/*
getAttribute(attrName)-----------возвращает значение указанного атрибута
setAttribute(name, value)--------добавляет указанній атрибут и его значение к єлементу
hasAttribute(attrName)-----------возвращает true при наличии у єлемента указанного атрибута
removeAttribute(attrName)--------удаляет указаанній атрибут

toggleAttribute(name, force)-----добавляет/удаляет атрибут при отсутствии/наличие
hasAttributes()------------------возвращает true, если у єлемента имеются какие-либо атрибути
getAttributeNames()--------------возвращает названия атритубов єлемента

*/
const img = document.querySelector('#logo');
const srcValue = img.getAttribute('src');
console.log(srcValue);
img.setAttribute('src', './img/cat-48-1280.jpg')
img.setAttribute('height', '350')

img.src = './img/cat-49-1280.jpg';

const button = document.querySelector('#button');
button.setAttribute('value', 'Отправить');
button.value = 'Текст для кнопки';

//====================== Работа с прослушкой собития

// const button = document.querySelector('#button');
// const img = document.querySelector('#logo')

button.value = 'удалить'

// button.addEventListener('click', function(){
//    console.log('Click!');
//    img.remove();
// })

// const button0 = document.querySelector('button');
// console.log(button0)

// button0.value = 'поставить'

button.onclick = function () {
   console.log('Click!');
   img.remove();
}

const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

inputText.addEventListener('input', function () {
   // console.log('Input!');
   console.log(inputText.value);
   textBlock.innerText = inputText.value;
})

// inputText.addEventListener('input', inputHandler);

// function inputHandler() {
//    console.log(inputText.value);
//    textBlock.innerText = inputText.value;
// }