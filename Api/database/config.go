package database

type Configuration struct {
	User     string `json:"user"`
	Password string `json:"password"`
	Port     int    `json:"port"`
	DB       string `json:"db"`
	Host     string `json:"host"`
}
