'use strict';
var LocalStorageManager = require('./local-storage-manager');

var data = {
    user_info:{},
    my_send_info:[
        {
            source:"成都",
            target:"上海",
            mobile:"13366668888",
            details:{}
        }
    ],
    my_message:[
        {
            type:"send-info",
            title:"发布承运信息",
            subtitle:"发布成都到上海的承运信息，时间2016年4月1日上午9点出发，预计4月2日下午5点到上海。",
            details:{}
        }
    ]
}

var manager = new LocalStorageManager();
module.exports = {
    setData:function(type,details){
		if(type) data[type] = details;
        manager.setData(data,function(error){
            console.log(error);
        });
    },
    getData:function(callback){
        manager.getData(function(error,result){
            callback(error,result)
        });
    }
}