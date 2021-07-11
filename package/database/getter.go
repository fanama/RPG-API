package database

func GetAllUsers() []Hero {
	var heroes []Hero

	DB.Find(&heroes).Select("name")

	return heroes

}
