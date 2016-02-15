package msgModel

import (
	"gopkg.in/mgo.v2/bson"
)

//** TYPES
type (
	Message struct {
		ID        bson.ObjectId `bson:"_id,omitempty"`
		MsgType     string `bson:"msg_type" json:"msg_type"`
		CreatedBy string  `bson:"created_by" json:"created_by"`
		CreatedTime   int64  `bson:"created_time" json:"created_time"`
        PushObject string  `bson:"push_object" json:"push_object"`
        PushTime string `bson:"push_time" json:"push_time"`
        HasPushed string `bson:"has_pushed" json:"push_time"`
        MsgContent string  `bson:"msg_content" json:"msg_content"`
        HasViewed int64 `bson:"has_viewed" json:"has_viewed"`
	}
)