/* 

Write a function that takes a string of space separated numbers and returns the highest and lowest number.

 - All numbers are positive or negative integers.
 - There will always be at least one number in the input string.
 - Output string must be two numbers separated by a single space, highest number first.

 @ param - string
 @ return - string

*/

const HighAndLow = (str) => {
  if (str.length === 1) return str
  const strArr = str.split(" ").sort((a, b) => a - b)
  return `${strArr[strArr.length - 1]} ${strArr[0]}`
}

console.log(HighAndLow("1 2 3 4 5"));  // return "5 1"
console.log(HighAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(HighAndLow("1 9 3 4 -5")); // return "9 -5"
console.log(HighAndLow("2")); // return "2"