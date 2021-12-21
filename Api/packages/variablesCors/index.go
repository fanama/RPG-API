package variablesCors

import (
	"encoding/json"
	"fmt"
	"os"
)

func InitConfig() (cors Configuration,err error) {

	fmt.Println("ReadingFiles...")

	file, err := os.Open("conf/cors.json")
	if err != nil {
		file, err = os.Open("../../conf/cors.json")
	}
	if err != nil {
		return cors,err
	}

	defer file.Close()

	decoder := json.NewDecoder(file)
	err = decoder.Decode(&cors)
	if err != nil {
		return cors,err
	}

	return cors,err
}
