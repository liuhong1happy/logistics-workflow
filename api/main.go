package main

import (
	"github.com/astaxie/beego"
    _ "github.com/astaxie/beego/session/redis"
	"github.com/liuhong1happy/logistics-workflow/api/localize"
	_ "github.com/liuhong1happy/logistics-workflow/api/routers"
	"github.com/liuhong1happy/logistics-workflow/api/utilities/helper"
	"github.com/liuhong1happy/logistics-workflow/api/utilities/mongo"
    "github.com/goinggo/tracelog"
	"os"
)


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
        
        beego.Run()

        tracelog.Completed(helper.MainGoRoutine, "Website Shutdown")
        tracelog.Stop()
}

