package infoModel

import (
	"gopkg.in/mgo.v2/bson"
)

//** TYPES
type (
	Information struct {
		ID        bson.ObjectId `bson:"_id,omitempty"`
		InfoType     string `bson:"info_type" json:"info_type"`
		CreatedBy string  `bson:"created_by" json:"created_by"`
		CreatedTime   int64  `bson:"created_time" json:"created_time"`
        Origin string  `bson:"info_origin" json:"info_origin"`
        Destination string `bson:"info_destination" json:"info_destination"`
        Frequency string `bson:"info_frequency" json:"info_frequency"`
        InfoContent string  `bson:"info_content" json:"info_content"`
        InfoTime int64 `bson:"info_time" json:"info_time"`
        Mobile string `bson:"info_mobile" json:"info_mobile"`
        Wechat string `bson:"info_wechat" json:"info_wechat"`
        QQ string `bson:"info_qq" json:"info_qq"`
	}
)