function isValid(s: string): boolean {
  const openingBraces = "([{";

  const open: string[] = [];

  const toOpen = (closing: string) =>
    closing === ")" ? "(" : closing === "]" ? "[" : closing === "}" ? "{" : " ";

  for (let i = 0; i < s.length; i++) {
    const elem = s[i];

    if (openingBraces.includes(elem)) {
      open.push(elem);
    } else {
      const matchIndex = open.lastIndexOf(toOpen(elem));

      if (matchIndex === -1 || matchIndex + 1 !== open.length) {
        return false;
      }
      open.splice(matchIndex, 1);
    }
  }

  return open.length === 0;
}

// 99.86% - 64.91%
