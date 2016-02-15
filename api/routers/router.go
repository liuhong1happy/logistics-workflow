package routers

import (
	"github.com/liuhong1happy/logistics-workflow/api/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.HomeController{})
    beego.Router("/v1/u/login", &controllers.UserController{}, "post:UserLogin")
    beego.Router("/v1/u/logup", &controllers.UserController{}, "post:UserLogup")
    beego.Router("/v1/i/getinfo", &controllers.InfoController{}, "get:FindInfo")
    beego.Router("/v1/i/postinfo", &controllers.InfoController{}, "post:SaveInfo")
    beego.Router("/v1/m/getmsg", &controllers.MsgController{}, "get:FindMsg")
    beego.Router("/v1/m/postmsg", &controllers.MsgController{}, "post:SaveMsg")
}
