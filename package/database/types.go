package database

type Hero struct {
	ID           int    `gorm:"primaryKey"`
	Name         string `gorm:"default:mob"`
	Race         string `gorm:"default:unknown"`
	Lifepoint    int    `gorm:"default:10"`
	Armor        int    `gorm:"default:10"`
	Force        int    `gorm:"default:10"`
	Vitesse      int    `gorm:"default:10"`
	Constitution int    `gorm:"default:10"`
	Magie        int    `gorm:"default:10"`
	Controle     int    `gorm:"default:10"`
	Inteligence  int    `gorm:"default:10"`
	Sagesse      int    `gorm:"default:10"`
	Charisme     int    `gorm:"default:10"`
	Owner        string `gorm:"default:master"`
}

type Configuration struct {
	HostDB     string
	PortDB     int
	UserDB     string
	PasswordDB string
	DatabaseDB string
}
