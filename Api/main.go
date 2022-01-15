package main

import (
	"fmt"

	"github.com/fanama/RPG/Api/menu"
	"github.com/fanama/RPG/Api/server"
)

func main() {

	fmt.Println("==========================")
	fmt.Println("|  Welcome to the RPG!!!!  |")
	fmt.Println("==========================")

	ctx := menu.Start()

	fmt.Println("==========================")
	fmt.Println("Starting server")

	server.Run(ctx)

}
