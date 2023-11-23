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

// //  We're building a football betting app (soccer for my American friends �)!
// //  Suppose we get data from a web service about a certain game ('game' variable on
// //  next page). In this challenge we're gonna work with that data.
// //  Your tasks:

// //  1. Create one player array for each team (variables 'players1' and
// //  'players2')

// //  2. The first player in any player array is the goalkeeper and the others are field
// //  players. For Bayern Munich (team 1) create one variable ('gk') with the
// //  goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// //  field players

// //  3. Create an array 'allPlayers' containing all players of both teams (22
// //  players)

// //  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// //  new array ('players1Final') containing all the original team1 players plus
// //  'Thiago', 'Coutinho' and 'Perisic'

// //  5. Based on the game.odds object, create one variable for each odd (called
// //  'team1', 'draw' and 'team2')

// //  6. Write a function ('printGoals') that receives an arbitrary number of player
// //  names (not an array) and prints each of them to the console, along with the
// //  number of goals that were scored in total (number of player names passed in)

// //  7. The team with the lower odd is more likely to win. Print to the console which
// //  team is more likely to win, without using an if/else statement or the ternary
// //  operator.

// //  Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.

// //  Then, call the function again with players from game.scored
// //  GOOD LUCK �

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1 - destructuring  game.players
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2 - destructuring - rest syntax
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3 - spread operator
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4 - adding element on array
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5
// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored `);
// };

// //  Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored); // using the spread operator to pass an array of arguments

// // 7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

//////////////////////////////////////////////////////////////////
// Looping Arrays: The for-of Loop
//////////////////////////////////////////////////////////////////

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

// // Let's now talk about a new way of looping over arrays,
// // which was introduced in ES6.
// // And that's the for-of loop.

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // but it's a really nice level of obstructing
// // over the regular for loop.
// // So we can do the same thing with this one,
// // but without having to worry about
// // all the underlying details
// // such as counters and conditions.

// // What's also great about the for-of loop,
// // is that we can still use the continue and break keywords.

// // But now what if we also wanted the current index
// // and not just the current element?
// // Well, in the for-of loop,
// // it's actually a bit of a pain
// // when we need that index,
// // because originally the for-of loop
// // was really just meant to give you the current element.
// // However, you can get both
// // and you will have to do it like this.
// for (const item of menu.entries()) {
//   console.log(item);
// }

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`); // old school way
// }

// // All we have to do is to use the de-structuring assignment
// // and then create the two variables that we want.
// // So let's call it i and el for element.
// // So here we can use i and here element.
// // So that's checked out and indeed it works the same.
// // And so once again these structuring
// // made our lives a little bit easier here.
// // So it's a really great addition
// // to the JavaScript language here once again.
// // And the same is of course true
// // for the for-of loop itself,
// // which also makes it a lot easier
// // to loop over arrays.

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // what this mysterious menu dot entries actually is.
// // So menu dot entries,
// // and so here we get this weird array iterator.
// // And so that's not really helpful,
// // but we will learn about iterators
// // by the end of the course.

// // console.log(menu.entries());

// // But if we want to take a look at this,
// // we need to essentially expand this here,
// // using the spread operator
// // and then create a new array based out of that.
// // So again this is really just to take a look
// // at what menu dot entries actually is.
// // And so we see that it is basically an array,
// // which in each position contains a new array,
// // which contains the element,
// // so the element entity index number of that element
// // in the original array.

// // console.log([...menu.entries()]);

////////////////////////////////////////////////////////////////////////////
// Enhanced Object Literals
////////////////////////////////////////////////////////////////////////////

// // So this restaurant object is an object literal,
// // so you can see that because we basically wrote
// // this object literally in our code using
// // this curly braces syntax.

// //3) compute property names
// // And finally, the third enhancement is
// // that we can now actually compute property names instead
// // of having to write them out manually and literally.
// // And compute just means like calculate
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },

//   //  And this is sometimes extremely helpful
//   // to be able to do this.
//   // [`day-${2 + 4}`]: {
//   //   open: 0, // Open 24 hours
//   //   close: 24,
//   // },

//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 12 + 12,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //old
//   // openingHours: openingHours,

//   //1) enhancement
//   //ES6 enhanced object literals
//   openingHours,

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

//   //2) enhancement
//   // and so let's not check out the second one.
//   // So the second enhancement to object literals
//   // is about writing methods.
//   // So in ES6 we no longer have to create a property,
//   // and then set it to a function expression,
//   // like we have always been doing,

//   //old ways
//   // order: function (starterIndex, mainIndex) {
//   //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   // },

//   //ES6 enhanced object literals about writing methods
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   //old ways
//   // orderDelivery: function ({
//   //   starterIndex = 1,
//   //   mainIndex = 0,
//   //   time = '20:00',
//   //   address,
//   // }) {
//   //   console.log(
//   //     `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//   //   );
//   // },

