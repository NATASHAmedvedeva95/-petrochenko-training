"use strict";



// isNaN(numberOfFilms) - проверяет введённый ответ на число, если не число, то вернётся правда
// функция старт не позволит пользователю вводить вместо ответа пустую строку или не число или просто нажать кнопку ок или отмена



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function  (){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function (){
        for (let i = 0; i < 1; i++){
            const firstQuestion = prompt('Один из последних просмотренных фильмов?'),
                  secondQuestion = prompt('На сколько оцените его?');
            if (firstQuestion != '' && firstQuestion != null && firstQuestion.length < 50 && secondQuestion != '' && secondQuestion != null && secondQuestion.length < 50) {
                   personalMovieDB.movies[firstQuestion]=secondQuestion;
                   console.log('done');
            }else {
                    i--;
                    console.log('error');
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        }else if (personalMovieDB.count >= 30){
            console.log('Вы киноман');
        }else{
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenre: function  () {
        for (let i = 1; i <= 3; i++){
            let question = prompt(`Ваш любимый жанр под номером ${i}`);
        if (question != null && question != ''){
            personalMovieDB.genres [i - 1] = question;
        }else{
            console.log('Вы ввели некорректыне данные');
            i--;
            }
        }
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
    },
    toggleVisibleMyDB: function (){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};














