package menu

import (
	"fmt"
	"os"

	"github.com/fanama/RPG/Api/app"
)

// run mysql context
func Mysql() *app.Context {
	ctx := app.Context{}
	err := ctx.InitMysql()
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	return &ctx
}

// run sqlite context
func Sqlite() *app.Context {
	ctx := app.Context{}
	err := ctx.InitSqlite()
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	return &ctx
}

func Start() *app.Context {
	var err error
	ctx := app.Context{}

	choices := map[int]string{
		1: "Mysql",
		2: "SQLite",
		0: "Exit",
	}

	// Display menu

	for key, value := range choices {
		fmt.Printf("%d. %s\n", key, value)
	}

	var choice int
	if os.Getenv("ENV") == "docker" {
		fmt.Println("==========================")
		fmt.Println("env: ", os.Getenv("ENV"))
		fmt.Println("==========================")
		choice = 0
	} else {
		fmt.Printf("\nEnter your choice: ")
		fmt.Scanf("%d\n", &choice)

	}

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

		if os.Getenv("ENV") == "docker" {
			// os.Exit(0)
			err = ctx.InitMysql()
			if err != nil {
				fmt.Println(err)
				os.Exit(1)
			}

			fmt.Println("==========================")
			fmt.Println("== HELLO DOCKER==")
			fmt.Println("==========================")

			return &ctx

		}
		os.Exit(0)

	default:
		fmt.Println("Invalid choice")
	}
	return &ctx
}
