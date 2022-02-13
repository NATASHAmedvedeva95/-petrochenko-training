"use strict";

// урок 1 задание 1

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
// задание 2

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
// задание 3

const firstQuestion = prompt('Один из последних просмотренных фильмов?');

const secondQuestion = prompt('На сколько оцените его?');

personalMovieDB.movies[firstQuestion]=secondQuestion;
 
console.log(personalMovieDB);


// урок 2

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


if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
}else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
}else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
}else{
    console.log('Произошла ошибка');
}


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
