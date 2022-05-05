package main

import (
	"fmt"
	"log"

	"github.com/fanama/RPG/Api/menu"
	"github.com/fanama/RPG/Api/server"
	"github.com/joho/godotenv"
)

func main() {

	err := godotenv.Load()

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("==========================")
	fmt.Println("|  Welcome to the RPG!!!!  |")
	fmt.Println("==========================")

	ctx := menu.Start()

	fmt.Println("==========================")
	fmt.Println("Starting server")

	server.Run(ctx)

}
