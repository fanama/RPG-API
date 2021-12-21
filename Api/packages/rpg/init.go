package rpg

import (
	"github.com/fanama/next-react/Api/packages/database"
	"gorm.io/gorm"
)

func InitConnection() (db gorm.DB, err error) {

	db, err = database.InitSqliteDB("RPG")
	if err != nil {

		return db, err
	}
	err = CreateHeroTable(&db)
	if err != nil {

		return db, err
	}
	return db, err

}
