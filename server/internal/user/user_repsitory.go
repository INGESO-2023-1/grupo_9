package user

import (
	"context"
	"database/sql"
)

type DBTX interface {
	ExecContext(ctx context.Context, query string, args ...interface{}) (sql.Result, error)
	PrepareContext(context.Context, string) (*sql.Stmt, error)
	QueryContext(context.Context, string, ...interface{}) (*sql.Rows, error)
	QueryRowContext(context.Context, string, ...interface{}) *sql.Row
}

type repository struct {
	db DBTX
}

func newRepository(db DBTX) Repository {
	return &repository{db: db}

}

func (r *repository) CreateUser(ctx context.Context, user *User) (*User, error) {
	var lastId int
	query := "INSERT INTO users(username,password,email) values ($1,$2,$3) returning id"
	err := r.db.QueryRowContext(ctx, query, user.Username, user.Password, user.Email).Scan(&lastId)
	if err != nil {
		return &User{}, err
	}
	user.ID = int64(lastId)
	return user, err
}
