// Write a function (functionLocker) that takes in two functions as input and
// returns a new function.
// The first input function will be a predicate function that takes a number as
// input and returns true if the number passes a certain test; false otherwise.
// The second input function is a secret function that takes an unknown number of
// parameters.
// The returned function takes a number as its first parameter. If the number
// passes the predicate function, the secret function runs with any additional
// parameters passed into it. If the predicate fails, return undefined;
//
// ex.
// function isEven(num) { return num % 2 === 0; }z
// function addStrings(a, b, c) { return a + '--' + b + '--' + c; }
//
// const lockedFunc = functionLocker(isEven, addStrings);
//
// lockedFunc(4, 'I', 'love', 'Codesmith') --> 'I--love--Codesmith'
// lockedFunc(3, 'I', 'love', 'Codesmith') -->  undefined

//-----------------------------

function functionLocker(predicateFunc, secretFunc) {
    
  return function(num, ...args){

    if (predicateFunc(num)){
      return secretFunc(...args);
    }
    else {
      return undefined;
    }
  };
}
function isEven(num) { return num % 2 === 0; }
function addStrings(...args) { return args.forEach(element =>  console.log(element)); }

const lockedFunc = functionLocker(isEven, addStrings);
// console.log(lockedFunc(4, 'I', 'love', 'Codesmith', 'hey', 'Chris') ); // 'I--love--Codesmith'
// console.log(lockedFunc(3, 'I', 'love', 'Codesmith') ); // undefined

// Write a function (keywordCount) that takes as input an object of key-value
// pairs and a string. The object can have as values numbers, booleans, strings,
// or nested objects. There will be NO arrays or other object types in
// the object. Your function should return the number of times the keyword
// appears in the object. (Note: the keyword will never be an object key - only
// a value)
//
// ex.
// const myObj = { a: 'hi', b: 'yo', c: { d: 'ciao', e: 'hi' } };
// keywordCount(myObj, 'hi') --> 2
// keywordCount(myObj, 'bye') --> 0

function keywordCount(obj, keyword, counter = 0) {

  //initialize keyword counter value to 0
  //iterate through obj using for of loop
  //evaluate if element is nested obj
  //if true, recursive call
  //else/false, evaluate if the obj element has the value strictly equal to the passed in keyword
  //if true increment
  //return counter

  for (const ele in obj){
    if (typeof obj[ele] === 'object'){
      return keywordCount(obj[ele], keyword, counter);
    } else {
      if (obj[ele] === keyword){
        counter++;
      }
    }
  }
  return counter;
}

const myObj = { a: 'hi', b: 'yo', c: { d: 'ciao', e: 'hi' } };
console.log(keywordCount(myObj, 'hi')); //2
console.log(keywordCount(myObj, 'bye')); //0

// Write a function (closestToTarget) that takes as input an array of numbers, a
// callback function, and a target number. closestToTarget will pass each number
// in the array to the callback and return the number in the original array
// whose callback value is closest to the target number. (If more than one are
// the closest, return the first one.)
//
// ex.
// function flipEvens(num) { return (num % 2 === 0) ? -num : num; }
// const myArr = [3, -2, 6, 0];
//
// closestToTarget(myArr, flipEvens, 5) --> 3 (myArr[0])
// 3 ->  3 (is odd, falsy and positive, so sign remains same)
//-2 ->  2 (is even, truthy and negative, so negates value)
// 6 -> -6 (is even, truthy, and positive, so negates value)
// 0 ->  0 (is even, truthy, so value remains same)

//target is 5, so diffs are (2, 3, 11, 5)

// closestToTarget(myArr, flipEvens, -5) --> 6 (myArr[2])

function closestToTarget(arr, callback, target) {

  //use counter and evaluate if it's less than the newest difference
  //let closestOG
  //let smallestDiff = infinity

  //iterate through the array
  //for exmaple, first difference will overwrite both pointers
  //evaluate with each iteration if it's less than, in which case it will be reassigned
  //at end of iteration, return closestOG
  //--------------------
  

  //pass each number in the arr to the callback
  //return th mumber in the original array whose evaluated result is closest to target number
  //-------------

  //declare cache obj

  //invoke the callback, passing in the array
  //iterate through arr
  //declare result as evaluated result of callback with passed in element of array
  //evaluate difference
  //check if resuts is less than or greater than target
  //if result less than target: subtract result from target
  //if results greater than target: subtract target from result


  //use math max method on obj values for 
  //then iterate through cache obj for first key that has strictly equales that lowest value
  //return that first key
  //OR evaluate if each value is less than the next
    
  const cache = {};

  for (let i = 0; i < arr.length; i++){
    const result = callback(arr[i]);

    // console.log('arr[i] is', arr[i]);
    // console.log('callback to arr[i] is', callback(arr[i]));
    

    if (result < target){

      const diff = target - result;
      // console.log('diff', diff)

      cache[i] = diff;

    } else if (result === target){
      return arr[i];

    } else {

      const diff = result - target;
      // console.log('diff', diff);

      cache[i] = diff;
    }
  }
  // console.log('cache', cache);

  const differences = Object.values(cache);
  // console.log('differences', differences);

  const minDiff = Math.min(...differences);
  // console.log('lowest difference', minDiff);

  for (const ele in cache){
    if (cache[ele] === minDiff){
      return arr[ele];
    }
  }
}
//return the number in the original array


function flipEvens(num) { return (num % 2 === 0) ? -num : num; }
const myArr = [3, -2, 6, 0];

// console.log(closestToTarget(myArr, flipEvens, 5)); //3 (myArr[0])
// console.log(closestToTarget(myArr, flipEvens, -5)); //6 (myArr[2])

module.exports = { functionLocker, keywordCount, closestToTarget };
