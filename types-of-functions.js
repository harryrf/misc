/* A collection of functions with descriptions. I will probably continue to add to this list,
 * since having working examples is always a good memory refresher. Some example questions were
 * found on practice sites, some were created by me. All answers are my own work. No cheating :)
 *
 * Harry F. 9 April 2016
 **/
 
 
// Takes single argument and returns it. Simplest of concepts.
function argReturn (arg) {
  return arg;
}

// Adds two arguments together then returns the sum
function addArgs (x, y) {
  return x + y;
}

// Multiplies two arugments and returns the sum
function mulArgs (x, y) {
  return x * y;
}

// A function that takes an arugment and returns
// a function that returns that argument.
function funcReturn (x) {
  return function () {
    return x;
  };
}

// A function that adds from two invocations
// Note: call as addFuncs()(); numbers, strings
// and maybe other functions work as well.
function addFuncs (x) {
  return function (y) {
    return x + y;
  };
}

// A function that takes a binary function,
// and makes it callable with two invocations.
function applyFunc (binary) {
  return function (x) {
    return function (y) {
      return binary (x, y)
    };
  };
}

