package server

import (
	"encoding/json"
	"fmt"
	"os"
)

type Config struct {
	Origin string `json:"origin"`
	Method string `json:"method"`
	Port   string `json:"port"`
}

func createConfigFile(fileName string) (conf Config, err error) {
	fmt.Println("CreatingFile...")

	file, err := os.Create(fileName + ".json")
	if err != nil {
		return conf, err
	}

	defer file.Close()

	//input the config data
	fmt.Println("Please input the config data:")
	fmt.Println("Origin:")
	fmt.Scan(&conf.Origin)
	fmt.Print("Method:")
	fmt.Scan(&conf.Method)
	fmt.Println("Port:")
	fmt.Scan(&conf.Port)

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "	")
	err = encoder.Encode(conf)
	if err != nil {
		return conf, err
	}

	return conf, err
}

func ReadConfig(filePath string) (conf Config, err error) {
	fmt.Println("ReadingFiles...")

	file, err := os.Open(filePath + ".json")

	if err != nil {
		return createConfigFile(filePath)
	}

	defer file.Close()

	decoder := json.NewDecoder(file)
	err = decoder.Decode(&conf)
	if err != nil {
		return conf, err
	}

	return conf, err

}
