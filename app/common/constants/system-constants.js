'use strict'
var keyMirror = require('keymirror');

module.exports = {
    ActionTypes:keyMirror({
        RECEIVED_MY_SEND_INFO:null,
        RECEIVED_MY_MESSAGE:null,
        RECEIVED_USER_INFO:null,
        POSTED_USER_LOGIN_FORM:null,
		RECEIVED_PROVINCES:null
    }),
    EventTypes:keyMirror({
        RECEIVED_MY_SEND_INFO:null,
        RECEIVED_MY_MESSAGE:null,
        RECEIVED_USER_INFO:null,
        POSTED_USER_LOGIN_FORM:null,
		RECEIVED_PROVINCES:null
    })
}