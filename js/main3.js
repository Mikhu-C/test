//==============  object Event =========================

const list = document.querySelector('#list');

list.addEventListener('click', function (event) {
   console.log(this);
   console.log(event);
})