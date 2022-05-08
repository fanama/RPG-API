package database

import "gorm.io/gorm"

type Manager struct {
	db *gorm.DB
}
