package database

func NewHero(hero Hero) {
	DB.Create(&hero)
}
