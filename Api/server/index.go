package server

import (
	"os"

	"github.com/fanama/RPG/Api/app"
	"github.com/fanama/RPG/Api/server/routes"
	"github.com/gofiber/fiber/v2"
)

func Run(ctx *app.Context) {
	app := Routes(ctx)

	app.Listen(":" + os.Getenv("PORT"))
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
	r.Get("/hero/:name", routeslist.GetHero)
	r.Put("/hero/:name", routeslist.UpdateHero)
	r.Delete("/hero/:name", routeslist.DeleteHero)

	return r
}
