'use strict'
var systemActions = require('../actions/system-actions');
var localStorageUtils = require('./local-storage-utils');

var Ajax = function(options){
    fetch(options.url,{
        method:options.type,
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(options.data),
    })
    .then((response)=> response.text())
    .then((responseText)=>{
        console.log(responseText);
        options.success(responseText);
    })
    .catch((error)=>{
        console.log(error);
        options.error('error',error);
    })
}

module.exports = {
    getMySendInfo:function(){
        
    },
    getMyMessage:function(){
        
    },
	userLogout:function(formData){
		localStorageUtils.setData("user_info",{});
		systemActions.receivedUserInfo({});
	},
	userLogin:function(formData){
		localStorageUtils.setData("user_info",formData);
        systemActions.postedUserLoginForm(formData);
	},
	postSendCarryForm:function(formData){
		localStorageUtils.getData(function(error,json){
			var data = JSON.parse(json);
			if(data && data.my_send_info){
				data.my_send_info = data.my_send_info?data.my_send_info:[];
				data.my_send_info.push(formData);
				localStorageUtils.setData("my_send_info",data.my_send_info);
			}
	  });
		systemActions.postedSendCarryForm(formData);
	},
	postSendShipForm:function(formData){
		localStorageUtils.getData(function(error,json){
			var data = JSON.parse(json);
			if(data && data.my_send_info){
				data.my_send_info = data.my_send_info?data.my_send_info:[];
				data.my_send_info.push(formData);
				localStorageUtils.setData("my_send_info",data.my_send_info);
			}
	  });
		systemActions.postedSendShipForm(formData);
	},
    initData:function(){
//        localStorageUtils.setData();
        localStorageUtils.getData(function(error,json){
            var data = JSON.parse(json);
            if(data && data.user_info){
                systemActions.receivedUserInfo(data.user_info);
                systemActions.receivedMySendInfo(data.my_send_info);
                systemActions.receivedMyMessage(data.my_message);
				systemActions.receivedProvinces(data.provinces);
				systemActions.receivedCategory(data.category);
            }  
        });
    }
}