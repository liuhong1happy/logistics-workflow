'use strict'
var SystemDispatcher = require('../dispatcher/system-dispatcher');
var {ActionTypes,EventTypes} = require('../constants/system-constants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// store model
var _send_info_list = [];
var _message_list = [];
var _user_info = {};
// form address
var _provinces = [];
var _address_form = {}
// form selection
var _category = {};
var _category_form = {}
var _date_picker_form = {}

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
	getMySendInfoByFormKey:function(form_key){
		var list = _send_info_list.filter(function(ele,pos){
			return ele.form_key == form_key;
		})
		if(list.length>0){
			return list[0];
		}else{
			return null
		}
	},
    getMyMessage:function(){
        return _message_list;
    },
	getUserInfo:function(){
		return _user_info;
	},
	setUserInfo:function(user_info){
		_user_info = user_info;
	},
	clearUserInfo:function(){
		_user_info = {};
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
    },
	getCategory:function(){
		return _category;
	},
	getCategoryByType:function(type){
		return _category[type]? _category[type] :_category;
	},
	getCategoryForm:function(){
		return _category_form;
	},
	getDatePickerForm:function(){
		return _date_picker_form;
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
		case ActionTypes.RECEIVED_CATEGORY:
			_category = action.data;
			SystemStore.emitChange(EventTypes.RECEIVED_CATEGORY);
			break;
		case ActionTypes.CHANGED_CATEGORY_FORM:
			var {category,type,back,name} = action.data
			var _categorys = _category[type].filter(function(ele,pos){
				return ele.value == category;
			})
			_category_form = {
				category:_categorys[0],
				type,
				back,
				name
			}
			SystemStore.emitChange(EventTypes.CHANGED_CATEGORY_FORM);
			break;
		case ActionTypes.CHANGED_DATE_PICKER_FORM:
			var {date,type,back,name} = action.data
			date = parseInt(date);
			_date_picker_form = {
				date:{
					date: new Date(date*1000),
					value: date,
					text: new Date(date*1000).Format("yyyy/MM/dd")
				},
				type,
				back,
				name
			}
			SystemStore.emitChange(EventTypes.CHANGED_DATE_PICKER_FORM);
			break;
		case ActionTypes.POSTED_SEND_SHIP_FORM:
			_send_info_list.push(action.data);
			SystemStore.emitChange(EventTypes.RECEIVED_MY_SEND_INFO);
			SystemStore.emitChange(EventTypes.POSTED_SEND_SHIP_FORM);
			break;
		case ActionTypes.POSTED_SEND_CARRY_FORM:
			_send_info_list.push(action.data);
			SystemStore.emitChange(EventTypes.RECEIVED_MY_SEND_INFO);
			SystemStore.emitChange(EventTypes.POSTED_SEND_CARRY_FORM);
			break;
    }
    
})

module.exports = SystemStore;