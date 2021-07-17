function reverse(x: number): number {
  const stringNum = String(x);
  const isSigned = stringNum[0] === "-";

  const value = stringNum.slice(isSigned ? 1 : 0);
  const reversedValue = parseInt([...value].reverse().join(""));

  const limit = 2 ** 31;

  if (reversedValue < -limit || reversedValue >= limit) return 0;
  return isSigned ? -reversedValue : reversedValue;
}

console.log(reverse(1534236469));

// 62.23% - 29.58%
