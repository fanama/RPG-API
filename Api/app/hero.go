package app

import "github.com/fanama/RPG/Api/domain"

func (c *Context) GetHero(name string) (domain.Hero, error) {
	return c.Database.GetHero(name)

}
func (c *Context) GetHeros() ([]domain.Hero, error) {
	return c.Database.GetHeroes()

}
func (c *Context) CreateHero(hero *domain.Hero) error {
	return c.Database.CreateHero(hero)
}

func (c *Context) UpdateHero(hero *domain.Hero) error {
	return nil
}
