'use strict'
var SystemDispatcher = require('../dispatcher/system-dispatcher');
var {ActionTypes,EventTypes} = require('../constants/system-constants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// store model
var _send_info_list = [];
var _message_list = [];
var _user_info = {};
var _provinces = [];
// form address
var _address_form = {}

var SystemStore = assign({},EventEmitter.prototype,{
    emitChange:function(type){
        this.emit(type);
    },
    addChangeListener:function(type,callback){
        this.on(type,callback);
    },
    removeChangeListener:function(type,callback){
        this.removeListener(type,callback)
    },
    getMySendInfo:function(){
        return _send_info_list;
    },
    getMyMessage:function(){
        return _message_list;
    },
	getUserInfo:function(){
		return _user_info;
	},
	getProvinces:function(){
		var provinces = [];
		for(var i=0;i<_provinces.length;i++){
			provinces.push({
				text:_provinces[i].text,
				value:_provinces[i].value
			})
		}
		return provinces;
	},
	getCities:function(province){
		if(!province) return [];
		var provinces = _provinces.filter(function(ele,pos){
			return province.value==ele.value;
		})
		if(provinces.length>0){
			return provinces[0].cities?provinces[0].cities:[];
		}else{
			return [];
		}
	},
    getAddressForm:function(){
        return _address_form;
    }
})

SystemStore.dispatchToken = SystemDispatcher.register(function(action){
    switch(action.type){
        case ActionTypes.RECEIVED_MY_SEND_INFO:
            _send_info_list = action.data;
            SystemStore.emitChange(EventTypes.RECEIVED_MY_SEND_INFO);
            break;
        case ActionTypes.RECEIVED_MY_MESSAGE:
            _message_list = action.data;
            SystemStore.emitChange(EventTypes.RECEIVED_MY_MESSAGE);
            break;
        case ActionTypes.RECEIVED_USER_INFO:
            _user_info = action.data;
            SystemStore.emitChange(EventTypes.RECEIVED_USER_INFO);
            break;
        case ActionTypes.POSTED_USER_LOGIN_FORM:
            var data = action.data;
            SystemStore.emitChange(EventTypes.POSTED_USER_LOGIN_FORM);
            break;
		case ActionTypes.RECEIVED_PROVINCES:
			_provinces = action.data;
            SystemStore.emitChange(EventTypes.RECEIVED_PROVINCES);
            break;
        case ActionTypes.CHANGED_ADDRESS_FORM:
            var {province,city,type,back,name} = action.data
            var __provinces = _provinces.filter(function(ele,pos){
                return ele.value == province;
            })
           var __cities = __provinces[0].cities.filter(function(ele,pos){
                return ele.value == city;
            })
           _address_form = {
               type,
               back,
               name,
               province:__provinces[0],
               city:__cities[0]
           }
            SystemStore.emitChange(EventTypes.CHANGED_ADDRESS_FORM);
            break;
    }
    
})

module.exports = SystemStore;