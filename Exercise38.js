"use strict";
/* Exercise 38

City Names:

Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
function city_country(city, country) {
    console.log(`${city}, ${country}`);
}
;
city_country("Lahore", "Pakistan");
// 1st city-country
city_country("Tokyo", "Japan");
//2nd city-country
city_country("Makkah", "Saudi Arabia");
//3rd city-country
city_country("Mumbai", "India");
