package router

import (
	"github.com/fanama/next-react/Api/packages/database"
	"github.com/fanama/next-react/Api/packages/database/types"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

var db *gorm.DB

func CreateSqlite(c fiber.Ctx) error {

	db, err := database.InitSqliteDB("gorm")

	if err != nil {
		return err
	}

	_, err = db.DB()

	if err != nil {
		return err
	}

	return nil
}

func CreateTable(c fiber.Ctx) error {

	type form struct {
		Table string `json:"table"`
	}

	var formulaire form

	if err := c.BodyParser(&formulaire); err != nil {
		return err
	}

	err := database.CreateTable(db, formulaire.Table, &types.User{})

	return err

}
