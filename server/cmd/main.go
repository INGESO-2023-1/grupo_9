package main

import (
	"log"
	"server/db"

	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	_ "github.com/lib/pq"
)

func main() {
	dataB, err := db.NewDatabase()
	if err != nil {
		log.Fatalf("Could not initialize db connection %s", err)

	}
	driver, err := postgres.WithInstance(dataB.GetDb(), &postgres.Config{})

	m, err := migrate.NewWithDatabaseInstance(
		"file:///migrations",
		"postgres", driver)
	m.Up()
	if err != nil {
		log.Fatalf("Could not initialize db connection %s", err)
	}

}
