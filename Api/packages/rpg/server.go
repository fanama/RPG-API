package rpg

import (
	"log"

	"github.com/fanama/next-react/Api/packages/rpg/model"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

var db gorm.DB

func init() {

	var err error

	db, err = InitConnection()

	if err != nil {
		log.Fatal(err)
	}
}

func Get(c *fiber.Ctx) (err error) {

	user, err := GetUser(&db)
	if err != nil {

		return c.Status(500).SendString(err.Error())
	}
	return c.Status(200).JSON(user)
}

func Insert(c *fiber.Ctx) (err error) {

	var hero model.Hero

	err = c.BodyParser(&hero)

	if err != nil {

		return c.Status(500).SendString(err.Error())
	}

	err = InsertUser(hero, &db)
	if err != nil {

		return c.Status(500).SendString(err.Error())
	}
	return c.Status(200).SendString("success")
}
