package main

import (
	"fmt"

	"github.com/fanama/RPG/Api/menu"
	"github.com/fanama/RPG/Api/server"
)

func main() {
	ctx := menu.Start()

	fmt.Println("Starting server...")

	server.Run(ctx)

}
