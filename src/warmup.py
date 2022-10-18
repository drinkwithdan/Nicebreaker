"""
Write a function that takes a string of space separated numbers and returns the highest and lowest number.

 - All numbers are positive or negative integers.
 - There will always be at least one number in the input string.
 - Output string must be two numbers separated by a single space, highest number first.

 :param: string
 :return: string
"""

def high_and_low(str):
  if len(str) == 1:
    return str
  str_arr = str.split(" ")
  str_arr.sort()
  return f"{str_arr[-1]} {str_arr[0]}"
  

print(high_and_low("1 2 3 4 5"))  # return "5 1"
print(high_and_low("1 2 -3 4 5")) # return "5 -3"
print(high_and_low("1 9 3 4 -5")) # return "9 -5"
print(high_and_low("1")) # return "1"