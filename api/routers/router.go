package routers

import (
	"github.com/liuhong1happy/logistics-workflow/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
}
