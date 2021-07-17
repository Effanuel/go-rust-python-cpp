function longestPalindrome(s: string): string {
  let minVal = s[0];

  const isPalindrome = (str: string): boolean =>
    str == str.split("").reverse().join("");

  function isPalindromeExpandable(palindrome: string, index: number): string {
    const prefixChar = s[index - 1];
    const postfixChar = s[index + palindrome.length];

    return prefixChar === postfixChar && prefixChar != undefined
      ? isPalindromeExpandable(prefixChar + palindrome + postfixChar, index - 1)
      : palindrome;
  }

  function checkFrame(frame: string, index: number): void {
    if (isPalindrome(frame)) {
      const expanded = isPalindromeExpandable(frame, index);
      if (expanded.length > minVal.length) minVal = expanded;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const border1 = s[i + 1];

    if (border1 != undefined) {
      checkFrame(s[i] + border1, i);
      const border2 = s[i + 2];
      if (border2 != undefined) {
        checkFrame(s[i] + border1 + border2, i);
      }
    }
  }

  return minVal;
}

// 44.42% - 34.38%

console.log(longestPalindrome("a".repeat(1000)));
