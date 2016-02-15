package msgService

import (
	"github.com/liuhong1happy/logistics-workflow/api/models/msgModel"
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
	// buoyConfiguration contains message for running the buoy service.
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

func FindMsg(service *services.Service, userID string) (*msgModel.Message, error) {
	log.Startedf(service.UserID, "FindMsg", "userID[%s]", userID)

	var message msgModel.Message
	f := func(collection *mgo.Collection) error {
		queryMap := bson.M{"user_id": userID}

		log.Trace(service.UserID, "FindMsg", "MGO : db.message.find(%s).limit(1)", mongo.ToString(queryMap))
		return collection.Find(queryMap).One(&message)
	}

	if err := service.DBAction(Config.Database, "message", f); err != nil {
		if err != mgo.ErrNotFound {
			log.CompletedError(err, service.UserID, "FindMsg")
			return nil, err
		}
	}

	log.Completedf(service.UserID, "FindMsg", "message%+v", &message)
	return &message, nil
}

func SaveMsg(service *services.Service,message msgModel.Message) (*msgModel.Message,error){
    log.Startedf(service.UserID, "SaveMsg", "UserID[%s]", message.CreatedBy)
	f := func(collection *mgo.Collection) error {
		
        if len(message.ID)>0{
            log.Trace(service.UserID, "SaveMsg", "MGO : db.message.update(%s)", mongo.ToString(message))
            return collection.Update(bson.M{"_id": message.ID}, &message)
        }else{
            log.Trace(service.UserID, "SaveMsg", "MGO : db.message.insert(%s)", mongo.ToString(message))
            return collection.Insert(&message)
        }
		
	}
	if err := service.DBAction(Config.Database, "message", f); err != nil {
		if err != mgo.ErrNotFound {
			log.CompletedError(err, service.UserID, "SaveMsg")
			return nil, err
		}
	}
	log.Completedf(service.UserID, "SaveMsg", "message%+v", &message)
	return &message, nil
}

