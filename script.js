'use strict';

///////////////////////////////////////////////////////////
// Destructuring Arrays
///////////////////////////////////////////////////////////

// // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // openingHours: {
//   //   thu: {
//   //     open: 12,
//   //     close: 22,
//   //   },
//   //   fri: {
//   //     open: 11,
//   //     close: 23,
//   //   },
//   //   sat: {
//   //     open: 0, // Open 24 hours
//   //     close: 24,
//   //   },
//   // },
// };

// // And of course this looks like an array, but it's really not.
// // It's just the destructuring assignment.
// // So whenever JavaScript sees this here on the left side
// // of the equal sign, it knows that it should do destructuring.
// // Now, when you do this just don't forget
// // to actually also declare the variables using const.

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// // The original array is of course not affected.
// // Okay so we are not destroying here the array
// // we are only destructuring so we are unpacking it

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //Switching variables using Destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Recieved 2 return values from a function
// // console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// //Nested Destructuring
// // but what if we actually wanted
// // all the individual values?
// // Well then we would essentially
// // have to do destructuring inside of destructuring.
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// // And now to finish there is just another feature
// // of destructuring that I want to show you.
// // So we can also set default values
// // for the variables when we are extracting them.
// // And that's gonna be very useful in the case
// // that we don't know the length of the array,
// // and this can sometimes happen in real world applications,
// // as you will see later.
// // So if we have an array that is shorter than we might think,
// // then we might try to unpack the array
// // in positions that don't even exist.
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
// // And as I said, this can sometimes be useful.
// // For example, when we get data from an API.

////////////////////////////////////////////////////////////////////////////
// Destructuring Objects
////////////////////////////////////////////////////////////////////////////

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  //   Because now, here in the function arguments
  // we can actually do destructuring right away.

  //   We did not pass four arguments.
  // It's really just one argument, one object.
  // Then here in the function,
  // as we receive that object, we do immediately destructuring.
  // And so that's why these names here
  // need to be exactly the names that we have down here
  // in the object.
  // But what's great about this,
  // is that here the properties in the index
  // don't have to match the order
  // in which we do destructuring up here.
  // And so that makes it really easy
  // for the user of this function
  // to specify basically the arguments

  //   which is these default values.
  // So we can now use this to basically set defaults here
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// But then the rest will be taken from the default values
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

// So to destructure objects we use the curly braces.
// Now, since in an object,
// the order of elements does not matter,
// we don't need to manually skip elements
// like we did in an array.

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// this is an extremely useful addition to the language.
// Especially when we deal with the result of an API call,
// which basically means to get data
// from another web application,
// like weather data or data about movies
// or something like that.
// And this data
// usually comes in the form of objects basically.
// And then destructuring is really a lifesaver.
// It allows us to write a lot less code.
// So this is really used in modern applications.

// But now what if we wanted the variable names to be different
// from the property names?
// Well, we can do it like this.
// that these three are actually the exact same name,
// but we were able to give them new variable names.
// Which again that's gonna be immensely helpful
// when dealing with third-party data.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// It can be really useful to have default values
// for the case that we're trying to read a property
// that does not exist on the object.
// So usually then we get an undefined.

// So starterMenu, and we want to call it just starters.
// And we also want to give it a default value
// in case it doesn't exist.
// So in this case, just an empty array.
// Now, in this case, it actually does exist.
// So starterMenu does exist.
// And so therefore this default value will not apply,
// but it should apply to menu.
// Because as I was just saying,
// there is no property on the restaurant object called menu.

//Defaulth values
// And without the default value, we would then get undefined,
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Now we cannot say const like a, b,
// because a and b are already declared up here, right?
// We can also not do let,
// because again, that would create new variables
// and we already have them there, okay?
//const {a,b }
//let {a,b }

// But now as we save this, watch what happens.
// And so we get a syntax error.
// And the reason for that
// is that when we start a line with a curly brace like this,
// then JavaScript expects a code block, all right?
// And since we cannot assign anything to a code block,
// like we did here with the equal sign,
// then we get this error
// unexpected token with the equal there.
// { a, b } = obj;

// So to solve this here,
// the trick is to wrap all of this into a parenthesis.
({ a, b } = obj);
console.log(a, b);

//Nested Objects
// const { fri } = openingHours;
// console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
