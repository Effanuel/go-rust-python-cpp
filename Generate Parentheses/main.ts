function generateParenthesis(n: number): string[] {
  let current = [""];

  const validForBases = (
    str: string
  ): ["((" | "", "()" | "", ")(" | "", "))" | ""] => {
    const currentlyOpenParantheses = str.match(/\(/g)?.length ?? 0;
    const currentlyClosedParentheses = str.match(/\)/g)?.length ?? 0;
    const openBrackets = currentlyOpenParantheses - currentlyClosedParentheses;

    return [
      currentlyOpenParantheses + 2 <= n ? "((" : "",
      currentlyOpenParantheses + 1 <= n ? "()" : "",
      currentlyOpenParantheses + 1 <= n &&
      currentlyClosedParentheses + 1 <= n &&
      openBrackets >= 1
        ? ")("
        : "",
      currentlyClosedParentheses + 2 <= n && openBrackets >= 2 ? "))" : "",
    ];
  };

  const appendParens = (acc: string[]) =>
    acc
      .map(
        (item) =>
          validForBases(item)
            .map((val) => (val !== "" ? item + val : undefined))
            .filter((i) => i != undefined) as any
      )
      .flat();

  // TODO: move to recursion
  while (!current.find((i) => i.length === n * 2)) {
    current = appendParens(current);
  }

  return current;
}

// 98.99% - 13.64%

console.log(generateParenthesis(3));
