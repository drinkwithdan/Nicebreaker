def BuzzFizz (num):
  """Function that prints out a range of numbers from num to 1,
  If number is multiple of 3 print "Fizz", if a multiple of 5 print "Buzz",
  If both print "BuzzFizz"
  else print the number.

  :param number: num - upper number
  :print: based on the above conditions 
  
  """

  for i in range(num, 0, -1):

    if i % 3 == 0 and i % 5 == 0:
      print("BuzzFizz")

    elif i % 3 == 0:
      print("Fizz")

    elif i % 5 == 0:
      print("Buzz")

    else:
      print(i)

BuzzFizz(20)