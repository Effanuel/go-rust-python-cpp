function main() {
  let total = BigInt(0);

  const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("./data.txt"),
  });

  lineReader.on("line", (line) => void (total += BigInt(line)));
  lineReader.on("close", () => void console.log(String(total).slice(0, 10)));
}

main();
