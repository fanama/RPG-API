package database

import (
	"testing"
)

func TestMysqlDatabase(t *testing.T) {

	db, _ := InitMysqlDB()

	_, err := GetTables(&db)

	if err != nil {
		t.Errorf("erreur : %v", err.Error())

	}

}

func TestSqliteDatabase(t *testing.T) {

	_, err := InitSqliteDB("sql")

	if err != nil {
		t.Errorf("erreur : %v", err.Error())
	}

}

func TestCreateUserTable(t *testing.T) {

	db, _ := InitMysqlDB()

	err := CreateUserTable(&db)

	if err != nil {
		t.Errorf("erreur : %v", err.Error())

	}

}

func TestCreateRoleTable(t *testing.T) {

	db, _ := InitSqliteDB()

	err := CreateRoleTable(&db)

	if err != nil {
		t.Errorf("erreur : %v", err.Error())

	}

}

func TestCreateTable(t *testing.T) {

	db, _ := InitSqliteDB()

	type User struct {
		Id       int
		Username string
		Password string
	}

	err := CreateTable(&db, "users", User{})

	if err != nil {
		t.Errorf("C'ant create database : %v", err.Error())

	}

	tables, err := GetTables(&db)

	if err != nil {
		t.Errorf("can't get error : %v", err.Error())

	}

	if len(tables) <= 1 {
		t.Errorf("erreur : %v", err.Error())

	}

	t.Logf("success : %v", tables)

}
