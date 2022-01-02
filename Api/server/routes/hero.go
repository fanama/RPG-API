package routes

import (
	"github.com/fanama/RPG/Api/domain"
	"github.com/gofiber/fiber/v2"
)

func (r *Router) CreateHero(c *fiber.Ctx) error {
	var hero domain.Hero

	if err := c.BodyParser(&hero); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	r.ctx.CreateHero(&hero)
	return c.Status(201).JSON(hero)
}

func (r *Router) GetHeroes(c *fiber.Ctx) error {
	heroes, err := r.ctx.GetHeros()
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.JSON(heroes)
}
