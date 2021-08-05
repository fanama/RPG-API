package database

func UpdateHero(hero Hero) {
	DB.Save(&hero)
}
