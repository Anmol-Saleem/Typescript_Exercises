"use strict";
// project no.1
//Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
let personname = "anmol saleem";
let lowercasename = personname.toLowerCase();
console.log(lowercasename);
let uppercasename = personname.toUpperCase();
console.log(uppercasename);
let titleCaseName = personname
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
console.log(titleCaseName);
