package database

func GetAllUsers() []Hero {
	var heroes []Hero

	DB.Find(&heroes).Select("name")

	return heroes

}

func GetHero(name string) Hero {
	var heroe Hero

	// fmt.SPrintln(name)

	DB.Where("Name=?", name).Find(&heroe)
	// fmt.Println(heroe)
	return heroe

}
