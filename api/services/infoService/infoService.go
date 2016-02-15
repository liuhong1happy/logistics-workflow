package infoService

import (
	"github.com/liuhong1happy/logistics-workflow/api/models/infoModel"
	"github.com/liuhong1happy/logistics-workflow/api/services"
	"github.com/liuhong1happy/logistics-workflow/api/utilities/helper"
	"github.com/liuhong1happy/logistics-workflow/api/utilities/mongo"
	log "github.com/goinggo/tracelog"
	"github.com/kelseyhightower/envconfig"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

//** TYPES

type (
	// buoyConfiguration contains information for running the buoy service.
	msgConfiguration struct {
		Database string
	}
)

//** PACKAGE VARIABLES

// Config provides buoy configuration.
var Config msgConfiguration

//** INIT

func init() {
	// Pull in the configuration.
	if err := envconfig.Process("logistics", &Config); err != nil {
		log.CompletedError(err, helper.MainGoRoutine, "Init")
	}
}

func FindInfo(service *services.Service, userID string) (*infoModel.Information, error) {
	log.Startedf(service.UserID, "FindInfo", "userID[%s]", userID)

	var information infoModel.Information
	f := func(collection *mgo.Collection) error {
		queryMap := bson.M{"user_id": userID}

		log.Trace(service.UserID, "FindInfo", "MGO : db.information.find(%s).limit(1)", mongo.ToString(queryMap))
		return collection.Find(queryMap).One(&information)
	}

	if err := service.DBAction(Config.Database, "information", f); err != nil {
		if err != mgo.ErrNotFound {
			log.CompletedError(err, service.UserID, "FindInfo")
			return nil, err
		}
	}

	log.Completedf(service.UserID, "FindInfo", "information%+v", &information)
	return &information, nil
}

func SaveInfo(service *services.Service,information infoModel.Information) (*infoModel.Information,error){
    log.Startedf(service.UserID, "SaveInfo", "UserID[%s]", information.CreatedBy)
	f := func(collection *mgo.Collection) error {
		
        if len(information.ID)>0{
            log.Trace(service.UserID, "SaveInfo", "MGO : db.information.update(%s)", mongo.ToString(information))
            return collection.Update(bson.M{"_id": information.ID}, &information)
        }else{
            log.Trace(service.UserID, "SaveInfo", "MGO : db.information.insert(%s)", mongo.ToString(information))
            return collection.Insert(&information)
        }
		
	}
	if err := service.DBAction(Config.Database, "information", f); err != nil {
		if err != mgo.ErrNotFound {
			log.CompletedError(err, service.UserID, "SaveInfo")
			return nil, err
		}
	}
	log.Completedf(service.UserID, "SaveInfo", "information%+v", &information)
	return &information, nil
}

