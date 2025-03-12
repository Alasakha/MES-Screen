package main

import (
	"fmt"
)

//Circle 是周长
type Circle struct{
	// raidus 是半径
	radius float64
}
// area() 方法求面积
func (c Circle) area(a float64) float64 {
	return  3.14* a *a
}

func main(){
	var s1 Circle
	s1.radius = 4.0
	area := s1.area(s1.radius)
	fmt.Println("面积是：", area)
}