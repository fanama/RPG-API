package database

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func init() {

	var err error

	DB, err = gorm.Open(sqlite.Open("./database/database.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	DB.AutoMigrate(&Hero{})

	var mob Hero

	DB.FirstOrCreate(&mob)

}
