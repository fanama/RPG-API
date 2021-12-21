package model

type Hero struct {
	ID           int    `gorm:"primaryKey;column:id;autoIncrement:true;"`
	Name         string `gorm:"primaryKey;column:name;"`
	Race         string `gorm:"default:unknown;column:race;"`
	Lifepoint    int    `gorm:"default:10;column:lifepoint;"`
	Armor        int    `gorm:"default:10;column:armor;"`
	Force        int    `gorm:"default:10;column:force;"`
	Vitesse      int    `gorm:"default:10;column:vitesse;"`
	Constitution int    `gorm:"default:10;column:constitution;"`
	Magie        int    `gorm:"default:10;column:magie;"`
	Controle     int    `gorm:"default:10;column:controle;"`
	Intelligence int    `gorm:"default:10;column:intelligence;"`
	Sagesse      int    `gorm:"default:10;column:sagesse;"`
	Charisme     int    `gorm:"default:10;column:charisma;"`
	Owner        string `gorm:"default:master;column:ower;"`
}
