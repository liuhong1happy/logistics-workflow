var SystemDispatcher = require('../dispatcher/system-dispatcher');
var SystemConstants = require('../constants/system-constants');

var ActionTypes = SystemConstants.ActionTypes;

module.exports = {
    receivedMySendInfo:function(data){
        SystemDispatcher.dispatch({
            type:ActionTypes.RECEIVED_MY_SEND_INFO,
            data:data
        })
    },
    receivedMyMessage:function(data){
        SystemDispatcher.dispatch({
            type:ActionTypes.RECEIVED_MY_MESSAGE,
            data:data
        })
    },
    receivedUserInfo:function(data){
        SystemDispatcher.dispatch({
            type:ActionTypes.RECEIVED_USER_INFO,
            data:data
        })
    }
}