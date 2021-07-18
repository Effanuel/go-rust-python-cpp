from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        acc: Dict[int, List[int]] = {}
        for index, num in enumerate(nums):
            if num in acc:
                acc[num].append(index)
            else:
                acc[num] = [index]

        for index, num in enumerate(nums):
            key = target - num

            if key in acc:
                value = acc[key]
                if num == target - num and len(value) != 2:
                    continue
                element_index = 1 if len(value) == 2 else 0
                return [index, value[element_index]]


if __name__ == "__main__":
    print(Solution().twoSum([3, 5], 8))

# 76.66% - 9.12%
