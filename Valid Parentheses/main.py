from typing import Dict, List


class Solution:
    def isValid(self, s: str) -> bool:
        opening_braces: str = "([{"
        opened: List[str] = []
        braces: Dict[str, str] = {")": "(", "]": "[", "}": "{"}

        def last_index_of(array: List[str], elem: str):
            try:
                return "".join(array).rindex(elem)
            except:
                return -1

        for char in s:
            if char in opening_braces:
                opened.append(char)
            else:
                match_index = last_index_of(opened, braces.get(char, "default"))

                if match_index == -1 or match_index + 1 != len(opened):
                    return False
                opened.pop(match_index)
        return len(opened) == 0


if __name__ == "__main__":
    print(Solution().isValid("((()))"))


# 7.58% - 34.15%
