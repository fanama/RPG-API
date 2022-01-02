package app

import (
	"fmt"

	"github.com/fanama/RPG/Api/database"
)

type Context struct {
	Database database.Manager
}

func (c *Context) InitMysql() (err error) {

	err = c.Database.InitMysqlDB()
	if err != nil {
		return err
	}

	return nil
}

func (c *Context) InitSqlite() (err error) {

	var conf string

	fmt.Println("Enter the path of the sqlite database:")
	_, err = fmt.Scan(&conf)

	if err != nil {
		return err
	}
	err = c.Database.InitSqliteDB(conf)
	if err != nil {
		return err
	}

	return nil
}
