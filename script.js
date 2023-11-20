'use strict';

///////////////////////////////////////////////////////////
// Destructuring Arrays
///////////////////////////////////////////////////////////

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

// And of course this looks like an array, but it's really not.
// It's just the destructuring assignment.
// So whenever JavaScript sees this here on the left side
// of the equal sign, it knows that it should do destructuring.
// Now, when you do this just don't forget
// to actually also declare the variables using const.

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

// The original array is of course not affected.
// Okay so we are not destroying here the array
// we are only destructuring so we are unpacking it

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Switching variables using Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieved 2 return values from a function
// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//Nested Destructuring
// but what if we actually wanted
// all the individual values?
// Well then we would essentially
// have to do destructuring inside of destructuring.
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
// And now to finish there is just another feature
// of destructuring that I want to show you.
// So we can also set default values
// for the variables when we are extracting them.
// And that's gonna be very useful in the case
// that we don't know the length of the array,
// and this can sometimes happen in real world applications,
// as you will see later.
// So if we have an array that is shorter than we might think,
// then we might try to unpack the array
// in positions that don't even exist.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
// And as I said, this can sometimes be useful.
// For example, when we get data from an API.
