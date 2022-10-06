/*
* Function that prints out a range of numbers from num to 1,
* If number is multiple of 3 print "Fizz", if a multiple of 5 print "Buzz",
* If both print "BuzzFizz"
* else print the number.
*
* @param {number} num
* @return - prints based on the above conditions
*/

const BuzzFizz = (num) => {

  for (let i = num; i > 0; i--)
  {

    if (i % 3 === 0 && i % 5 === 0)
    {
      console.log("BuzzFizz")
    }

    else if (i % 3 === 0)
    {
      console.log("Fizz")
    }

    else if (i % 5 === 0)
    {
      console.log("Buzz")
    }

    else
    {
      console.log(i)
    }

  }

}

BuzzFizz(20)