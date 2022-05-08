package app

import "github.com/fanama/RPG/Api/domain"

func (c *Context) UserTable() (err error) {
	return c.Database.CreateTable(domain.User{})

}
