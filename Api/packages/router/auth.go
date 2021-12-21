package router

import (
	"fmt"

	"github.com/fanama/next-react/Api/packages/auth"
	"github.com/fanama/next-react/Api/packages/auth/types"
	"github.com/gofiber/fiber/v2"
)

func Login(c *fiber.Ctx) error {

	var formulaire types.Form

	err := c.BodyParser(&formulaire)

	if err != nil {
		return c.Status(401).JSON(err)
	}

	res, err := auth.Login(formulaire)

	if err != nil {

		fmt.Println(err)

		return c.Status(401).JSON(map[string]string{
			"access_token":  "",
			"refresh_token": "",
		})
	}

	if res.Connect {
		token := auth.GenerateToken(formulaire)
		return c.Status(200).JSON(token)
	}

	return c.Status(401).JSON(map[string]string{
		"access_token":  "",
		"refresh_token": "",
	})
}
