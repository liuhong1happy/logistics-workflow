// Copyright 2013 Ardan Studios. All rights reserved.
// Use of controller source code is governed by a BSD-style
// license that can be found in the LICENSE handle.

// Package controllers implements the controller layer for the buoy API.
package controllers

import (
	bc "github.com/liuhong1happy/logistics-workflow/api/controllers/baseController"
	"github.com/liuhong1happy/logistics-workflow/api/services/msgService"
    "github.com/liuhong1happy/logistics-workflow/api/models/msgModel"
	log "github.com/goinggo/tracelog"
)

//** TYPES

// BuoyController manages the API for buoy related functionality.
type MsgController struct {
	bc.BaseController
}

func (controller *MsgController) FindMsg() {
    if controller.AuthUser() == false {
        return
    }

    userID := controller.GetSession("UserID").(string)
	settings, err := msgService.FindMsg(&controller.Service, userID)
	if err != nil {
		log.CompletedErrorf(err, controller.UserID, "MsgController.FindMsg", "UserID[%s]", userID)
		controller.ServeError(err)
		return
	}
    
	controller.Data["json"] = settings
	controller.ServeJSON()
}
func (controller *MsgController) SaveMsg() {
	var params struct {
        ID string `form:"_id" valid:"Required; MinSize(6)" error:"invalid_id"`
		MsgType     string  `form:"msg_type" valid:"Required; MinSize(6)" error:"invalid_msg_type"`
		CreatedBy string   `form:"created_by" valid:"Required; MinSize(6)" error:"invalid_created_by"`
		CreatedTime   int64   `form:"created_time" valid:"Required; MinSize(6)" error:"invalid_win_settings"`
        PushObject string   `form:"push_object" valid:"Required; MinSize(6)" error:"invalid_push_object"`
        PushTime string  `form:"push_time" valid:"Required; MinSize(6)" error:"invalid_push_time"`
        HasPushed string  `form:"has_pushed" valid:"Required; MinSize(6)" error:"invalid_has_pushed"`
        MsgContent string   `form:"msg_content" valid:"Required; MinSize(6)" error:"invalid_msg_content"`
        HasViewed int64  `form:"has_viewed" valid:"Required; MinSize(6)" error:"invalid_has_viewed"`
	}
        
    if controller.AuthUser() == false {
        return
    }

	if controller.ParseAndValidate(&params) == false {
		return
	}
    
    message := msgModel.Message{}
    if err := controller.ParseForm(&message); err != nil {
        return
    }
    
    // save msg
    resData, err := msgService.SaveMsg(&controller.Service, message)
    if err != nil {
        log.CompletedErrorf(err, controller.UserID, "MsgController.SaveMsg", "UserID[%s]", controller.UserID)
        controller.ServeError(err)
        return
    }
    
	controller.Data["json"] = resData
	controller.ServeJSON()
}

