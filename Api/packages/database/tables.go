package database

import (
	. "github.com/fanama/next-react/Api/packages/database/types"
	"gorm.io/gorm"
)

func CreateUserTable(db *gorm.DB) (err error) {

	err = db.Table("users").AutoMigrate(&User{})

	return err
}

func CreateRoleTable(db *gorm.DB) (err error) {

	err = db.Table("role_table").AutoMigrate(&Role{})

	return err
}

func CreateTable(db *gorm.DB, name string, schema interface{}) (err error) {

	err = db.Table(name).AutoMigrate(&schema)

	return err

}