//   //ES6 enhanced object literals about writing methods
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   //old ways
//   // orderPasta: function (ing1, ing2, ing3) {
//   //   console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   // },

//   //ES6 enhanced object literals about writing methods
//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   //old ways
//   // orderPizza: function (mainIngredients, ...otherIngrdients) {
//   //   console.log(mainIngredients);
//   //   console.log(otherIngrdients);
//   // },

//   //ES6 enhanced object literals about writing methods
//   orderPizza(mainIngredients, ...otherIngrdients) {
//     console.log(mainIngredients);
//     console.log(otherIngrdients);
//   },
// };

// // So maybe you've been noticing
// // that we have been talking a lot about ES6 features
// // and even newer additions to the language.
// // And so let's continue with that now
// // with yet another enhancement,
// // which is enhanced object literals.

// // Now ES6 introduced three ways, which make it easier
// // to write object literals like this.

// // And I actually personally really prefer this new syntax,
// // so I'm gonna change this entire object to the new way
// // of writing methods, but this actually comes down
// // to personal preference once again.
// // So if you prefer the old way you can just keep it like that.

///////////////////////////////////////////////////////////////////
// Optional Chaining (?.)
///////////////////////////////////////////////////////////////////

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },

//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 12 + 12,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,

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

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredients, ...otherIngrdients) {
//     console.log(mainIngredients);
//     console.log(otherIngrdients);
//   },
// };

// // WITHOUT optional chaining
// // if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // WITHOUT optional chaining
// // console.log(restaurant.openingHours.mon.open);

// //   And this can get out of hand pretty quickly
// // when we have deeply nested objects
// // with lots of optional properties.
// // And sometimes that happens in the real world.
// // And so therefore ES2020
// // introduced a great solution for this,
// // which is a feature called optional chaining.
// // And with optional chaining,
// // if a certain property does not exist,
// // then undefined is returned immediately.
// // And so that will then avoid
// // that kind of error that we saw earlier.

// // WITH optional chaining

// // But here this next operation of trying to read open
// // only happens if all of this here actually exists.
// // So if it's not null and not undefined.
// // But if it is undefined or null,
// // then the result will be undefined immediately.
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);

//   //   So restaurant.openingHours
//   // but now we cannot do this, right?
//   // Because this is not an actual property name of the object.
//   // And so remember if we want to use a variable name
//   // as the property name,
//   // basically, we need to use the brackets notation.
//   // restaurant.openingHours.day; //we cannot do this
//   const open1 = restaurant.openingHours[day]?.open || 'closed';
//   console.log(`On ${day}, we open at ${open1}`);
//   console.log('=============================');
//   const open2 = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open2}`);
// }

// //Methods - optional chaining
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays - optional chaining
// const users = [{ name: 'Elmar', email: 'hello@elmar.io' }];

// // const users = [];

// //// WITH optional chaining
// console.log(users[0]?.name ?? 'User array empty');

// // WITHOUT optional chaining
// if (users.length > 0) {
//   console.log(users[0].name);
// } else {
//   console.log('User array empty');
// }

//////////////////////////////////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries
//////////////////////////////////////////////////////////////////

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },

