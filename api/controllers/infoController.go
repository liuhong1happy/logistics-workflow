// Copyright 2013 Ardan Studios. All rights reserved.
// Use of controller source code is governed by a BSD-style
// license that can be found in the LICENSE handle.

// Package controllers implements the controller layer for the buoy API.
package controllers

import (
	bc "github.com/liuhong1happy/logistics-workflow/api/controllers/baseController"
	"github.com/liuhong1happy/logistics-workflow/api/services/infoService"
    "github.com/liuhong1happy/logistics-workflow/api/models/infoModel"
	log "github.com/goinggo/tracelog"
)

//** TYPES

// BuoyController manages the API for buoy related functionality.
type InfoController struct {
	bc.BaseController
}

func (controller *InfoController) FindInfo() {
    if controller.AuthUser() == false {
        return
    }

    userID := controller.GetSession("UserID").(string)
	info, err := infoService.FindInfo(&controller.Service, userID)
	if err != nil {
		log.CompletedErrorf(err, controller.UserID, "InfoController.FindInfo", "UserID[%s]", userID)
		controller.ServeError(err)
		return
	}
    
	controller.Data["json"] = info
	controller.ServeJSON()
}
func (controller *InfoController) SaveInfo() {
	var params struct {
        ID string `form:"_id" valid:"Required; MinSize(6)" error:"invalid_id"`
		InfoType     string  `form:"info_type" valid:"Required; MinSize(6)" error:"invalid_info_type"`
		CreatedBy string   `form:"created_by" valid:"Required; MinSize(6)" error:"invalid_created_by"`
		CreatedTime   int64   `form:"created_time" valid:"Required; MinSize(6)" error:"invalid_win_settings"`
        Origin string    `form:"info_origin" valid:"Required; MinSize(6)" error:"invalid_info_origin"`
        Destination string   `form:"info_destination" valid:"Required; MinSize(6)" error:"invalid_info_destination"`
        Frequency string   `form:"info_frequency" valid:"Required; MinSize(6)" error:"invalid_info_frequency"`
        InfoContent string    `form:"info_content" valid:"Required; MinSize(6)" error:"invalid_info_content"`
        InfoTime int64   `form:"info_time" valid:"Required; MinSize(6)" error:"invalid_info_time"`
        Mobile string   `form:"info_mobile" valid:"Required; MinSize(6)" error:"invalid_info_mobile"`
        Wechat string   `form:"info_wechat" valid:"Required; MinSize(6)" error:"invalid_info_wechat"`
        QQ string   `form:"info_qq" valid:"Required; MinSize(6)" error:"invalid_info_qq"`
	}
        
    if controller.AuthUser() == false {
        return
    }

	if controller.ParseAndValidate(&params) == false {
		return
	}
    
    information := infoModel.Information{}
    if err := controller.ParseForm(&information); err != nil {
        return
    }
    
    // save msg
    resData, err := infoService.SaveInfo(&controller.Service, information)
    if err != nil {
        log.CompletedErrorf(err, controller.UserID, "InfoController.SaveInfo", "UserID[%s]", controller.UserID)
        controller.ServeError(err)
        return
    }
    
	controller.Data["json"] = resData
	controller.ServeJSON()
}