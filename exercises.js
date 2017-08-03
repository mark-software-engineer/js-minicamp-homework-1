//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
  var difference = num - 5;
  return difference;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
  var sameLength = str1.length === str2.length;
  return sameLength;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
  var same = x === y;
  return same;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  var underNinety = num < 90;
  return underNinety;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  var aboveFifty = num > 50;
  return aboveFifty;
}

function add(x, y) {
  //add x and y together and return the value
  //code here
  var addXy = x + y;
  return addXy;
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  var subtractXy = x - y;
  return subtractXy;
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var divideXy = x / y;
  return divideXy;
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  var multiplyXy = x * y;
  return multiplyXy;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
  var modulusXy = x % y;
  return modulusXy;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
  var isEven = (num % 2) === 0;
  return isEven;
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  var isOdd = (num % 2) != 0;
  return isOdd;
}

function square(num) {
  //square num and return the new value
  //code here
  var squareNum = num * num;
  return squareNum;
}

function cube(num) {
  //cube num and return the new value
  //code here
  var cubeNum = num * num * num;
  return cubeNum;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  var powerNum = Math.pow(num, exponent);
  return powerNum;
}

function roundNumber(num) {
  //round num and return it
  //code here
  var roundNum = Math.round(num);
  return roundNum;
}

function roundUp(num) {
  //round num up and return it
  //code here
  var roundUp = Math.ceil(num);
  return roundUp;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var msg = str + '!';
  return msg;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var name = firstName + ' ' + lastName;
  return name;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  var greeting = 'Hello ' + name + '!';
  return greeting;
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  var rectArea = length * width;
  return rectArea;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  var triArea = (base/2) * height;
  return triArea;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var circArea = Math.round(Math.PI * (radius * radius));
  return circArea;
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  //code here
  var volume = width * height * length;
  return volume;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
