"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

:param: int[]
:param: int
:return: int
"""

def target_indices(nums, target):
  rtn_list = [[i, j] for i, j in range(nums) if (i != j) and (nums[i] + nums[j] == target)]
  return rtn_list

print(target_indices([2, 7, 11, 15], 9)) # => [0, 1]
print(target_indices([3, 2, 4], 6)) # => [1, 2]
