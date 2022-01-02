package routes

import (
	"github.com/fanama/RPG/Api/app"
	"github.com/fanama/RPG/Api/domain"
)

type Router struct {
	ctx *app.Context
}

func (r *Router) Init(ctx *app.Context) {
	r.ctx = ctx
	r.ctx.UserTable()
	r.ctx.Database.CreateTable(domain.Hero{})

}
