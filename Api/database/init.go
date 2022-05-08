package database

import (
	"fmt"
	"os"
	"strconv"

	"gorm.io/driver/mysql"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func (m *Manager) InitMysqlDB() (err error) {
	portdb, _ := strconv.Atoi(os.Getenv("PORTDB"))
	conf := Configuration{
		User:     os.Getenv("USERDB"),
		Password: os.Getenv("PASSWORDDB"),
		Port:     portdb,
		DB:       os.Getenv("DATABASE"),
		Host:     os.Getenv("HOSTDB"),
	}

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local", conf.User, conf.Password, conf.Host, conf.Port, conf.DB)
	m.db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Silent),
	})

	return err
}

func (m *Manager) InitSqliteDB(name string) (err error) {

	m.db, err = gorm.Open(sqlite.Open(name+".db"), &gorm.Config{
		// Logger: logger.Default.LogMode(logger.Silent),
	})

	return err
}

func (m Manager) Close() {
	sqlDB, err := m.db.DB()

	if err != nil {
		os.Exit(1)
	}

	sqlDB.Close()
}
