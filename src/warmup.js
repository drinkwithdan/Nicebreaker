// Question
// Write a function that receives a number and calculates the correct change using Australian currency values. 
// The returned value should be an object with the count of each denomination currency needed to make up the change.

// Additional Context (Only provide this information if your candidate asks)
// Australian currency denominations for this challenge are $100, $50, $20, $10, $5, $2, $1.
// All input numbers will be between $1 and $1000 and will always be a whole number.
// The returned value should use a 0 for currency denominations which are not needed in the change.
// The desired solution should return the least amount of change. E.g. in the example 4 $100 bills is better than 8 $50 bills


const giveChange = (amount) => {
  let change = {
    1: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
    100: 0
  }

  denominations = Object.keys(change).reverse()

  for (dem of denominations) {
    let result = Math.floor(amount / dem)
    let remainder = amount % dem
    amount = remainder
    change[dem] = result
  }

  const reversedKeys = Object.keys(change).reverse();


  return reversedKeys.reduce((a, v) => ({ ...a, [v]: v}), {})
  
}

// Example:
console.log(giveChange(426))
// returns: { 100: 4, 50: 0, 20: 1, 10: 0, 5: 1, 2: 0, 1: 1 }