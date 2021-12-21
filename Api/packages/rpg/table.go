package rpg

import (
	. "github.com/fanama/next-react/Api/packages/rpg/model"
	"gorm.io/gorm"
)

func CreateHeroTable(db *gorm.DB) (err error) {
	err = db.Table("hero").AutoMigrate(&Hero{})

	return err

}
