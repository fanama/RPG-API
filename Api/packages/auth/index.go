package auth

import (
	"encoding/json"
	"os"

	. "github.com/fanama/next-react/Api/packages/auth/types"
)

func Init() (conf Configuration,err error) {
	file, err := os.Open("conf/auth.json")

	if err != nil {
		file, err = os.Open("../../conf/auth.json")
	}
	if err != nil {
		return conf,err
	}

	defer file.Close()

	decoder := json.NewDecoder(file)
	err = decoder.Decode(&conf)
	if err != nil {
		return conf,err
	}

	return conf,err
}
