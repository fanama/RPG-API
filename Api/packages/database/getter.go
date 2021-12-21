package database

import (
	. "github.com/fanama/next-react/Api/packages/database/types"
	"gorm.io/gorm"
)

func GetTables(db *gorm.DB) (tables []string, err error) {

	err = db.Table("information_schema.tables").Select("table_name").Find(&tables).Error

	return tables, err
}

func GetUsers(db *gorm.DB) (users []User, err error) {

	err = db.Table("users").Find(&users).Error

	return users, err
}
