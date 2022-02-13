"use strict";

// задание 1

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