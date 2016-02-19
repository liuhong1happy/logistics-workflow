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

console.log(isIOS);
    
var SystemContainer = React.createClass({
    render:function(){
        return (<View style={styles.container}>
                        {this.props.children}
                </View>)
    }
})
        
var styles = StyleSheet.create({
    container:{
        marginTop:isIOS?20:0,
        height:isIOS?height-20:height,
        width:width,
        backgroundColor:"#f0f0f0"
    }
})

module.exports = SystemContainer;