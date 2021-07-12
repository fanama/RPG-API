package main

import (
	"log"

	"github.com/fanama/RPG-API/package/database"
	"github.com/fanama/RPG-API/package/router"
	"github.com/gofiber/fiber/v2"
)

func main() {

	sqlDB, err := database.DB.DB()

	if err != nil {
		log.Fatal(err)
	}

	app := fiber.New()

	app.Static("/", "./public")

	app.Get("/heroes", router.GetHeroes)
	app.Get("/hero/:name", router.GetHeroe)

	app.Post("/hero", router.NewHero)

	app.Listen(":3001")

	sqlDB.Close()

}
