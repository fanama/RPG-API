package router

import (
	"github.com/fanama/RPG-API/package/database"
	"github.com/gofiber/fiber/v2"
)

func GetHeroes(c *fiber.Ctx) error {

	res := database.GetAllUsers()

	return c.JSON(res)

}
