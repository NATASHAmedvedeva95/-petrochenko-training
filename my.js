"use strict";



let numberOfFilms;

// isNaN(numberOfFilms) - проверяет введённый ответ на число, если не число, то вернётся правда
// функция старт не позволит пользователю вводить вместо ответа пустую строку или не число или просто нажать кнопку ок или отмена

function start (){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}


start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


const firstQuestion = prompt('Один из последних просмотренных фильмов?');

const secondQuestion = prompt('На сколько оцените его?');

personalMovieDB.movies[firstQuestion]=secondQuestion;
 
console.log(personalMovieDB);




function rememberMyFilms () {
    for (let i = 0; i < 1; i++){
        const firstQuestion = prompt('Один из последних просмотренных фильмов?'),
              secondQuestion = prompt('На сколько оцените его?');
        if (firstQuestion != '' && firstQuestion != null && firstQuestion.length < 50 && secondQuestion != '' && secondQuestion != null &&secondQuestion.length < 50){
               personalMovieDB.movies[firstQuestion]=secondQuestion;
               console.log('done');
        }else {
                i--;
                console.log('error');
        }
    }
}

rememberMyFilms ();




function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    }else if (personalMovieDB.count >= 30){
        console.log('Вы киноман');
    }else{
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();



function showMyDB (hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


// в данной функции пользователю трижды задаётся вопрос, цикл начинается с единицы, так как пользователь не знает об индексах, вопрос задаётся в бэктиках, что в него сразу вставился ответ от пользователя, далее единиица отнимается, чтобы цикл начинался с 0 и совпадал с ответом, есил данный минус 1 убрать, то в консоли в ответах появится 4 ячейка, которой быть не должно

function writeYourGenre () {
    for (let i = 1; i <= 3; i++){
        let question = prompt(`Ваш любимый жанр под номером ${i}`);
           personalMovieDB.genres [i-1] = question;
    }
}
writeYourGenre();

// цикл while (4задание  2 урока)
// let i = 0;
// while(i < 1){
//     const firstQuestion = prompt('Один из последних просмотренных фильмов?'),
//     secondQuestion = prompt('На сколько оцените его?');
// if (firstQuestion != '' && firstQuestion != null && firstQuestion.length < 50 && secondQuestion != '' && secondQuestion != null &&secondQuestion.length < 50){
//      i++;
//      personalMovieDB.movies[firstQuestion]=secondQuestion;
//      console.log('done');
// }else {
//       i--;
//       console.log('error');
// }
// }

// цикл do while (4задание  2 урока)
// do {
//     const firstQuestion = prompt('Один из последних просмотренных фильмов?'),
//             secondQuestion = prompt('На сколько оцените его?');
//       if (firstQuestion != '' && firstQuestion != null && firstQuestion.length < 50 && secondQuestion != '' && secondQuestion != null &&secondQuestion.length < 50){
//              personalMovieDB.movies[firstQuestion]=secondQuestion;
//              console.log('done');
//       }else {
//               i--;
//               console.log('error');
//       }
// }
// while(i < 1);



