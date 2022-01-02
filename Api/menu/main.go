package menu

import (
	"fmt"
	"os"

	"github.com/fanama/RPG/Api/app"
)

func Start() *app.Context {
	var err error
	ctx := app.Context{}

	choices := map[int]string{
		1: "Mysql",
		2: "SQLite",
		// 3: "Postgres",
		0: "Exit",
	}

	// Display menu

	for key, value := range choices {
		fmt.Printf("%d. %s\n", key, value)
	}

	fmt.Printf("\nEnter your choice: ")
	var choice int
	fmt.Scanf("%d\n", &choice)

	switch choice {
	case 1:
		err = ctx.InitMysql()
		if err != nil {
			fmt.Println(err)
			os.Exit(1)
		}

		return &ctx

	case 2:
		err = ctx.InitSqlite()
		if err != nil {
			fmt.Println(err)
			os.Exit(1)
		}

		return &ctx

	case 0:
		fmt.Println("Exiting...")
		os.Exit(0)
	default:
		fmt.Println("Invalid choice")
	}
	return &ctx
}
