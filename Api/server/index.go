package server

import (
	"fmt"

	"github.com/fanama/RPG/Api/app"
	"github.com/fanama/RPG/Api/server/routes"
	"github.com/gofiber/fiber/v2"
)

func Run(ctx *app.Context) {
	app := Routes(ctx)

	//ask user for a port
	var port string
	fmt.Print("Enter port: ")
	fmt.Scan(&port)

	app.Listen(":" + port)
}

func Routes(ctx *app.Context) *fiber.App {
	r := fiber.New()

	routeslist := routes.Router{}
	routeslist.Init(ctx)

	r.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	r.Post("/hero", routeslist.CreateHero)
	r.Get("/heroes", routeslist.GetHeroes)

	return r
}
