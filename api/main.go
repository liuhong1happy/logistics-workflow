package main

import (
	"github.com/astaxie/beego"
	"github.com/liuhong1happy/logistics-workflow/api/localize"
	_ "github.com/liuhong1happy/logistics-workflow/api/routers"
	"github.com/liuhong1happy/logistics-workflow/api/utilities/helper"
	"github.com/liuhong1happy/logistics-workflow/api/utilities/mongo"
	_ "github.com/astaxie/beego/session/redis" 
    "github.com/astaxie/beego/session"
    "github.com/goinggo/tracelog"
	"os"
)

var globalSessions *session.Manager

func main() {
        tracelog.Start(tracelog.LevelTrace)

        // Init mongo
        tracelog.Started("main", "Initializing Mongo")
        err := mongo.Startup(helper.MainGoRoutine)
        if err != nil {
            tracelog.CompletedError(err, helper.MainGoRoutine, "initApp")
            os.Exit(1)
        }

        // Load message strings
        localize.Init("en-US")
        // Load session settings
        beego.BConfig.WebConfig.Session.SessionOn = true
        globalSessions, _ = session.NewManager("redis",`{"cookieName":"gosessionid","gclifetime":3600,"ProviderConfig":"127.0.0.1:6379"}`)
		go globalSessions.GC()
		// Run server
        beego.Run()

        tracelog.Completed(helper.MainGoRoutine, "Website Shutdown")
        tracelog.Stop()
}