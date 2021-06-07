package main

import "fmt"

func main(){
	var n, sum int = 1000, 0;

	for i := 0; i < n; i++ {
		if i % 3 == 0 || i % 5 == 0 {
			sum += i
		}
	}
	fmt.Println(sum);
}