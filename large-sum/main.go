package main

import (
	"bufio"
	"fmt"
	"log"
	"math/big"
	"os"
)

func main() {
	file, err := os.Open("./data.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	total := big.NewInt(0)

	i := new(big.Int)
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		data, _ := i.SetString(scanner.Text(), 10)
		total.Add(total, data)
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	fmt.Println(total.String()[:10])
}
