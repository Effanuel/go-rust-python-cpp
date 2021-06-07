function main() {
  const n = 1000;
  let total = 0;

  for (let i = 0; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  console.log(total);
}

main();
