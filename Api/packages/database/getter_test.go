package database

import "testing"

func TestGetUsers(t *testing.T) {

	db, err := InitSqliteDB()

	if err != nil {
		t.Error(err)
	}

	users, err := GetUsers(&db)

	if err != nil {
		t.Error(err)
	}

	if len(users) == 0 {
		t.Error("GetUsers() failed")
		return
	}

	t.Log("GetUsers() success", users)
}
