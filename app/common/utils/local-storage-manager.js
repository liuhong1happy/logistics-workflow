'use strict';
var React = require('react');
var {
  AsyncStorage
} =  require('react-native');

var LocalStorageManager = function() {
    this.dataKey = "dataKey";
    this.storage = AsyncStorage;
}
// base function
LocalStorageManager.prototype.getItem = function(key,callback){
    AsyncStorage.getItem(key,callback)
}
LocalStorageManager.prototype.setItem = function(key,value,callback){
    AsyncStorage.setItem(key, value,callback);
}
LocalStorageManager.prototype.removeItem = async function(key,callback){
    AsyncStorage.removeItem(key,callback);
}

// data
LocalStorageManager.prototype.getData = function (callback) {
     return this.getItem(this.dataKey,callback);
};
LocalStorageManager.prototype.setData = function (data,callback) {
    var json = data?JSON.stringify(data):null;
    this.setItem(this.dataKey, json,callback);
};

module.exports = LocalStorageManager;