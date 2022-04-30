package domain

import "gorm.io/gorm"

type Hero struct {
	ID           int    `gorm:"primaryKey;autoIncrement:true;" json:"id"`
	Name         string `gorm:"default:blob;unique" json:"name"`
	Race         string `gorm:"default:human" json:"race"`
	Lifepoint    int    `gorm:"default:10" json:"lifepoint"`
	Armor        int    `gorm:"default:10" json:"armor"`
	Force        int    `gorm:"default:10" json:"force"`
	Vitesse      int    `gorm:"default:10" json:"vitesse"`
	Constitution int    `gorm:"default:10" json:"constitution"`
	Magie        int    `gorm:"default:10" json:"magie"`
	Controle     int    `gorm:"default:10" json:"controle"`
	Inteligence  int    `gorm:"default:10" json:"inteligence"`
	Sagesse      int    `gorm:"default:10" json:"sagesse"`
	Charisme     int    `gorm:"default:10" json:"charisme"`
	Owner        string `gorm:"default:master" json:"owner"`
}

type Manager struct {
	db *gorm.DB
}
type User struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}
