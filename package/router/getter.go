package router

import (
	"github.com/fanama/RPG-API/package/database"
	"github.com/gofiber/fiber/v2"
)

func GetHeroes(c *fiber.Ctx) error {

	res := database.GetAllUsers()

	return c.JSON(res)

}

func GetHeroe(c *fiber.Ctx) error {

	username := c.Params("name")

	res := database.GetHero(username)

	return c.JSON(res)

}
