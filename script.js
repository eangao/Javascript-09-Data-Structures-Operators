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

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // orderDelivery: function (obj) {
//   //   console.log(obj);
//   // },

//   //   Because now, here in the function arguments
//   // we can actually do destructuring right away.

//   //   We did not pass four arguments.
//   // It's really just one argument, one object.
//   // Then here in the function,
//   // as we receive that object, we do immediately destructuring.
//   // And so that's why these names here
//   // need to be exactly the names that we have down here
//   // in the object.
//   // But what's great about this,
//   // is that here the properties in the index
//   // don't have to match the order
//   // in which we do destructuring up here.
//   // And so that makes it really easy
//   // for the user of this function
//   // to specify basically the arguments

//   //   which is these default values.
//   // So we can now use this to basically set defaults here
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // But then the rest will be taken from the default values
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });

// // So to destructure objects we use the curly braces.
// // Now, since in an object,
// // the order of elements does not matter,
// // we don't need to manually skip elements
// // like we did in an array.

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // this is an extremely useful addition to the language.
// // Especially when we deal with the result of an API call,
// // which basically means to get data
// // from another web application,
// // like weather data or data about movies
// // or something like that.
// // And this data
// // usually comes in the form of objects basically.
// // And then destructuring is really a lifesaver.
// // It allows us to write a lot less code.
// // So this is really used in modern applications.

// // But now what if we wanted the variable names to be different
// // from the property names?
// // Well, we can do it like this.
// // that these three are actually the exact same name,
// // but we were able to give them new variable names.
// // Which again that's gonna be immensely helpful
// // when dealing with third-party data.
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // It can be really useful to have default values
// // for the case that we're trying to read a property
// // that does not exist on the object.
// // So usually then we get an undefined.

// // So starterMenu, and we want to call it just starters.
// // And we also want to give it a default value
// // in case it doesn't exist.
// // So in this case, just an empty array.
// // Now, in this case, it actually does exist.
// // So starterMenu does exist.
// // And so therefore this default value will not apply,
// // but it should apply to menu.
// // Because as I was just saying,
// // there is no property on the restaurant object called menu.

// //Defaulth values
// // And without the default value, we would then get undefined,
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // Now we cannot say const like a, b,
// // because a and b are already declared up here, right?
// // We can also not do let,
// // because again, that would create new variables
// // and we already have them there, okay?
// //const {a,b }
// //let {a,b }

// // But now as we save this, watch what happens.
// // And so we get a syntax error.
// // And the reason for that
// // is that when we start a line with a curly brace like this,
// // then JavaScript expects a code block, all right?
// // And since we cannot assign anything to a code block,
// // like we did here with the equal sign,
// // then we get this error
// // unexpected token with the equal there.
// // { a, b } = obj;

// // So to solve this here,
// // the trick is to wrap all of this into a parenthesis.
// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects
// // const { fri } = openingHours;
// // console.log(fri);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/////////////////////////////////////////////////////////////////////////////
// The Spread Operator (...)
/////////////////////////////////////////////////////////////////////////////

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
// };

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // So what the spread operator does
// // is to basically take all the values
// // out of this arr. array,
// // and then write them individually
// // as if we wrote seven, eight, nine here manually.
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // whenever we write an array literal
// // like we did up here.
// // So that's the first situation in which
// // it's very useful to expand an array.
// // And the second situation is
// // when we pass arguments into functions.

// // But if we use the spread operator
// // to expand the new array,
// // then see what happens then.
// // So now it logged the individual elements of the array.
// console.log(...newArr);

// // So now it logged the individual elements of the array.
// // So this would be the same as writing
// // one, two, seven, eight, nine individually.
// // So once again, whenever we need the elements
// // of an array individually,
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Now you might have noticed that the spread operator
// // is actually a bit similar to destructuring,
// // because it also helps us get elements out of arrays.
// // Now, the big difference is that the spread operator
// // takes all the elements from the array
// // and it also doesn't create new variables.
// // And as a consequence, we can only use it
// // in places where we would otherwise
// // write values separated by commas.

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // All right, so I told you that the spread operator
// // works on arrays, but that's not entirely true,
// // because actually, the spread operator
// // works on all so-called iterables.

// // but for now, just know that iterables
// // are things like all arrays, strings, maps, or sets,
// // but not objects.

// ////Iterables: arrays, strings maps, sets. Not objects
// const str = 'Elmar';
// const letters = [...str, ' ', 'A.'];
// console.log(letters);
// console.log(...str);

// // So here, this is not gonna work.
// // And that's because this is not a place
// // that expects multiple values separated by a comma.
// // So you see unexpected token, all right?
// // So again, multiple values separated by a comma
// // are usually only expected
// // when we pass arguments into a function,
// // or when we build a new array.
// // So take note of that,
// //////////////////////////////////
// // console.log(`${...arr} Angao`);

