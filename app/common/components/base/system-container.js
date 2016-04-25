'use strict';
var React = require('react');
var {
  StyleSheet,
  View,
  Platform,
} = require('react-native');
    
var Dimensions = require('./react-native-dimensions');
var Platform = require('./react-native-platform');

var {height, width} = Dimensions.get('window');
    
var SystemContainer = React.createClass({
    render:function(){
        return (<View style={[styles.system,this.props.style]}>
                        {this.props.children}
                </View>)
    }
})
        
var ContentContainer = React.createClass({
    render:function(){
        return (<View style={[styles.content,this.props.style]}>
                        {this.props.children}
                </View>)
    }
})
        
var styles = StyleSheet.create({
    system:{
        marginTop:Platform.isIOS?Dimensions.statusBarHeight:0,
        height:Dimensions.contentHeight,
        width:width
    },
    content:{
        height:Dimensions.contentHeight,
        width:width,
        backgroundColor:"#ddd"
    }
})

module.exports.SystemContainer = SystemContainer;
module.exports.ContentContainer = ContentContainer;