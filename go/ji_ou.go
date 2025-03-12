package main

import "fmt"

func panduan(number int){
  if number % 2 == 0 {
		fmt.Println("是偶数",number)
	}else{
		fmt.Printf("是奇数",number)
	}
}

 func main() {
	var str int
	fmt.Scanf("%d",&str)
	panduan(str)

 }
