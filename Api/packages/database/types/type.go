package types

type Configuration struct {
	UserDb     string `json:"USER_DB"`
	PasswordDb string `json:"PASSWORD_DB"`
	PortDb     int    `json:"PORT_DB"`
	DbName     string `json:"DB_NAME"`
	HostDb     string `json:"HOST_DB"`
}

type User struct {
	ID       int
	Name     string `gorm:"column:username;unique"`
	Password string `gorm:"column:password"`
}

type Role struct {
	ID    int
	Name  string `gorm:"column:nom;unique"`
	Order int    `gorm:"column:ordre:unique"`
}
