package database

import (
	"testing"

	"github.com/fanama/next-react/Api/packages/database/types"
)

func TestCreateUser(t *testing.T) {
	db, err := InitSqliteDB("test")

	if err != nil {
		t.Error(err)
	}

	user := types.User{
		Name:     "test",
		Password: "test",
	}

	err = CreateUser(&db, user)

	if err != nil {
		t.Error(err)
	}
}
