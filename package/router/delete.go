package router

import (
	"encoding/json"

	"github.com/fanama/RPG-API/package/database"
	"github.com/gofiber/fiber/v2"
)

func DeleteHero(c *fiber.Ctx) error {

	body := c.Body()

	var hero database.Hero

	err := json.Unmarshal(body, &hero)

	if err != nil {
		return err
	}

	database.DeleteHero(hero)

	return c.JSON("success")

}
