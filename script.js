const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';
btns[1].style.borderRadius = '100%';

// задаём стили при помощи css-текста для нескольких св-в сразу
box.style.cssText = 'background-color: blue; width: 500px'

// задаём св- ва нескольким элементам при помощи цикла
// данный способ используют редко

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

// метод forEach. каждое сердце здесь прописывается как item

hearts.forEach(item =>{
    item.style.backgroundColor = 'blue';
});


// создание элементов прямо в коде при помощи метода documentCreateElement, 
// во внтурь данного метода в кавычках помещается название этого элемента. у нас это div
// используя эту команду элемент виден только в js

const div = document.createElement('div');


// стилизуем элемент при помощи classList. здесь мы добавляем класс к нашему элементу, который прописан в Css

div.classList.add('black');

// добавляем данный элемент на страницу при помощи DOM, суть добавления в том, что элемент нам нужно добавить относитьельно другого элемента на странице, в нашем случае мы выбрали body и элемент поместится в конец body

document.body.append(div);

// иногда для таких целей используют метод при помощи обращения к querySelector, который в свою очередь отражает только один элемент на странице, в нашем случае это подойдёт, так как на странице у нас только один wrapper

 wrapper.append(div);


// есть метод, при помощи которого элемент добавляют в начало страницы prepend

 wrapper.prepend(div);

// также есть методы before and after, которые вставляют до или после како-то элемента. в начале говорим, перед каким элементом ставим,  в before помещаем элемент который ставим перед 2 сердечком

hearts[1].before(div);


// метод для удаления элементов

circles[0].remove();

// метод для замены одного элемента другим. в начале указываем, какой элемент хотим заменить
hearts[0].replaceWith(circles[0]);

// редактирование элемента div 
div.innerHTML = '<h1>Hello world</h1>';

// 2-ой способ только с текстом без тегов

 div.textContent = 'привет';

// способ добавления элементов в разные места страницы

div.insertAdjacentHTML('afterbegin', '<h6>help</h6>');
