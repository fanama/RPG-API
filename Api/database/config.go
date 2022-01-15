package database

import (
	"encoding/json"
	"fmt"
	"os"
)

type Configuration struct {
	User     string `json:"user"`
	Password string `json:"password"`
	Port     int    `json:"port"`
	DB       string `json:"db"`
	Host     string `json:"host"`
}

func CreateConfig(fileName string) (conf Configuration, err error) {
	fmt.Println("CreatingFile...")

	file, err := os.Create(fileName + ".json")
	if err != nil {
		return conf, err
	}

	if os.Getenv("ENV") == "docker" {
		conf.Host = "localhost"
		conf.User = "root"
		conf.Password = "root"
		conf.Port = 3306
		conf.DB = "test"

		return conf, err
	}

	defer file.Close()
	fmt.Print("Enter Host:(db)")
	fmt.Scan(&conf.Host)
	fmt.Print("Enter Username:(root)")
	fmt.Scan(&conf.User)
	fmt.Print("Enter Password:(ewample) ")
	fmt.Scan(&conf.Password)
	fmt.Print("Enter  port :(3306)")
	fmt.Scan(&conf.Port)
	fmt.Print("Enter Database:(db)")
	fmt.Scan(&conf.DB)

	// if a value is empty, set it to default
	if conf.Host == "" {
		conf.Host = "localhost"
	}
	if conf.User == "" {
		conf.User = "root"
	}
	if conf.Password == "" {
		conf.Password = "root"
	}
	if conf.Port == 0 {
		conf.Port = 3306
	}
	if conf.DB == "" {
		conf.DB = "test"
	}

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "	")
	err = encoder.Encode(conf)
	if err != nil {
		return conf, err
	}

	return conf, err
}

func ReadConfig(filePath string) (conf Configuration, err error) {
	fmt.Println("Reading Config Files..." + filePath)

	file, err := os.Open(filePath + ".json")

	if err != nil {
		fmt.Println("File not found: ", err)
		return CreateConfig(filePath)
	}

	defer file.Close()

	decoder := json.NewDecoder(file)
	err = decoder.Decode(&conf)
	if err != nil {
		return conf, err
	}

	return conf, err

}
