package router

import (
	"encoding/json"

	"github.com/fanama/RPG-API/package/database"
	"github.com/gofiber/fiber/v2"
)

func NewHero(c *fiber.Ctx) error {

	body := c.Body()

	var hero database.Hero

	err := json.Unmarshal(body, &hero)

	if err != nil {
		return err
	}

	database.NewHero(hero)

	return c.JSON("success")

}
