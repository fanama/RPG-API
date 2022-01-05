package database

import (
	"fmt"

	"github.com/fanama/RPG/Api/domain"
)

func (m Manager) InitHero() error {

	err := m.db.AutoMigrate(&domain.Hero{})

	return err
}

func (m Manager) CreateHero(hero *domain.Hero) error {
	return m.db.Create(&hero).Error

}

func (m Manager) GetHero(name string) (domain.Hero, error) {
	var hero domain.Hero
	err := m.db.Find(&hero, domain.Hero{Name: name}).Error
	return hero, err
}

func (m Manager) GetHeroes() ([]domain.Hero, error) {
	var heroes []domain.Hero
	err := m.db.Find(&heroes).Error
	return heroes, err
}

func (m Manager) UpdateHero(hero *domain.Hero) error {
	return m.db.Save(&hero).Error
}

func (m Manager) DeleteHero(name string) error {
	fmt.Println("delete hero : ", name)
	return m.db.Where("name=?", name).Delete(&domain.Hero{}).Error
}
