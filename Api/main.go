package main

import (
	"log"

	"github.com/fanama/next-react/Api/packages/router"
	"github.com/fanama/next-react/Api/packages/rpg"
	"github.com/fanama/next-react/Api/packages/variablesCors"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	config, err := variablesCors.InitConfig()

	if err != nil {
		log.Fatal(err)

	}

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: config.Origin,
		AllowMethods: config.Methods,
	}))

	app.Post("/auth", router.Login)

	app.Post("/insert", rpg.Insert)
	app.Get("/get", rpg.Get)

	app.Listen(":" + config.Port)
}
