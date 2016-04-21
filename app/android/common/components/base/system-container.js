'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Platform,
  Dimensions
} = React;
    
var {height, width} = Dimensions.get('window');
var isIOS = Platform.OS === 'ios';
    
var SystemContainer = React.createClass({
    render:function(){
        return (<View style={styles.system}>
                        {this.props.children}
                </View>)
    }
})
        
var ContentContainer = React.createClass({
    render:function(){
        return (<View style={styles.content}>
                        {this.props.children}
                </View>)
    }
})
        
var styles = StyleSheet.create({
    system:{
        marginTop:isIOS?20:0,
        height:isIOS?height-20:height,
        width:width
    },
    content:{
        height:isIOS?height-20:height,
        width:width,
        backgroundColor:"#ddd"
    }
})

module.exports.SystemContainer = SystemContainer;
module.exports.ContentContainer = ContentContainer;