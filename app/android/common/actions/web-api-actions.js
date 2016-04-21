var SystemDispatcher = require('../dispatcher/SystemDispatcher');
var WebAPIUtils = require('../web-api-utils');

module.exports = {
    getMySendInfo:function(formData){
        WebAPIUtils.getMySendInfo(formData);
    },
    getMyMessage:function(formData){
        WebAPIUtils.getMyMessage(formData);
    }
}