// // Let's now actually write our own function
// // that accepts multiple arguments
// // and then use the spread operator
// // to actually pass those arguments.

// //Real-world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 2?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// //best solution and moern solution
// // more modern ES6 syntax here.
// restaurant.orderPasta(...ingredients);

// // since ES 2018, the spread operator
// // actually also works on objects,
// // even though objects are not iterables.

// //Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restuarantCopy = { ...restaurant };
// restuarantCopy.name = 'Ristorante Roma';
// console.log(restuarantCopy.name);
// console.log(restaurant.name);

////////////////////////////////////////////////////////////////////////////
// Rest Pattern and Parameters
////////////////////////////////////////////////////////////////////////////

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredients, ...otherIngrdients) {
//     console.log(mainIngredients);
//     console.log(otherIngrdients);
//   },
// };

// // Moving on let's now talk about the rest pattern
// // and also rest parameters
// // and the rest pattern looks exactly like the spread operator.
// // So it has the same syntax with the three dots
// // but it actually does the opposite of the spread operator.

// // But let me explain, so remember
// // that we used the spread operator to build new arrays
// // or to pass multiple values into a function.
// // So those are the two use cases of the spread operator
// // and in both cases, we use the spread operator
// // to expand an array into individual elements.
// // Now, the rest pattern uses the exact same syntax
// // however, to collect multiple elements
// // and condense them into an array.
// // so that's really the opposite of spread
// // The spread operator is to unpack an array
// // while rest is to pack elements into an array

// //1 Destructuring

// //SPREAD, becuase on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// //REST, becuase on LEFT side of =
// const [a, b, ...others] = [2, 3, 4, 5];
// console.log(a, b, others);
// // and so it's called rest because it will take
// // the rest of the elements.
// // So the remaining elements of the array
// // and then put them into a new array
// // and in this case, we call this array others.
// // So as I said in the beginning,
// // the rest pattern basically collects
// // the elements that are unused
// // in the destructuring assignment.

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);
// // and note here that the rest syntax collects
// // all the array after the last variable.
// // So in this case here risotto
// // so it does not include any skipped elements
// // so it's really just the rest of the elements
// // and yeah again, as I said,
// // it does not include any skipped elements
// // and so for that reason,
// // the rest pattern always must be the lest
// // in the destructuring assignment
// // because otherwise how will JavaScript know
// // until when it should collect the rest of the array, right?

// //Objects
// // and now let's do the same in objects
// // because it also works indeed in objects.
// // So the difference then of course,
// // is that the remaining elements will be collected
// // into a new object and not into a new array.
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2 Functions

// // and so now once again, as I said in the beginning
// // the rest syntax is taking multiple numbers
// // or multiple values and then packs them all into one array.
// // So, once more it is doing the opposite
// // of the spread operator
// // so with the spread operator we expand
// // with the rest syntax we compress
// // so here it's called rest arguments
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olive', 'spinach');
// restaurant.orderPizza('mushrooms');

// // once again the rest parameters serves to collect
// // all of the remaining basically unused parameters
// // that were not used in this parameter.
// // All right, so let's recap
// // after yet another quiet, long lecture here.
// // So, the spread and rests syntax
// // both look exactly the same
// // but they work in opposite ways
// // depending on where they are used.
// // So the spread operator is used
// // where we would otherwise write values, separated by a comma.
// // On the other hand the rest pattern is basically used
// // where we would otherwise write variable names
// // separated by commas.
// // So, again the rest pattern can be used
// // where we would write variable names, separated by commas
// // and not values separated by commas.
// // So it's a subtle distinction, but this is how you know
// // when and where to use spread and rest.

