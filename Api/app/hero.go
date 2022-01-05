package app

import (
	"fmt"

	"github.com/fanama/RPG/Api/domain"
)

func (c *Context) GetHero(name string) (domain.Hero, error) {
	hero, err := c.Database.GetHero(name)

	if err != nil {
		return domain.Hero{}, err
	}

	if hero.Name == "" {
		return domain.Hero{}, fmt.Errorf("Hero not found")
	}

	return hero, err

}
func (c *Context) GetHeros() ([]domain.Hero, error) {
	return c.Database.GetHeroes()

}
func (c *Context) CreateHero(hero *domain.Hero) error {
	return c.Database.CreateHero(hero)
}

func (c *Context) UpdateHero(hero *domain.Hero) error {
	return c.Database.UpdateHero(hero)
}

func (c *Context) DeleteHero(name string) error {
	fmt.Println("delete hero : ", name)
	return c.Database.DeleteHero(name)
}
