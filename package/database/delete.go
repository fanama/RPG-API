package database

import "log"

func DeleteHero(hero Hero) {

	DB.Delete(&hero)

	var found Hero

	DB.Where("Name=?", hero.Name).Find(&found)

	log.Println("deleting ?", hero, found)

}
