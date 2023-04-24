package main

import (
	"log"
	"server/db"
	"server/internal/user"
	"server/router"

	_ "github.com/golang-migrate/migrate/v4/source/file"
	_ "github.com/lib/pq"
)

func main() {

	dbConn, err := db.NewDatabase()

	if err != nil {
		log.Fatalf("Could not initialize db connection %s", err)

	}
	userRep := user.NewRepository(dbConn.GetDb())
	userServ := user.NewService(userRep)
	userHandler := user.NewHandler(userServ)

	router.InitRouter(userHandler)
	router.Start("0.0.0.0:8080")

	// m, err := migrate.NewWithDatabaseInstance(
	// 	"file:///migrations",
	// 	"postgres", driver)
	// m.Up()
	// if err != nil {
	// 	log.Fatalf("Could not initialize db connection %s", err)
	// }

}
