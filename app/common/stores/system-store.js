var SystemDispatcher = require('../dispatcher/system-dispatcher');
var SystemConstants = require('../constants/system-constants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = SystemConstants.ActionTypes;
var EventTypes = SystemConstants.EventTypes;


// store model
var _send_info_list = [];
var _message_list = [];
var _user_info = {}

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
    }
    
})

module.exports = SystemStore;