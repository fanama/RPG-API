package database

import (
	. "github.com/fanama/next-react/Api/packages/database/types"
	"gorm.io/gorm"
)

func CreateUser(db *gorm.DB, user User) (err error) {

	err = db.Create(&user).Error

	return err
}
