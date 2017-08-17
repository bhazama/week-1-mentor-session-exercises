/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */
function firstReverse(str){
  var emptyArr = [];
  var strToArr= str.split("");
  var reverseWord;
  //console.log(strToArr);
  for(var i = strToArr.length -1; i>=0; i--){
    emptyArr.push(strToArr[i]);
    reverseWord = emptyArr.join("");
  }
  return reverseWord;
}
console.log(firstReverse("hello"));
 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */
function alphaOrder(str){
  var strToArr= str.split("");
  var newArr= strToArr.sort().join("");
  return newArr;
}
console.log(alphaOrder("zyxwvutsrqponmlkjihgfedcba"));


 /** Function: vowelCount
 * The function will take the str parameter being passed in and
 * return the number of vowels in the string
 * @param {string} str
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */
 function vowelCount(str){
  var count = 0;
  for(var i = 0; i<str.length; i++){
    if(str[i].includes("a", "e", "i", "o", "u")){
      count+=1;
    }
  }
return count;
}
console.log(vowelCount("hello"));
 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */
 function timeConvert(min){
  var hours = Math.floor(min/60);
  var minutes = min%60;
  console.log(hours + ":" + minutes);
 }
timeConvert(70);
 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */
 function repeatString(str,num){
  var empty = [];
  if(num < 0){
    return empty;
  }else{empty = str.repeat(num);
  }
console.log(empty);
 }
repeatString("hello", 3);

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse("sax"),
    alphaOrder: null,
    vowelCount: null,
    timeConvert: null,
    repeatString: null
}
