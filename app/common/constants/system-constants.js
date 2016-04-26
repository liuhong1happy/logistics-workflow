'use strict'
var keyMirror = require('keymirror');

module.exports = {
    ActionTypes:keyMirror({
        RECEIVED_MY_SEND_INFO:null,
        RECEIVED_MY_MESSAGE:null,
        RECEIVED_USER_INFO:null,
        POSTED_USER_LOGIN_FORM:null,
		RECEIVED_PROVINCES:null,
        CHANGED_ADDRESS_FORM:null,
		RECEIVED_CATEGORY:null,
		CHANGED_CATEGORY_FORM:null,
		CHANGED_DATE_PICKER_FORM:null,
		POSTED_SEND_CARRY_FORM:null,
		POSTED_SEND_SHIP_FORM:null
    }),
    EventTypes:keyMirror({
        RECEIVED_MY_SEND_INFO:null,
        RECEIVED_MY_MESSAGE:null,
        RECEIVED_USER_INFO:null,
        POSTED_USER_LOGIN_FORM:null,
		RECEIVED_PROVINCES:null,
        CHANGED_ADDRESS_FORM:null,
		RECEIVED_CATEGORY:null,
		CHANGED_CATEGORY_FORM:null,
		CHANGED_DATE_PICKER_FORM:null,
		POSTED_SEND_CARRY_FORM:null,
		POSTED_SEND_SHIP_FORM:null
    })
}