////////////////////////////////////////////////////////////////////////////
//  Short Circuiting (&& and ||)
////////////////////////////////////////////////////////////////////////////

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredients, ...otherIngrdients) {
//     console.log(mainIngredients);
//     console.log(otherIngrdients);
//   },
// };

// console.log('------- OR -----------');
// // Use ANY data type, return ANY data type, short-circuitting
// console.log(3 || 'Elmar');
// console.log('' || 'Elmar'); //'' falesy value
// console.log(true || 0);
// console.log(undefined || null);

// // in the case of the OR operator,
// // short circuiting means that if the first value
// // is a truthy value,
// // it will immediately return that first value.
// // So that's exactly what we see here
// // with the three which is a truthy value.
// // So again, if the first operand is truthy here
// // in the OR operator,
// // then the other operand will not even be evaluated.
// // So JavaScript will not even take a look at it.
// // And so that's what we mean with short circuiting.

// // And so here we see again that the result
// // of the OR operator
// // doesn't have to be a Boolean.
// // It will simply return the truthy value here.

// // Because remember, in the OR operation,
// // the result is true,
// // if at least one operand is true, right?
// // So if the first operand is already true,

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello is the truthy value

// // restaurant.numGuests = 0; falsey value
// // restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('------- AND -----------');
// // So the AND operator is only true
// // if all the operands are true.
// // And so, if the first one here is false,
// // then it means that the entire result of the AND operation
// // will already be false anyway.
// // And so there is no need to even look
// // at any of the other operands.

// console.log(0 && 'Elmar');
// console.log(7 && 'Elmar');

// console.log('Hello' && 23 && null && 'Elmar');

// // if restaurant dot order, order pizza.
// // So basically we're checking if this method exists
// // and then if it does exist,
// // we want to call it.
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// // about the AND operator,
// // we can do this in a simpler way.
// // So we can say restaurant dot order pizza,
// // and then basically if restaurant dot order pizza
// // does not exist, so it's undefined,
// // it will then short circuit the evaluation
// // and nothing else will happen.
// // And so that's essentially exactly the same
// // as this if block here is doing.
// // All right, but if it does exist.
// // So if it's a truthy value,
// // then the second part here will be evaluated.
// // And so here in this second operand,
// // we can then call the function.
// // Okay.
// // And it's perfectly fine to use this operands,
// // the second operand` here to call a function.
// // We can put anything here.
// // It doesn't just have to be a single value.
// // Now I'm not saying that you should go ahead
// // and replace all your if statements
// // with the AND or the OR operators,
// // so please definitely don't do that
// // because it's gonna make your code very hard
// // to read in the future.

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // But anyway, let's now summarize.
// // So the OR operator will return the first truthy value
// // of all the operands,
// // or simply the last value if all of them are falsy.
// // So that's what happened here, right?
// // On the other hand,
// // the AND operator will return the first falsy value
// // or the last value if all of them are truthy.
// // And as for practical applications,
// // we can use the OR operator to set default values,
// // and we can use the AND operator
// // to execute code in the second operand
// // if the first one is true.
// // So play around some more with this maybe,
// // and then let's just move on to the next video
// // where we will solve this problem that we had here
// // with this OR operator
// // and this zero.

///////////////////////////////////////////////////////////////////////
// The Nullish Coalescing Operator (??)
///////////////////////////////////////////////////////////////////////

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredients, ...otherIngrdients) {
//     console.log(mainIngredients);
//     console.log(otherIngrdients);
//   },
// };

// // restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest);

// // and assign it to guests because zero is a falsy value now,
// // and so therefore, we go to the second operand.
// // However, fortunately for us,
// // there is a very good solution to this,
// // and that's the new operator with the very weird name
// // of nullish coalescing operator.
// // It's an operator that was introduced in ES2020,

// // Nullish: null and undefined (NOT include 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/////////////////////////////////////////////////////////////////
// Logical Assignment Operators
/////////////////////////////////////////////////////////////////

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredients, ...otherIngrdients) {
//     console.log(mainIngredients);
//     console.log(otherIngrdients);
//   },
// };

// // are three new so-called logical assignment operators
// // that were introduced in ES 2021.

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// //OR Assignment Operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // Nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //and Assignment Operator

// // And so basically, what the logical
// // and assignment operator does
// // is to assign a value to a variable
// // if it is currently truthy.
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//////////////////////////////////////////////////////////////////////////
//  Data Structures, Modern Operators and Strings
//  Coding Challenge #1
//////////////////////////////////////////////////////////////////////////

//  We're building a football betting app (soccer for my American friends �)!
//  Suppose we get data from a web service about a certain game ('game' variable on
//  next page). In this challenge we're gonna work with that data.
//  Your tasks:

//  1. Create one player array for each team (variables 'players1' and
//  'players2')

//  2. The first player in any player array is the goalkeeper and the others are field
//  players. For Bayern Munich (team 1) create one variable ('gk') with the
//  goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
//  field players

//  3. Create an array 'allPlayers' containing all players of both teams (22
//  players)

//  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
//  new array ('players1Final') containing all the original team1 players plus
//  'Thiago', 'Coutinho' and 'Perisic'

//  5. Based on the game.odds object, create one variable for each odd (called
//  'team1', 'draw' and 'team2')

//  6. Write a function ('printGoals') that receives an arbitrary number of player
//  names (not an array) and prints each of them to the console, along with the
//  number of goals that were scored in total (number of player names passed in)

//  7. The team with the lower odd is more likely to win. Print to the console which
//  team is more likely to win, without using an if/else statement or the ternary
//  operator.

//  Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.

//  Then, call the function again with players from game.scored
//  GOOD LUCK �

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1 - destructuring  game.players
const [players1, players2] = game.players;
console.log(players1, players2);

//2 - destructuring - rest syntax
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3 - spread operator
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4 - adding element on array
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored `);
};

//  Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored); // using the spread operator to pass an array of arguments

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
