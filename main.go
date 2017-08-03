package main

import (
	"github.com/MrHuxu/gallery/server/web"
)

func main() {
	server := web.NewServer(9011, "server/web/templates/*", "server/public")
	server.Run()
}
