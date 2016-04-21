'use strict';
var React = require('react-native');
var {
  AsyncStorage
} = React;

var LocalStorageManager = function() {
    this.dataKey = "dataKey";
    this.storage = AsyncStorage;
}

LocalStorageManager.prototype.getItem = function(key,callback){
    AsyncStorage.getItem(key,callback)
}
LocalStorageManager.prototype.setItem = function(key,value,callback){
    AsyncStorage.setItem(key, value,callback);
}
LocalStorageManager.prototype.removeItem = async function(key,callback){
    AsyncStorage.removeItem(key,callback);
}

// Best score getters/setters
LocalStorageManager.prototype.getData = function (callback) {
     return this.getItem(this.dataKey,callback);
};
LocalStorageManager.prototype.setData = function (data,callback) {
    var json = data?JSON.stringify(data):null;
    this.setItem(this.dataKey, json,callback);
};

module.exports = LocalStorageManager;