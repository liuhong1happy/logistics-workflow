package controllers

import (
	bc "github.com/liuhong1happy/logistics-workflow/api/controllers/baseController"
	"github.com/liuhong1happy/logistics-workflow/api/services/userService"
    "github.com/liuhong1happy/logistics-workflow/api/models/userModel"
	log "github.com/goinggo/tracelog"
)

type UserController struct {
	bc.BaseController
}

func (controller *UserController) UserLogin() {
	var params struct {
		UserName string `form:"user_name" valid:"Required; MinSize(4)" error:"invalid_user_name"`
        UserPwd string `form:"user_pwd" valid:"Required; MinSize(6)" error:"invalid_user_pwd"`
	}

	if controller.ParseAndValidate(&params) == false {
		return
	}

	userInfo, err := userService.UserLogin(&controller.Service, params.UserName,params.UserPwd)
	if err != nil {
		log.CompletedErrorf(err, controller.UserID, "UserController.UserLogin", "UserName[%s]", params.UserName)
		controller.ServeError(err)
		return
	}

    // set session
    if len(userInfo.ID)>0{
        log.Trace("UserController","UserLogin","userID[%s]",userInfo.ID.Hex())
        controller.SetSession("UserID", userInfo.ID.Hex())
    }
	controller.Data["json"] = userInfo
	controller.ServeJSON()
}
func (controller *UserController) UserLogup(){
	var params struct {
		UserName string `form:"user_name" valid:"Required; MinSize(4)" error:"invalid_user_name"`
        UserPwd string `form:"user_pwd" valid:"Required; MinSize(6)" error:"invalid_user_pwd"`
        UserMobile string `form:"user_mobile" valid:"Required; MinSize(6)" error:"invalid_user_mobile"`
        UserQQ string `form:"user_qq" valid:"Required; MinSize(6)" error:"invalid_user_qq"`
        UserWechat string `form:"user_wechat" valid:"Required; MinSize(6)" error:"invalid_user_wechat"`
        UserEmail string `form:"user_email" valid:"Required; MinSize(6)" error:"invalid_user_email"`
	}

	if controller.ParseAndValidate(&params) == false {
		return
	}

    userInfo := userModel.UserInfo{}
    if err := controller.ParseForm(&userInfo); err != nil {
        return
    }
    
	resData, err := userService.UserLogup(&controller.Service, userInfo)
	if err != nil {
		log.CompletedErrorf(err, controller.UserID, "UserController.UserLogup", "UserName[%s]", params.UserName)
		controller.ServeError(err)
		return
	}
    
	controller.Data["json"] = resData
	controller.ServeJSON()
}