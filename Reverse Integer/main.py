class Solution:
    def reverse(self, x: int) -> int:
        string_num = str(x)
        is_signed = x < 0

        value = string_num[is_signed:]

        reversed_value = int(value[::-1])

        limit = 2 ** 31

        if reversed_value < -limit or reversed_value >= limit:
            return 0
        else:
            return -reversed_value if is_signed else reversed_value


# 97.01% -  45.12%

if __name__ == "__main__":
    solution = Solution()
    solution.reverse(-123)
