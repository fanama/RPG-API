package rpg

import (
	"github.com/fanama/next-react/Api/packages/rpg/model"
	"gorm.io/gorm"
)

func InsertUser(user model.Hero, db *gorm.DB) (err error) {
	err = db.Table("hero").Create(&user).Error

	return err
}

func DeleteUser(user model.Hero, db *gorm.DB) (err error) {
	err = db.Table("hero").Delete(&user).Error

	return err
}

func GetUser(db *gorm.DB) (users []model.Hero, err error) {
	err = db.Table("hero").Find(&users).Error
	return users, err
}