//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 12 + 12,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,

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

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredients, ...otherIngrdients) {
//     console.log(mainIngredients);
//     console.log(otherIngrdients);
//   },
// };

// // So we learned about the for of loop
// // to loop over a race, which remember is an Iterable,
// // but we can also loop over objects,
// // which are not Iterable,
// // but in an indirect way.
// // Now we have different options here,
// // depending on what exactly we want to loop over.
// // So do we want to loop over the objects, property names
// // over the values or both together.
// // And let's start by simply looping over property names.
// // And so remember they are also called keys.
// // Now, ultimately we will still have to use the for of loop
// // to loop over the array, but again,
// // we're going to do that in an indirect way.
// // So we're not actually looping over the object itself.
// // Instead, we're going to loop over, an array.

// //Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// // console.log(`We are open on ${properties.length} days.`);
// // for (const day of Object.keys(openingHours)) {
// //   console.log(day);
// // }

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// // But if you had a more simple object with a simpler value,
// // then you would, of course only do this here
// // as destructuring, just a key and a value.
// // And of course you could then give them other names
// // as you would like.

// //[key, value]

//////////////////////////////////////////////////////////////////////////
// Coding Challenge #2
//////////////////////////////////////////////////////////////////////////

// // Let's continue with our football betting app! Keep using the 'game' variable from
// // before.
// // Your tasks:

// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")

// // 2. Use a loop to calculate the average odd and log it to the console (We already
// // studied how to calculate averages, you can go check if you don't remember)

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the
// // same property names �

// // 4. Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// //  Gnarby: 1,
// //  Hummels: 1,
// //  Lewandowski: 2
// // }

// // GOOD LUCK �

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")

// for (const [key, player] of game.scored.entries()) {
//   console.log(`Goal ${key + 1}: ${player}`);
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already
// // studied how to calculate averages, you can go check if you don't remember)

// const odds = Object.values(game.odds);

// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }

// average /= odds.length;
// console.log(average);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the
// // same property names

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of victory ${teamStr}: ${odd} `);
// }

// // BONUS
// // 4. Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// //  Gnarby: 1,
// //  Hummels: 1,
// //  Lewandowski: 2
// // }

// // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

////////////////////////////////////////////////////////////////////
// Sets
////////////////////////////////////////////////////////////////////

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },

//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 12 + 12,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,

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

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredients, ...otherIngrdients) {
//     console.log(mainIngredients);
//     console.log(otherIngrdients);
//   },
// };

// // In the past,
// // JavaScript has always had very little
// // built-in data structures.
// // So basically, we only had objects and arrays.
// // But in ES6, two more data structures
// // were finally introduced.
// // And that are. sets and maps.
// // So these are pretty common data structures
// // that already exists in other programming languages,
// // and now, they also exist in JavaScript.
// // So in this lecture, let's learn all about sets.
// // And a set is basically just a collection
// // of unique values.
// // So that means that a set can never have any duplicates.
// // And that property makes them useful
// // in certain situations.

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);

// // Now, also we can see that a set
// // kind of looks similar to an array, right.
// // So there are no key value pairs,
// // it's just a bunch of values grouped together,
// // in this case into a set.
// // And just like arrays, sets are also iterables.
// // Okay. Now, of course a set
// // is still very different from an array.
// // So first, because its elements are unique.
// // And second, because the order
// // of elements in the set is irrelevant.

// // But anyway, keep in mind that strings
// // are also iterables.
// // So we can do this.
// // So we can pass in a string.
// // And so now we get a set
// // with these five elements.
// // So, and that's the five components basically
// // of this iterable, which is the string.
// console.log(new Set('Jonas'));

// // And of course, the set could also be empty,
// console.log(new Set());

// // All right. And now let's learn how
// // to actually work with sets.
// // So first off, we can get the size of a set.
// // And just note, how it is actually called size
// // and to not length
// // like it is in arrays.
// // So don't make that confusion.
// console.log(orderSet.size);

// // Next, we can check if a certain element is in a set.
// // And so, comparing again two arrays,
// // this has method is similar
// // to the includes method in arrays.
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));

// // Next step,
// // we can also add new elements to a set.
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet);

// // Finally, we can also delete elements.
// orderSet.delete('Risotto');
// console.log(orderSet);

// // And in arrays, there is actually no method
// // that is this simple.
// // We will see how to delete elements
// // from arrays later.
// // But I can tell you that it's a little bit more complex.

// // But now you might ask,
// // how do we actually retrieve values out of a set?
// // Can we maybe use an index,
// // like in a race?
// // So doing something like, maybe like this here?
// // And the answer, as we will see is no.
// // So this doesn't work,
// // it gives us undefined,
// // no matter what number we put here.
// // All right. And that is
// // because in sets there are actually no indexes.
// // And in fact, there is no way
// // of getting values out of a set.
// // And if we think about this,
// // then it makes sense.
// // So there's really no need for getting data out
// // of a set. That's because if all values are unique,
// // and if their order does not matter,
// // then there is no point
// // of retrieving values out of a set.
// // All we need to know
// // is whether a certain value
// // is in the set or not.
// // And that's why we have the has method.
// // If your goal is to actually store values in order
// // and then retrieve it,
// // then the best use case, is to just use an array.
// // You wouldn't use a set for that.
// // And so again, there's no need
// // for getting values out of a set,
// // because if you need it, then you will just use an array.

// // Finally, there is actually one more method here
// // but it's not that important.
// // All we can use it for is
// // to basically delete all of the elements
// // of the set.
// // And so we see that now it is empty, right.
// // But let's put that back,
// // so that we can work some more with a set.

// // orderSet.clear();
// console.log(orderSet);

// // So as I said, in the beginning,
// // sets are also iterables.
// // And therefore, we can loop over them.
// // So looping is possible,
// // just like in any other iterable.
// // All right, so now that we know how to work with sets,
// for (const order of orderSet) console.log(order);

// // let's see a big use case for them right now.
// // So in a normal code base,
// // the main use case of sets is actually

// // EXample
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique1 = new Set(staff);
// console.log(staffUnique1);

// // But now we actually want this
// // to be an array.
// // But the conversion from a set
// // to an array is pretty easy,
// // because they're both iterables.
// // So remember from earlier
// // that the spread operator works
// // on all iterables. Right?
// // So that includes sets.
// // And so we can now create an array around this basically.
// // And then we can unpack
// // this entire set here
// // using the spread operator,
// // and then these elements will be put
// // into the newly constructed array. Okay.
// const staffUnique2 = [...new Set(staff)];
// console.log(staffUnique2);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// // And the same could even be done with counting,
// // how many different letters there are in a string, right.
// // Because an iterable,
// // or actually a string is also an iterable.
// // So let's see how many different letters there
// console.log(new Set('Elmaralmoceraangao').size);

// // All right. So as a conclusion
// // to this video sets are not intended
// // to replace arrays at all.
// // So whenever you need to store values in order,
// // and that might contain duplicates,
// // always just use arrays.
// // That's also true when you need
// // to really manipulate data,
// // because arrays have access to a lot
// // of great array methods
// // that we're going to study a little bit later.

// // Now sets have this very useful property
// // of being unique.
// // And it's also very easy to interact
// // with sets by using all
// // of their straightforward methods.
// // However, they are not nearly as important as arrays.
// // So keep sets in mind when you need to work
// // with unique values.
// // But besides that, you can just continue using arrays.

////////////////////////////////////////////////////////////////////
// Maps: Fundamentals
////////////////////////////////////////////////////////////////////

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },

//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 12 + 12,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,

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

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredients, ...otherIngrdients) {
//     console.log(mainIngredients);
//     console.log(otherIngrdients);
//   },
// };

// // Now, it's time to learn
// // about the other new JavaScript data structure
// // and that is maps.
// // And, let me start by telling you
// // that maps are a lot more useful than sets.
// // So what exactly is a map?
// // Well, it's certainly not the same thing
// // that we use in the real life
// // to find our ways around.
// // Now, instead in JavaScript,
// // a map is a data structure
// // that we can use to map values to keys.
// // So, just like an object
// // data is stored in key value pairs in maps.
// // Now, the big difference between objects and maps
// // is that in maps, the keys can have any type
// // and this can be huge.
// // So, in objects, the keys are basically always strings.
// // But in maps, we can have any type of key.
// // It could even be objects, or arrays, or other maps.
// // So, that can lead to some really great and advanced stuff.

// // And the easiest way to create a map
// // is to actually create an empty map
// const rest = new Map();

// // And then, to fill up the map
// // we can use the set method.
// // And then here, we pass into arguments.
// // The first is the key name.

// // And, so you see, that this set method is pretty similar
// // to the add method that we had in sets.
// rest.set('name', 'Classico Italiano');

// // And, remember that we can use any data type that we want.
// // So, let's say that the restaurant has two locations.
// // So, we can create a key with a number.
// // It doesn't have to be a string.
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// // Now, the fact that the set method
// // actually returns the updated map
// // allows us to change the set method like this.
// // So, again, calling the set method
// // returns the updated map.
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// //   Now, in order to read data from a map
// // we use the Get method.
// // And so, that get method is available on all the maps.
// // And so, all we need to do is to pass in the name of the key.
// console.log(rest.get('name'));
// console.log(rest.get(true)); //of course the data type of the key matters.
// console.log(rest.get(1));

// // Now, this is as I said pretty clever,
// // but it's not really so readable.
// // So, don't overuse this kind of pattern, okay?
// // This just really goes to show the power
// // of having Booleans as map keys.
// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // Now, we can also check if a map contains a certain key.
// console.log(rest.has('categories'));

// // Then, we can also delete elements from the map.
// // And again, that happens based on the key.
// rest.delete(2);
// console.log(rest);

// // Now comparing this to objects,
// // we can actually also delete properties from objects
// // using something called the Delete Operator.
// // But, that's a really slow process.
// // And usually, it's not encouraged to do that here.
// // About the has method.
// // Actually, objects do also have a method
// // which is called hasOwnProperty.
// // But, we're gonna talk about that
// // in the object oriented programming section, all right?

// //Next, maps also have the size property.
// console.log(rest.size);

// // And then, to finish, we can also clear.
// // So basically, remove all the elements from the map.
// // Let's just put that

// // rest.clear();
// console.log(rest);
// console.log(rest.size);

// // So, as you can see here,
// // there is some overlap in the way that we work
// // with maps and sets.
// // And, that's because they were both introduced in ES6.

// // And now just to finish,
// // let me show you that we can in fact use arrays
// // or objects as map keys.
// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.size);

// // But now, to get the data based on that array

// // But, given what we learned
// // in the previous section
// // about how JavaScript works behind the scenes.
// // Especially, primitives versus objects.
// // Do you think that this will now retrieve Test?
// // Well, let's see.
// // And, no it did not.
// // And the reason for that,
// // is that these two arrays
// // are actually not the same object.
// // So, this array, and this one,
// // even though we wrote them in the same way
// // and so, they have the same elements,
// // they are not the same object in the heap, okay?

// // In order to make it work
// // we would have to do this.
// // Creating an array, one, two.
// // And then, we use that array.
// // And then, we also use the same array
// // to read the value out of the map.
// // And so now, it is gonna work, okay?
// // Because, now of course
// // these two refer to the same place in memory.

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

// // Great, and so with this we proved
// // that we can indeed use objects as map keys.
// // And, this can be very useful with DOM elements
// // which, in fact are also nothing more than just
// // a special type of object.

// // And so, the result of this will be an object.
// // And so, let's say that this is the heading.
// // That now as we check it out here,
// // you will see that it's here indeed.
// // So, as I hover it
// // you can even see it here visible on the webpage.
// // You see that?
// // The highlight up there?
// // That exactly is the key of this map entry.
// // Sounds crazy, but it is possible
// // and it can enable some advanced functionality.
// rest.set(document.querySelector('h1', 'Heading'));
// console.log(rest);

///////////////////////////////////////////////////////////////////
// Maps: Iteration
///////////////////////////////////////////////////////////////////

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },

//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 12 + 12,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,

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

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredients, ...otherIngrdients) {
//     console.log(mainIngredients);
//     console.log(otherIngrdients);
//   },
// };

// // So in the last video we created an empty map
// // and then edit elements
// // to it by using the set method.
// // Remember, however,
// // there is actually another way of populating a new map
// // without having to use the set method.
// // And I prefer that because the set method
// // is a bit cumbersome when there are a lot

// // and then here we can pass in an array
// // and disarray itself will contain multiple arrays.
// // And in each of these arrays,
// // the first position is gonna be the key.
// // And the second position is gonna be the value.

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);

// console.log(question);
// // I actually prefer this way
// // of writing it over the way that we did
// // in a previous lecture.
// // But when we keep adding new elements,
// // programmatically using code,
// // then of course the set method is still the way to go.

// //Convert object to map
// // whenever you need a map,
// // when you already have an object.
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Next up, let's talk about iteration
// // and iteration is possible
// // on maps because as we already know,
// // maps are also iterables.
// // And so the for loop
// // is also available for them.

// // The only difference is that for the object,
// // we needed object dot entries right here.
// // And that's just because the object
// // is not an alterable,
// // but then we converted it
// // to an alterable using object dot entries.

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// // we are using the power of having Boolean values as keys,
// console.log(question.get(question.get('correct') === answer));

// // as a side note,
// // sometimes we also need to convert a map back
// // to an array.
// // So basically to this structure,
// // and we can do that, like this.
// // So convert map
// // to array basically.
// // You can do that by simply building new array
// // and then unpacking again,
// // using the spread operator.
// // The question map,
// // it's asking us here again.
// // And so then the result is essentially
// // this same data structure.
// // So the array of arrays,
// // with which we started.
// // So it's this one here.
// // So in this case, of course,
// // this wouldn't make too much sense,
// // but it's still got to know that sometimes
// // you can convert a map to an array.

// //Convert map to array
// console.log([...question]);
// console.log([question.entries()]);
// console.log([question.keys()]);
// console.log([question.values()]);

///////////////////////////////////////////////////////////////////
// Summary: Which Data Structure to Use?
///////////////////////////////////////////////////////////////////
// Dealing and working with data is the main thing
// that we do as developers.
// And that's the reason why,
// since the beginning of the course,
// we have been working
// with JavaScripts built-in data structures,
// like arrays and objects.
// Then in the last few lectures
// we learned about two new data structures

//see pdf lecture - Data structure overview

//////////////////////////////////////////////////////////////////////////
// Coding Challenge #3
//////////////////////////////////////////////////////////////////////////

// // Let's continue with our football betting app! This time, we have a map called
// // 'gameEvents' (see below) with a log of the events that happened during the
// // game. The values are the events themselves, and the keys are the minutes in which
// // each event happened (a football game has 90 minutes plus some extra time).
// // Your tasks:

// // 1. Create an array 'events' of the different game events that happened (no
// // duplicates)

// // 2. After the game has finished, is was found that the yellow card from minute 64
// // was unfair. So remove this event from the game events log.

// // 3. Compute and log the following string to the console: "An event happened, on
// // average, every 9 minutes" (keep in mind that a game has 90 minutes)

// // 4. Loop over 'gameEvents' and log each element to the console, marking
// // whether it's in the first half or second half (after 45 min) of the game, like this:

// // [FIRST HALF] 17: ⚽ GOAL
// // GOOD LUCK �

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// // 1
// console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// const time = [...gameEvents.keys()].pop(); //.pop to get the last element of array and return the deleted element
// console.log(time);

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`${half} HALF ${min}: ${event}`);
// }

/////////////////////////////////////////////////////////////////////
// Working With Strings - Part 1
/////////////////////////////////////////////////////////////////////

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// // So again comparing strings to arrays here,
// // strings also have methods
// // and some of them are quite similar to the array methods.
// // So one of them is the index off.
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal')); //case sensitive

// // All right now, what can we actually do with these indexes?
// // Why are they useful?
// // Well, one good use case is to extract part
// // of a string using the slice method
// // and a slice method needs indexes as arguments.
// // And so therefore sometimes it can be very useful
// // to first figure out the index of part of a string
// // to then extract that.
// // So let's see how the slice method works.

// // And this result that we get here,
// // so just this here is called a substring
// // because it's just a part of the original string.
// // Now this does not change the underlying string okay?
// // Just keep that in mind.
// // That's because it's actually impossible to mutate strings.
// // They are primitives, right?
// // So if we wanted to use this string
// // now we would have to store it first into some variable
// // or some data structure.

// // Okay, so this method here and all the other ones
// // that we're gonna talk about always return a new string.
// console.log(airline.slice(4));

// // Now, besides the begin parameter that we already specified,
// // we can also specify an end parameter.
// // So let's try seven and see the result.
// // And so now we only got air.
// // Okay so this one is four, then five, six
// // and seven is the space here.
// // And so what this means is that the end value
// // is actually not included in the string.
// // All right so basically it stops extracting
// // before reaching index number seven.
// // And that's really important to keep in mind.

// // And just as a side note,
// // the length of the extracted string
// // is always going to be end minus the beginning
// console.log(airline.slice(4, 7));

// // So that's the fundamentals of the slice method,
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //plus 1 to remove the space

// // and then it will start counting from the end.
// // Or actually start extracting from the end.
// console.log(airline.slice(-2));

// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);

//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😥');
//   else console.log('You got lucky 😍');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // So we know that strings are just primitives.
// // So why do they have methods?
// // Shouldn't methods only be available
// // on objects such as a race?
// // Well that is actually true.
// // However, JavaScript is really smart.
// // And so here is how this works.
// // Whenever we call a method on a string,
// // JavaScript will automatically behind the scenes
// // convert that string primitive to a string object
// // with the same content.
// // And then it's on that object where the methods are called.

// // All right and this process is called boxing
// // because it basically takes our string
// // and puts it into a box
// // which is the object.
// // So basically what happens is this.
// // So what JavaScript does,
// // is to call this string function here.

// console.log(new String('Elmar'));
// console.log(typeof new String('Elmar'));

// console.log(typeof new String('Elmar').slice(1));

////////////////////////////////////////////////////////////////////
// Working With Strings - Part 2
////////////////////////////////////////////////////////////////////

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; //Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toLowerCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// // Comparing email
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// // By the way, here, since ES2019, there's also trim start
// // and trim end, which as their names say,
// // you can use to trim wide space only from the start
// // of the string or only from the end.

// // Next up, let's learn one of the most important thing
// // about strings, which is to replace parts of strings.
// // So replacing.

// //replacing
// const priceGB = '288,97£'; //Gb great britain
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to bording door 23. Borading door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// // But for me, it doesn't work yet,
// // but there is still another solution,
// // which is to use something called a regular expression.
// // Now, regular expressions are one of the most complex
// // and confusing topics of programming,
// // but we will still take a short look at him
// // at some point in the course.
// // But for now, we are just gonna use
// // a very simple regular expression to tell the replace method
// // that it should actually target all the occurrences
// // of door here and not just the first one.

// console.log(announcement.replace(/door/g, 'gate')); //g flag

// //Booleans

// // Now, as a final topic of this lecture,
// // there are three simple methods that return booleans.
// // So Booleans.
// // Okay.
// // These methods are includes starts with and ends with.

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));

// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// // practice exercise

// // that when we receive input from a user,
// // we usually always start by putting everything
// // into lower case, okay?
// // Because that makes it a lot easier
// // to then compare it to something.
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT alowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////////////////////////////
// Working With Strings - Part 3
///////////////////////////////////////////////////////////////

// //Split and join
// console.log('a+very+nice+string'.split('+'));

// console.log('Elmar Angao'.split(' '));

// const [firstName, lastName] = 'Elmar Angao'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // So that's a completely different approach
//     // than this one here,
//     // but it gives us the same result.
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('elmar angao');

// // Now here's a small challenge for you
// // because there is another way of doing this.
// // So basically of doing the capitalization of one name.
// // So given what we already learned
// // and especially in the last lecture
// // can you think of a different way of doing this?

// //padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// //

// // and let's start by converting this number to a string.
// // So string,
// // now we learned how to convert a number to a string
// // in the fundamental section, right?
// const maskCreditCard = function (number) {
//   // const str = String(number);

//   //easiest trick to convert to string
//   const str = number + '';

//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(45626));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('489434546749876513469'));

// //Repeat
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in the line ${'✈'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// //source for other method
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

////////////////////////////////////////////////////////////
// Coding Challenge #4
////////////////////////////////////////////////////////////

// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):
// underscoreCase   ✅
// firstName        ✅✅
// someVariable     ✅✅✅
// calculateAge     ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!

// Afterwards, test with your own test data!
// GOOD LUCK �

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// we are going to use the current index in each iteration.
// Now remember how we can get access
// to the current index in the for of loop.
// So we're looping over an array here,
// and so to get the current index,
// we need to actually use the entries
// of the array, remember that?
